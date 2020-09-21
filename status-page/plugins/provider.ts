import { Plugin } from '@nuxt/types'
import Config from '~/config'
import Provider from '~/providers/Provider';

const provider: Plugin = async ({}, inject) => {
  if(!(Config.provider instanceof Provider)) {
    return; // No valid provider given.
  }

  await Config.provider.init();

  inject('provider', Config.provider);
}

export default provider;