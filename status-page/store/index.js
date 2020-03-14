export const state = () => ({
  provider: null
});

export const mutations = {
  setProvider(state, provider) {
    state.provider = provider;
  }
}

export const getters = {
  getProvider: state => {
    return state.provider;
  }
}