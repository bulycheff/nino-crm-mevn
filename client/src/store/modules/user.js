
export default {
  actions: {
    setUserToManage: async ( { commit }, newUser ) => {
      await commit('setUserToManage', newUser)
    }
  },
  mutations: {
    setUserToManage: ( state, newUser ) => state.userToManage = newUser
  },
  getters: {},
  state: {
    userToManage: null,
    loadedUsers: null
  }
}
