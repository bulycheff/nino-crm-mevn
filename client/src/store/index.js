import { createStore } from 'vuex'
import auth from './modules/auth'
import work from './modules/work'
import user from './modules/user'
import axios from 'axios'

axios.defaults.headers.common['Authorization'] = localStorage.token

export default createStore({
  actions: {},
  mutations: {},
  getters: {},
  state: {},
  modules: { user, auth, work }
})
