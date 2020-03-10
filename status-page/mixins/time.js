import moment from "moment-timezone"
import config from "@/config"

export default {
  methods: {
    formatDate: function(date, format) {
      return moment(date).tz(config.timezone).format(format);
    }
  }
}