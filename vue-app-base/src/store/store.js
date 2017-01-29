// Base Imports
import Vue from 'vue';
import Vuex from 'vuex';

// Tell Vue to use VueX
Vue.use(Vuex);

// State Bucket..
const state = {
  counter: 0
};

//TODO
//
//Separate Getters/actions/mutations into their own files
//
// - Getters
// - Actions
// - Mutations

// Getters
const getters = {
  doubleCounter: state => {
    return state.counter * 2;
  },
  stringCounter: state => {
    return state.counter + ' Clicks';
  }
};

// Mutations
const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: (state, payload) => {
    state.counter += payload;
  }

};


// Actions
const actions ={
  // Context gives access to all methods..
  // including commit.
  increment: (context, payload) => {
    // Async code...
    context.commit('increment', payload);
  },
  // This es6 syntax ({method}) will
  // deconstruct the object and pull only commit
  decrement: ({ commit }, payload) => {
    // Async Code...
    commit('decrement', payload);
  },
  asyncIncrement: ({ commit }, payload) => {
    setTimeout (()=>{
      commit('increment', payload);
    }, 1000);
  }
};


// Export package
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
