export default {
  timezone: "Europe/London",

  incidents: {
    overallDateFormat: "MMM D, YYYY",
    updateDateFormat: "MMM D, hh:mm zz"
  },

  // A provider is not required, its job is to provide uptimes and down statuses automatically
  provider: {
    name: 'uptimerobot',
    apikey: 'ur488195-bd46852677deb5ca10988538' // USE A READ ONLY KEY FOR UPTIMEROBOT
  },

  monitors: [
    [
      {
        name: "CDN",
        description: "We serve our content via a CDN, this makes it load as fast as possible.",
        provider_id: 782849159
      },
      {
        name: "API",
        description: "This allows other developers to hook into our service.",
        provider_id: 780071088
      },
    ],

    // Category example
    {
      group_name: "Services",

      collapsable: true,
      collapsed: false,

      monitors: [
        {
          name: "Demos",
          provider_id: 779382341
        },
        {
          name: "Images",
          description: "We host all of our images in a central location.",
          provider_id: 779428955
        }
      ]
    }
  ]
}