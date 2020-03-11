export const state = () => ({
  incidents: [],
});

export const mutations = {
  setIncidents(state, incidents) {
    state.incidents = incidents;
  }
}

export const getters = {
  getIncidents: state => {
    return state.incidents;
  },
  
  getResolvedIncidents: state => {
    return state.incidents.filter(incident => incident.attributes.resolved);
  },
  getUnresolvedIncidents: state => {
    return state.incidents.filter(incident => incident.attributes.resolved);
  },
  
  getIncidentsRelatedToMonitor: state => monitor => {
    return state.incidents.filter(incident => incident.attributes.affected.indexOf(monitor) > -1);
  },
  getRelatedActiveIncidentsToMonitor: state => monitor => {
    return state.incidents.filter(incident => {
      if(incident.attributes.resolved) return false;
      return incident.attributes.affected.indexOf(monitor) > -1;
    });
  }
}

export const actions = {
  async loadIncidents({ commit }) {
    const resolve = require.context('@/content/incidents/', true, /\.md$/);
    const incidents = resolve.keys().map(key => {
      return resolve(key);
    }).reverse();

    commit('setIncidents', incidents);
  }
}