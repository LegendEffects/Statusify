import { Plugin, Context } from '@nuxt/types'

const plugin: Plugin = async (ctx: Context) => {
  // Since Nuxt didn't do it for us, we just loop through every registered store action
  // and check if it is nuxtClientInit and then give it the context.

  for(const action in (ctx.store as any)._actions) {
    const split = action.split('/');
    if(split.pop() === 'nuxtClientInit') {
      await ctx.store.dispatch(action, ctx);
    }
  }
}

export default plugin;
