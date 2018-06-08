import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: []
  },
  mutations: {
    addEvent(state, { name, description, date }) {
      state.events.push({
        name: name,
        description: description,
        date: date
      });
    },
    deleteEvent(state, index) {
      state.events.splice(index, 1)
    }
  },
  getters: {
    events(state) {
      return state.events;
    }
  }
})
