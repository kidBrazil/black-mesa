import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';

//Import Routes
import { routes  } from './routes.js';

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
  mode: 'history'
});

// [ EVENT BUS SETUP ]----------------
// 
// { eventBus.$Emit - emitter }
//
// eventBus.$emit('eventName', data);
// 
// to emit events to the bus that will
// get received by other components
//
// -----------------------------------
// { eventBus.$on - listener }
//
// eventBus.on('eventName' (data)=>{
//      Do something...
// })
//
// To listen to the events being sent
// to the bus. Best placed inside 
// created() lifecycle hook.
//
//----------------------------------
//
// Export as Constant
//

export const eventBus = new Vue();

//----------------------------------
// [ ACCESS EVENT BUS ]
//
// To access the eventBus you must
// import the Bus from main.js using..
//
// { Import Bus }
//
// import { eventBus } from '../main';
//
// ---------------------------------



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
  render: h => h(App)
});
