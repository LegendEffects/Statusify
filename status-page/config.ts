import UptimeRobotProvider from "./providers/UptimeRobotProvider";

export default {
  timezone: "Europe/London",
  pageLimit: 10,

  title: {
    prefixed: "{prefix} | Status Page",
    default: "Status Page"
  },

  header: {
    logo: "",
    name: "Status Page",

    link: "/",

    showOverallStatus: true
  },

  // A provider isn't a requirement, its job is to provide status information from an external service.
  provider: new UptimeRobotProvider('ur488195-bd46852677deb5ca10988538'),

  monitors: [
    [
      {
        name: "VPS",
        description: "The core of our services.",
        provider_id: '780071088',
        latency: false // Latency data requires the provider to be compatible
      },
      {
        name: "Demo Pages",
        description: "Hosts all product demos and staging areas.",
        provider: {
          id: '779382341'
        }
      }
    ],

    // Category example
    {
      name: "Services",
      description: "These services are core to our business.",

      collapsible: true,
      collapsed: true,

      monitors: [
        {
          name: "API",
          provider: {
            id: '779382340'
          }
        },
        {
          name: "Images",
          description: "We host all of our images in a central location.",
          provider: {
            id: '779428955'
          }
        }
      ]
    }
  ],

  dateFormats: {
    overall: "MMM D, YYYY",
    update: "MMM D, hh:mm zz",
    fullPage: "MMM D, YYYY, hh:mm zz"
  },

  viewportMargins: [
    {width: 1200, box: "0 0 448 34", days: 90},
    {width: 1000, box: "0 0 298 34", days: 60},
    {width: 0, box: "0 0 148 34", days: 30}
  ],

  severityRatings: [
    {
      name: "major",
      display_name: "Major",
      percentage: 0
    },
    {
      name: "partial",
      display_name: "Partial",
      percentage: 85
    },
    {
      name: "info",
      display_name: "Affected",
    },
    {
      name: "operational",
      display_name: "Operational",
      percentage: 100
    }
  ]
}
