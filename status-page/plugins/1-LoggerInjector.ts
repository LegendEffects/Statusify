import { Context, Plugin } from '@nuxt/types'
import Logger from '~/utils/Logger';

const LoggerInjector: Plugin = async (ctx: Context, inject) => {
  const logger = new Logger();

  ctx.$logger = logger;
  inject('logger', logger);
}

export default LoggerInjector;
