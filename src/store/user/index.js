// import * as firebase from 'firebase'

export default {
  state: {
    user: null,
    companies: [],
    yards: []
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setCompanies (state, payload) {
      state.companies = payload
    },
    setYards (state, payload) {
      state.yards = payload
    }
  },
  actions: {
    signUserIn ({commit, dispatch}, payload) {
      commit('setLoading', true)
      commit('clearError')
      // console.log('signin')
      window.$ajax({
        url: window.url + '/v1/userLogin',
        data: { user: payload.email, password: payload.password },
        type: 'POST',
        error: function () {
          console.log('error')
        },
        success: function (data) {
          // console.log(data)
          const jsondata = JSON.parse(data)
          console.log(jsondata)
          // console.log(jsondata.defaultCompany)

          if (jsondata.result === 'Valid Login') {
            const newUser = {
              id: jsondata.userID,
              registeredMeetups: [],
              fbKeys: {}
            }
            dispatch('fetchYards')
            commit('setUser', newUser)
          }
        }
      }) // end ajax
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {
        id: payload.uid,
        registeredMeetups: [],
        fbKeys: {}
      })
    },
    logout ({commit}) {
      // firebase.auth().signOut()
      commit('setUser', null)
    },
    fetchYards ({commit, dispatch}) {
      // console.log('yard')
      window.$ajax({
        url: window.url + '/yard_list',
        type: 'GET',
        error: function () {
          console.log('error')
        },
        success: function (data) {
          // console.log(data)
          const jsondata = JSON.parse(data)
          console.log(jsondata)
          commit('setYards', jsondata)
          dispatch('fetchCompanies')
        }
      }) // end ajax
    },
    fetchCompanies ({commit}) {
      // console.log('company')
      window.$ajax({
        url: window.url + '/company_list',
        type: 'GET',
        error: function () {
          console.log('error')
        },
        success: function (data) {
          // console.log(data)
          const jsondata = JSON.parse(data)
          console.log(jsondata)
          commit('setCompanies', jsondata)
        }
      }) // end ajax
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    companies (state) {
      return state.companies
    },
    yards (state) {
      return state.yards
    }
  }
}
