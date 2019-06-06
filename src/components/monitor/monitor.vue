<template>
    <div class="container">
        <div class="container--pad">
            <monitor-data :monitor="monitor"></monitor-data>
        </div>
        <!-- <div class="extraInfo--container data--container">
            <div class="contain">
                <span class="data--title">{{monitor.typeStr.toUpperCase()}} - (Checked every {{monitor.intervalMin}} minutes.)</span>
                <div class="chart-container" :id="'chart-'+monitor.id" style="width: 100%; height: 200px; margin-top: 20px;"></div>
                <div class="latestLog eventTable">
                    <table>
                        <thead>
                            <tr>
                                <th>Event</th>
                                <th>Date</th>
                                <th>Reason</th>
                                <th>Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="circle" :class="'status--'+log.label+'--c'"></span>
                                <td>{{log.dateTimeStr}}</td>
                                <td>{{log.reasonStr}}</td>
                                <td>{{log.durationStr}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'monitor',
    props: ['monitor']
}
</script>

<style scoped>
    .container {
        border-radius: 5px;
        border: 1px solid #E0E0E0;
        margin-bottom: 30px;
    }
    .container:hover {
        cursor: pointer;
    }

    .addPadding {
        padding: 10px;
    }

    .container--titlebar {
        border-radius: 5px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;

        color: #fff;
        padding: 10px;
    }

    .extraInfo--container {
        max-height: 0;
        overflow: hidden;
        transition: max-height 1s cubic-bezier(0, 1, 0, 1);
        border-top: solid 1px #E0E0E0;
    }
    .extraInfo--container.show {
        display: block;
        max-height: 99em;
        transition: max-height 1s ease-in-out;
    }
    .extraInfo--container .contain {
        padding: 10px;
        padding-top: 20px;
    }

    @media only screen and (max-width: 768px) {
        .data--indicator--block {
            padding: 3px 7px;
            font-size: 10px;
        }
    }

    .circle:before {
        content: ' \25CF';
        font-size: 75px;
    }
    .circle.status--success--c:before {
        color: #2ecc71;
    }
    .circle.status--danger--c:before {
        color: #e74c3c;
    }

    .eventTable table {
        width: 100%;
        border: 1px solid #E0E0E0;
    }
    .eventTable th {
        padding: 20px;
        text-align: left;
        border-left: 1px solid #E0E0E0;
        border-bottom: 1px solid #E0E0E0;
    }
    .eventTable td:first-of-type, .eventTable th:first-of-type {
        text-align: center;
    }
    .eventTable td {
        padding: 10px 20px;
        border-left: 1px solid #E0E0E0;
    }

    .eventTable table th:first-of-type, .eventTable table td:first-of-type {
        border-left: 0;
    }
</style>
