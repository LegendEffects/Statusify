# UptimeRobot-ExternalStatus

## A clean self hosted status page which uses UptimeRobots API.

### Design
The design is inspired by other services such as Cachet and StatusPage

### Caching
To prevent UptimeRobot from adding us to an anti DDoS list, we have to cache each response for 5 minutes, we are unable to just request straight from the client due to a CORS policy, so we proxy it through the host server using PHP. 


### Features
* Show all monitors with weekly ratios
* Ability to see the ping responses on a nice graph


### Libraries Used
* Vue
* Highcharts
* Axios


### Installation
* Drop the files onto a web server.
* Go to your standard (non-custom) URL and get the key - stats.uptimerobot.com/(urlKey)
* Change the URLs in the /temp directory, these will later be polished and moved to the /api directory


**View in Production: https://status.legendeffects.co.uk**
