import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);

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
  render: h => h(App)
});
