import { Context, Plugin } from '@nuxt/types'
import Config from '@@/config'
import StatusLib from './impl/StatusLib'

const StatusLibPlugin: Plugin = async (ctx: Context, inject) => {
  const config = new Config()
  const status = new StatusLib(config, ctx)
  await status.init(config)

  ctx.$status = status
  inject('status', status)
}

export default StatusLibPlugin
