import { BaseConfig } from './src/status-lib/BaseConfig'

export default class extends BaseConfig {
  /**
   * Components Config
   */
  components = [
    // Named Group
    {
      name: 'Servers',
      description: 'Test Description',
      collapsible: true,
      components: [
        {
          name: 'London 1',
          description: 'Domain Controller 1',
          slug: 'eu-lon1',
          provider: {
            id: '780071088',
          }
        },
        {
          name: 'London 2',
          slug: 'eu-lon2',
          description: 'Domain Controller 2',
        }
      ]
    },

    // Anonymous Group
    [
      {
        name: 'API',
        slug: 'api',
        provider: {
          id: '779382340',
        }
      },
      {
        name: "Images",
        slug: 'images',
        description: "We host all of our images in a central location.",
        provider: {
          id: '779428955'
        }
      }
    ]
  ]

  /**
   * MomentJS Config
   */
  moment = {
    timezone: 'Europe/London',

    formats: {
      short: 'MMM D, YYYY',
      medium: 'MMM D, hh:mm zz',
      full: 'MMM D, YYYY, hh:mm zz'
    }
  }

  /**
   * Ticks Viewbox
   */
  ticks = [
    {width: 1200, box: "0 0 448 34", days: 90},
    {width: 1000, box: "150 0 298 34", days: 60},
    {width: 0, box: "300 0 148 34", days: 30}
  ]

  /**
   * Severities
   */
  severities = [
    {
      id: "major",
      displayName: "Major",
      percentage: 0
    },
    {
      id: "partial",
      displayName: "Partial",
      percentage: 85
    },
    {
      id: "info",
      displayName: "Affected",
    },
    {
      id: "operational",
      displayName: "Operational",
      percentage: 100
    }
  ]
}
