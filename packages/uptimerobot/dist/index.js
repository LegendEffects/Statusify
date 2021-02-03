"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class UptimeRobotCore {
    constructor(apiKey) {
        this.axios = axios_1.default.create({
            baseURL: UptimeRobotCore.API_URL,
            params: {
                api_key: apiKey,
                format: 'json'
            }
        });
    }
}
exports.default = UptimeRobotCore;
UptimeRobotCore.API_URL = 'https://api.uptimerobot.com/v2/';
//# sourceMappingURL=index.js.map