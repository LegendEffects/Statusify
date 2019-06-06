import Vue from 'vue';

module.exports = Vue.mixin({
    methods: {
        parseStatus: function(status) {
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
        parseSeverity: function(input) {
            if (input < 80) {
                return 'Major';
            } else if (input < 100) {
                return 'Partial';
            } else {
                return 'Operational';
            }
        }
    }
});