let elements = {},
    status = {},
    internal = {currentTime: 0, intTime: settings.refreshInterval},
    templates = {monitor: {}};

elements.monitorGlobal = $('#status-global');
elements.monitorContainer = $('#status-monitors');
elements.loader = $('#loader');
elements.timeLeft = $('#timeLeft');

internal.url = 'api/status.php';

templates.monitor.top = '<div id="{id}" class="monitor--container"><div class="monitor--data--container"><span class="monitor--data--title">{name}</span><span class="monitor--data--status status--{lowerStatus}--c">{status}</span></div><div class="monitor--data--percentile--container">';
templates.monitor.percentile = '<span class="monitor--data--indicator--block status--{lowerStatus}">{percent}%</span>';
templates.monitor.bottom = '</div><div class="monitor--data--base--container"><div class="monitor--data--base--data">6 Days Ago</div><div class="monitor--data--base--spacer"></div><div class="monitor--data--base--data monitor--data--base--center">{statusAvg}%</div><div class="monitor--data--base--spacer"></div><div class="monitor--data--base--data">Today</div></div></div>';
templates.statusGlobal = '<div class="status--current--container status--{lowerStatus}">{status}</div>';

function getStatus() {
    $.ajax({
        url: internal.url,
        success: function(json) {
            status = JSON.parse(json);
            updateMonitors();
        }
    });
}

function parsePlaceholders(placeholders, string) {
    let final = string;
    for(const key in placeholders) {
        if(placeholders.hasOwnProperty(key)) {
            final = final.replace('{'+key+'}', placeholders[key]);
        }
    }
    return final;
}

function parseStatus(status) {
    switch(status) {
        case 0:
            return 'Paused';
        case 1:
            return 'Unknown';
        case 2:
            return 'Operational';
        case 8:
            return 'Partial';
        case 9:
            return 'Major';
        case 'success':
            return 'Operational';
        case 'empty':
            return 'Unknown';
        case 'warning':
            return 'Partial';
    }
}
function parseSeverity(ratio) {
    if(ratio < 60) {
        return 'Major';
    } else if (ratio < 100) {
        return 'Partial';
    } else {
        return 'Operational';
    }
}
function parseFriendlyStatus(ratio) {
    if(ratio < 90) {
        return 'Major Outage';
    } else if (ratio < 100) {
        return 'Partial Outage';
    } else {
        return 'All Systems Operational';
    }
}

function createMonitor(monitor) {
    let status = parseStatus(monitor.statusNumber);

    let final = parsePlaceholders({'id': monitor.id, 'name': monitor.friendly_name, 'status': status, 'lowerStatus': status.toLowerCase()}, templates.monitor.top);

    // Generate percent blocks
    for(const percent of monitor.customuptimeranges) {
        final += parsePlaceholders({'lowerStatus': parseSeverity(percent.ratio).toLowerCase(), 'percent': percent.ratio}, templates.monitor.percentile);
    }

    final += parsePlaceholders({'statusAvg': monitor.oneWeekRange.ratio}, templates.monitor.bottom);

    elements.monitorContainer.append(final);
    return true;
}

function checkExistence(monitor) {
    let check = document.getElementById(monitor.id);
    if(check === null) {
        createMonitor(monitor);
        return false;
    } else {
        return true;
    }
}

function updateMonitors() {
    monitors = status.psp.monitors;
    elements.monitorContainer.empty();
    for(const monitor of monitors) {
        checkExistence(monitor);
    }

    let amountActive = status.psp.monitorCount - status.psp.pspStats.counts.paused;
    let percentAlive = 100 - ((amountActive - status.psp.pspStats.counts.up) / amountActive) * 100;
    let serverity = parseSeverity(percentAlive);

    elements.monitorGlobal.html(parsePlaceholders({'lowerStatus': serverity.toLowerCase(), 'status': parseFriendlyStatus(percentAlive)}, templates.statusGlobal));
}

getStatus();

function iterate() {
    if(internal.currentTime >= internal.intTime) {
        internal.currentTime = 0;
        getStatus();
    }

    internal.currentTime++;

    let left = internal.intTime - internal.currentTime;
    elements.timeLeft.html('Refreshing in: '+left+' Seconds');
}

setInterval(iterate, 1000);