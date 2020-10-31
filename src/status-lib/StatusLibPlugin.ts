import { Context, Plugin } from '@nuxt/types'
import StatusLib from './impl/StatusLib'

const StatusLibPlugin: Plugin = (ctx: Context, inject) => {
  const config = (ctx.$config && ctx.$config.statusLib) || {}
  const status = new StatusLib(config, ctx)

  ctx.$status = status
  inject('status', status)
}

export default StatusLibPlugin
