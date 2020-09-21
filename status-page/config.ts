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
        provider_id: 780071088,
        latency: false // Latency data requires the provider to be compatible
      },
      {
        name: "Demo Pages",
        description: "Hosts all product demos and staging areas.",
        provider_id: 779382341
      }
    ],

    // Category example
    {
      group_name: "Services",
      description: "These services are core to our business.",

      collapsible: true,
      collapsed: false,

      monitors: [
        {
          name: "Website",
          provider_id: 779382340
        },
        {
          name: "Images",
          description: "We host all of our images in a central location.",
          provider_id: 779428955
        },
        {
          name: "Mail Server",
          provider_id: 779382339
        }
      ]
    }
  ],

  incidents: {
    overallDateFormat: "MMM D, YYYY",
    updateDateFormat: "MMM D, hh:mm zz",

    fullPageDateFormat: "MMM D, YYYY, hh:mm zz"
  },

  severityRatings: [
    {
      name: "major",
      display_name: "Major"
    },
    {
      name: "partial",
      display_name: "Partial"
    },
    {
      name: "info",
      display_name: "Affected"
    },
    {
      name: "operational",
      display_name: "Operational"
    }
  ]
}