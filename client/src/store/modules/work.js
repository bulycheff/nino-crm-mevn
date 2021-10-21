import axios from 'axios'
import { server_api_work } from '../../config'

export default {
  actions: {
    setDays: async ({commit}) => {
      axios.get(`${ server_api_work }days/active`)
        .then(loaded => {
          commit('setDays', loaded.data)
        })
        .catch(err => console.log(err))
    }
  },
  mutations: {
    setDays: (state, days) => {
      state.days = days
    }
  },
  getters: {
    days: state => state.days,
    hasDays: state => state.days ? state.days.length : false
  },
  state: {
    days: null
  }
}