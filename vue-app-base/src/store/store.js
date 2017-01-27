// Base Imports
import Vue from 'vue';
import Vuex from 'vuex';

// Tell Vue to use VueX
Vue.use(Vuex);

// State Bucket..
const state = {
  count: 0
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
    return state.count * 2;
  }
};

// Mutations
const mutations = {
  increment: state => {
    state.count++;
  }
};

// Export package
export default new Vuex.Store({
  state,
  mutations
});
