import moment from "moment-timezone"
import config from "@/config"

export default {
  methods: {
    formatDate: function(date, format) {
      return moment(date).tz(config.timezone).format(format);
    },
    
    formatDuration: function(start, end) {
      start = moment(start).tz(config.timezone);
      end = moment(end).tz(config.timezone);

      return moment.duration(start.diff(end)).humanize();
    }
  }
}