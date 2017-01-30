import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';

//Import Routes
import { routes  } from './routes.js';

import store from './store/store.js';

// [ VUE-RESOURCE SETUP ] ------------

// Initialize vue-resource | vue-router
Vue.use(VueResource);
Vue.use(VueRouter);
// Set Global Root path
Vue.http.options.root = 'https://vuejs-http-resource.firebaseio.com/';

// Set Global Intercept 
Vue.http.interceptors.push( (request, next) => {
  console.log(request);
  next(); 
});


// Router Setup - [import]
// --------------------------------
// Server must be set to AWLAYWAS return
// [index.html] file for history mode to work.
//
// History mode in vue-router permits forgoing
// the ugly "#" hash syntax on Url's.
//
const router = new VueRouter ({
  routes: routes,
  mode: 'history',

  //Control Scrolling Behavior
  scrollBehavior( to, from, savedPOsition ){
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
  }
});

// Render Function
new Vue({
  el: '#app',
  http: {
    root: '/root',
    headers: {
      Authorization: 'Basic YXBp0nBhc3N3b3Jk'
    }
  },
  router,
  store,
  render: h => h(App)
});
