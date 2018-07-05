import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const addInputA = {
  namespaced: true,
  state: {
    firstParam: '?',
    secondParam: '?',
    total: '?'
  },
  getters: {
    total: state => {
      return state.firstParam + state.secondParam
    }
  },
  mutations: {
    setFirstParam(state, first) {
      state.firstParam = first
    },
    setSecondParam(state, second) {
      state.secondParam = second
    },
    calculateTotal(state) {
      state.total = state.firstParam + state.secondParam
    }
  }
}

const addInputB = {
  namespaced: true,
  state: {
    firstParam: '?',
    secondParam: '?',
    total: '?'
  },
  getters: {
    total: state => {
      return state.firstParam + state.secondParam
    }
  },
  mutations: {
    setFirstParam(state, first) {
      state.firstParam = first
    },
    setSecondParam(state, second) {
      state.secondParam = second
    },
    calculateTotal(state) {
      state.total = state.firstParam + state.secondParam
    }
  }
}

export default new Vuex.Store({
  modules: {
    a: addInputA,
    b: addInputB
  }
})
