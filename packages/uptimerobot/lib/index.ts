import axios, { AxiosInstance } from "axios";

export default class UptimeRobotCore {
    // Constants
    private static readonly API_URL = 'https://api.uptimerobot.com/v2/'
    
    // Instance
    public readonly axios: AxiosInstance

    //
    // Constructor
    //
    constructor(apiKey: string) {
        this.axios = axios.create({
            baseURL: UptimeRobotCore.API_URL,
            params: {
                api_key: apiKey,
                format: 'json'
            }
        })
    }
}