#Routing [ SPA ] - vue-router
This document describes the routing scheme being used in this project. This is all based on the vue-router dependency and you can find more information on it on their [Documentation Page](https://github.com/vuejs/vue-router "vue-router Documentation").

##Setup
Router setup is simple. It requires a couple of configurations to be set on main.js

Check out the vue router documentation on [History Mode](https://router.vuejs.org/en/essentials/history-mode.html "History Mode Server Setup")
```
//main.js

// Import vue-router..
import VueRouter from 'vue-router';
// Import Routes
import { routes  } from './routes.js'

// Tell Vue to use vue-router..
Vue.use(VueRouter);

// Setup Router...

const router = newVueRouter ({
  routes,

  // Use History Mode to remove '#' from URL
  // Server must be configured to serve index.html on all requests.
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
```

##Routes.js
Outsourced routing table.

```
//routes.js

//Import parent template components
import Home from './component/home.vue'
import User from './component/user.vue'
import UserProfile from './component/user-profile.vue'
import UserEdit from './component/user-edit.vue'

// Export Constant...
export const routes =[
  
  // Route...
  {
    path: '', component: Home
  },
  {
    path: '/user', component: User, children: [
      //Child Routes...
      {
        // resolves to /user/:id/profile/
        path: ':id/profile', component: UserProfile, name: 'userProfile'
      },
      {
        // resolves to /user/:id/profile/edit
        path: ':id/profile/edit', component: UserEdit, name: 'userEdit'
      }
    
    ]}
  },
];

// Dynamic Routed Link.
<router-link
  tag="button"
  //to bound to named route.
  :to="{ name: 'userEdit', params: { id: $route.params.id  } }"
  class="primary">Edit User</router-linki>

```

##Template
To use the router you must set a router-view element so that Vue knows where to render the change.

```
<script>
  // Command Based navigatio
  export default {
    data() {
      return {
        // Extract URI Parameters
        id: this.$route.params.id
      }
    },
    // Use Watch functions to react to state changes in URI
    watch: {
      // Watch for updates on route.
      '$route'(to, from){
        // This.id maps to params.id
        this.id = to.params.id;
      }
    
    }
    methods: {
      navigateToHome() {
        //Push navigation into the stack array.
        this.$router.push('/');
      }
    }
  }
</script>
<template>
  <div>
    <ul>
      // Use Router Link instead of A for route based SPA navigation.
      <li><router-link to ="/" active-link="active-class"></router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
```
