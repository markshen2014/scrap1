import * as firebase from 'firebase'

export default {
  state: {
    user: null,
    companies: [],
    yards: []
  },
  mutations: {
    registerUserForMeetup (state, payload) {
      const id = payload.id
      if (state.user.registeredMeetups.findIndex(meetup => meetup.id === id) >= 0) {
        return
      }
      state.user.registeredMeetups.push(id)
      state.user.fbKeys[id] = payload.fbKey
    },
    unregisterUserFromMeetup (state, payload) {
      const registeredMeetups = state.user.registeredMeetups
      registeredMeetups.splice(registeredMeetups.findIndex(meetup => meetup.id === payload), 1)
      Reflect.deleteProperty(state.user.fbKeys, payload)
    },
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
    registerUserForMeetup ({commit, getters}, payload) {
      commit('setLoading', true)
      const user = getters.user
      firebase.database().ref('/users/' + user.id).child('/registrations/')
        .push(payload)
        .then(data => {
          commit('setLoading', false)
          commit('registerUserForMeetup', {id: payload, fbKey: data.key})
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    unregisterUserFromMeetup ({commit, getters}, payload) {
      commit('setLoading', true)
      const user = getters.user
      if (!user.fbKeys) {
        return
      }
      const fbKey = user.fbKeys[payload]
      firebase.database().ref('/users/' + user.id + '/registrations/').child(fbKey)
        .remove()
        .then(() => {
          commit('setLoading', false)
          commit('unregisterUserFromMeetup', payload)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredMeetups: [],
              fbKeys: {}
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
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
    fetchUserData ({commit, getters}) {
      commit('setLoading', true)
      firebase.database().ref('/users/' + getters.user.id + '/registrations/').once('value')
        .then(data => {
          const dataPairs = data.val()
          let registeredMeetups = []
          let swappedPairs = {}
          for (let key in dataPairs) {
            registeredMeetups.push(dataPairs[key])
            swappedPairs[dataPairs[key]] = key
          }
          const updatedUser = {
            id: getters.user.id,
            registeredMeetups: registeredMeetups,
            fbKeys: swappedPairs
          }
          commit('setLoading', false)
          commit('setUser', updatedUser)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    logout ({commit}) {
      firebase.auth().signOut()
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
