import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const axiosInstance = axios.create({
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hotelResults: [],
    autoSuggest: [],
    searchedText: null,
    errorMessage: null,
    loading: false
  },
  getters: {
    hotelResults (state) {
      return state.hotelResults
    },
    autoSuggest (state) {
      return state.autoSuggest
    },
    searchedText (state) {
      return state.searchedText
    },
    errorMessage (state){
      return state.errorMessage
    },
    loading (state) {
      return state.loading
    }
  },
  mutations: {
    SET_HOTEL_RESULTS (state, payload) {
      console.log(payload)
      state.hotelResults = payload.data
    },
    SET_AUTO_SUGGEST (state, payload) {
      state.autoSuggest = payload.data
    },
    SET_SEARCHED_TEXT (state, city) {
      state.searchedText = city
    },
    SET_ERROR_MESSAGE (state, errorMessage) {
      state.errorMessage = errorMessage
    },
    SET_LOADING (state, status) {
      state.loading = status
    }

  },
  actions: {
    async hotelSearch ({ commit }, payload) {
      commit('SET_LOADING', true)
      commit('SET_HOTEL_RESULTS', { data: [] })
      commit('SET_SEARCHED_TEXT', payload.cityCode)
      commit('SET_ERROR_MESSAGE', null)
      const result = await axiosInstance
        .get(`/job01/search/${payload.cityCode}`)
        .then((data) => {
          commit('SET_LOADING', false)
          if (data.status === 200) {
            commit('SET_HOTEL_RESULTS', data)
            return data.data
          } else {
            console.log(data)
            commit('SET_ERROR_MESSAGE', "Something went wrong");
          }
        })
        .catch((err) => {
          commit('SET_LOADING', false)
          commit('SET_ERROR_MESSAGE', String(err))
        })
      return result
    },
    async autoSuggest ({ commit }) {
      const result = await axiosInstance
        .get(`/job01/autosuggest`)
        .then((data) => {
          if (data.status === 200){
            console
            commit('SET_AUTO_SUGGEST', data)
            return data
          } else {
            commit('SET_ERROR_MESSAGE', "Something went wrong");
          }
        })
        .catch((err) => {
          commit('SET_ERROR_MESSAGE', String(err))
        })
      return result
    }
  }
})
