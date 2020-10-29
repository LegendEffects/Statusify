import { Context, Plugin } from '@nuxt/types'
import Config from '~/config'
import Provider from '~/providers/Provider';
import { LogTypes } from '~/utils/Logger';

const provider: Plugin = async ({ $logger }: Context, inject) => {
  if(!(Config.provider instanceof Provider)) {
    $logger.info('Provider', 'No valid provider specified in config, skipping.');
    return; // No valid provider given.
  }

  $logger.group('Provider', 'Intialization', LogTypes.INFO);
  $logger.info('Provider', 'Initializing Provider.');

  try {
    await Config.provider.init();
    $logger.success('Provider', 'Successfully Initialized Provider.');
  } catch(e) {
    $logger.error('Provider', 'There was an error initializing the provider.', e);
  }

  $logger.endGroup();

  inject('provider', Config.provider);
}

export default provider;
