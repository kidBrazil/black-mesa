// [ Moreira Development ] Project Entry --------------------------
// Author: Lucas Moreira - l.moreira@live.ca

// [ Vue.js ] -------------------------------------------
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VueHead from 'vue-head';
import App from './App.vue';

// Import Routes & Central Stores
import { routes  } from './routes.js';
import store from './store/store.js';
//
// To see an example, check buttons.css and the btn-primary.vue element
import inViewportDirective from 'vue-in-viewport-directive';
Vue.directive('in-viewport', inViewportDirective);

// Check View Directive
import checkView from 'vue-check-view';
Vue.use(checkView);

// Import Auth Plugin
// TODO - Remove Auth if not being used
import Auth from './plugins/auth.js';

// [ i18n - Internationalization ] ----------------------

// Configure I18n Internationalization Locales
// TODO - Update locale files accordingly
import en from './locales/en.js';
import pt from './locales/pt.js';
const locales = {
  en,
  pt
};

// Initialize vue-resource | vue-router | vue-i18n
Vue.use(VueI18n);
Vue.use(VueResource);
// Vue Head Configuration
// TODO - Edit Title Separator
// SEE - https://github.com/ktquez/vue-head
Vue.use(VueHead, {
  separator: ' | '
})
Vue.use(VueRouter);
// TODO - Disable auth if not used
Vue.use(Auth);

// Set Language Default [ ENGLISH ]
Vue.config.lang = 'en';

// Create Global Method for accepting language change
Vue.prototype.$locale = {
  change (lang) {
    Vue.config.lang = lang;
  },
  current () {
    return Vue.config.lang;
  }
};

// Set Key:value pairs for translation keys
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang]);
});
//-----------------------------------------------[ i18n ]

// [ Vue Resource ] ------------------------------------
// Set Global Root path
// TODO - Point root option to appropriate DB as applicable
Vue.http.options.root = 'https://vuejs-http-resource.firebaseio.com/';

// Set Global Intercept
// TODO - Remove or edit interceptors as needed
Vue.http.interceptors.push( (request, next) => {
  console.log(request);
  // To use when defining a single API that is not firebase
  //if (request.url[0] === '/'){
  //  request.url = "https:apiurl:3030" + request.url;
  //}
  next( function(response){
    if (response.status == 404){
      alertify.error('Sorry, Our systems are not responding right now.');
    }
  });
});

//--------------------------------------[ vue-resource ]


// [ Vue-Router ] ------------------------------------
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
  scrollBehavior( to, from, savedPosition ){
    // If URL has a #anchor
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    else if (savedPosition) {
      return savedPosition;
    }
    else {
      return { x: 0, y: 0 }
    }
  }
});
//--------------------------------------[ vue-router ]

// [ Global Mixins ] --------------------------------
Vue.mixin({
  methods: {
    loadImage(path){
      return require('./assets/images/' + path);
    },
    // Change Language METHOD
    change () {
      let current = this.$locale.current();
      if (current === 'en') {
        this.$locale.change('pt');
      } else {
        this.$locale.change('en');
      }
    }
  }
})



// [ Main Vue Instance ] ----------------------------
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
