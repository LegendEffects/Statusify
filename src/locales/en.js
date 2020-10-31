export default {
  tooltip: '(?)',

  component: {
    groups: {
      overallStatusDescription:
        'Groups take on the status of their most degraded child component. Click to see the status of individual children.',
    },
    statusDescription:
      'Statuses are calculated by the uptime and incident with the highest severity.',

    downtime: {
      none: 'No downtime recorded for this day',
      display: '{severity} Outage',
    },

    incidents: {
      none: 'No incidents reported on this day.',
      related: 'Related',
    },
  },
}
