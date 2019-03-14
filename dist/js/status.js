let app = new Vue({
    el: '#vueApp-status',
    data: {
        global: {
            'message': 'Loading...',
            'status': 'unknown',
            'timeleft': 0,
            'loader': {'active': true}
        },
        reqFeedback: {
            psp: {
                monitors: [],
                latestDownTimeStr: ''
            }
        }
    },
    methods: {
        parseStatus(status) {
            switch(status) {
                case 0:
                    return 'Paused';
                case 2:
                    return 'Operational';
                case 8:
                    return 'Partial';
                case 9:
                    return 'Major';
                case 'success':
                    return 'Operational';
                case 'warning':
                    return 'Partial';
                default:
                    return 'Unknown';
            }
        },
        parseSeverity(input) {
            if (input < 80) {
                return 'Major';
            } else if (input < 100) {
                return 'Partial';
            } else {
                return 'Operational';
            }
        },
        refresh() {
            if(app.global.timeleft <= 0) {
                app.global.timeleft = settings.refreshInterval;
                this.poll();
            } else {
                app.global.timeleft--;
            }
        },
        poll() {
            app.global.loader.active = true;
            ajax.get('api/status.php', {}, function(data) {
                data = JSON.parse(data);
                app.reqFeedback = data;

                let amountActive = data.psp.monitorCount - data.psp.pspStats.counts.paused;
                let percentAlive = 100 - ((amountActive - data.psp.pspStats.counts.up) / amountActive) * 100;

                app.global.status = app.parseSeverity(percentAlive).toLowerCase();
                if(percentAlive < 90) {
                    app.global.message = 'Major Outage';
                } else if (percentAlive < 100) {
                    app.global.message = 'Partial Outage';
                } else {
                    app.global.message = 'All Systems Operational';
                }
                app.global.loader.active = false;
            })
        }
    },
    created() {
        setInterval(this.refresh, 1000);
    }
});