<template lang="pug">
  main(id="app")
    //-Skip Navigatio Accessbility
    button(href="#mainContent"
      title="Skip to main content"
      aria-label="Skip to main content"
      v-on:click.stop.prevent="skipNav"
      class="mdev-skipnav" tabindex="0")
        |Skip To Main Content

    //- Main Navigation
    main-navigation
    //- Transition Wrapper
    transition(name="fade")
      //- Router View
      router-view
    // Cookies
    cookie-popup(
      :active="showCookies"
      v-if="cookies"
      v-on:dismiss="cookies = false")
</template>

<script>
//Local Component registration
import MainNavigation from './components/shared/navigation.vue';
import CookiePopup    from './components/shared/cookies.vue';
// Import SEO From File
import SEOData       from './seo-meta.js';

export default {
  name: 'App',

  data: function(){
    return {
      seo: SEOData.siteSeo,
      cookies: false,
      showCookies: false,
      // Staging Social URL
      // These variables allow for the creation of OG tags
      // for staging and prod. Change vars in site-seo.js!
      stagingBuild: SEOData.siteSeo.stagingBuild,
      liveUrl: SEOData.siteSeo.siteUrlLive,
      stageUrl: SEOData.siteSeo.siteUrlStaging
   };
  },
  // Meta SEO Function
  metaInfo() {
    return {
      title: this.seo.app.title,
      titleTemplate: this.seo.template,
      link: [
        // Font Awesome
        { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css', integrity:'sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp', crossorigin: 'anonymous' },
        // Alertiry
        { rel: 'stylesheet', href: 'https://mdevcdn.digital/alerts/alertify.css' }
      ],
      script: [
        // Alertify
        { src: 'https://mdevcdn.digital/alerts/alertify.js', async: true, defer: true },
      ],
      meta: [
        // SEO
        { vmid: 'desc', name: 'description', content: this.seo.app.desc },
        { vmid: 'ogurl', property: 'og:url', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) },
        { vmid: 'ogappid', property: 'fb:app_id', content: this.seo.social.appid },
        { vmid: 'ogtype', property: 'og:type', content: this.seo.social.ogtype },
        { vmid: 'ogtitle', property: 'og:title', content: this.seo.app.title + this.seo.templateAddon },
        { vmid: 'ogimage', property: 'og:image', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + this.loadImage(this.seo.social.ogimage) },
        { vmid: 'ogdesc', property: 'og:description', content: this.seo.app.desc },
        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.app.title + this.seo.templateAddon },
        { vmid: 'twimage', name: 'twitter:image', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + this.loadImage(this.seo.social.twimage) },
        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.app.desc }
      ]
    };
  },

  created: function(){
    // [ PRERENDERER CAVEATS ] -----------------------------
    // Prerenderers are great cuz SEO... but they suck at handling
    // script injection from trackers.
    // To solve the problem, we prevent the scripts from being loaded.
    //
    // __PRERENDER_INJECTED is a window object that only gets added by
    // the prerenderer. These async calls will only execute on the intended
    // client side environment.
    if (!window.__PRERENDER_INJECTED) {
      // Load Google Maps
      this.asyncScript( 'https://maps.googleapis.com/maps/api/js?key=APIKEYHERE-TODO', true, true);
      // Load Google Tag Manager
      this.asyncScript( 'https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXX-1', true, true);
      this.asyncScript( '/js/googletag.js', false, false);
      // Load Facebook Pixel
      this.asyncScript( '/js/fbpixel.js', false, false);
    }
  },

  mounted: function(){
    // Wait for full load and next tic on VM
    this.$nextTick(() => {
      // [ PRERENDER SNAPSHOT ] ------------------------
      // Dispatches event to tell the prerenderer to take snapshot
      if (window.__PRERENDER_INJECTED) {
        document.dispatchEvent(new Event('spa-rendered'));
      }
      else {
        // Track event on Facebook
        if ( window.fbq ) {
          window.fbq('track', 'PageView');
        }
        else {
          console.log('Fb pixel not initialized');
        }
      }

      // Check Cookies
      setTimeout(() => {
        this.checkCookie();
      }, 5000);

      // [ FANCY CONSOLE OUTPUT ] --------------------------
      // each %c allows you to create a styling block
      // style each block in order below it
      if ( navigator.userAgent.toLowerCase().indexOf("chrome") > -1 ) {
        window.console.log.apply(console, [
          "\n %c Made with SASS by MDEV Digital 😜",
          "color: #fff; background: #16b1a9; ;font-family: sans-serif; text-transform: uppercase; font-size: 225%; font-weight: 700; padding:10px; border-radius: 20px 0 20px 0;"
        ]);
        window.console.log.apply(console, [
        ]);
      }
    });
  },

  updated: function() {
    // [ PRERENDER SNAPSHOT ] ------------------------
    // Dispatches event to tell the prerenderer to take snapshot
    if (window.__PRERENDER_INJECTED) {
      document.dispatchEvent(new Event('spa-rendered'));
    }
    else {
      // Track event on Facebook
      if ( window.fbq ) {
        window.fbq('track', 'PageView');
      }
      else {
        console.log('Fb pixel not initialized');
      }
    }
  },

  components: {
    'main-navigation' : MainNavigation,
    'cookie-popup'    : CookiePopup
  },

  methods: {
    skipNav() {
      var anchor = $("#mainContent").offset().top;
      $('html,body').scrollTop(anchor);
    },
    // Check Cookies & Show Popup
    checkCookie() {
      // Poll local storage for data
      var cookie = localStorage.getItem('acceptCookie');
      var expiration = localStorage.getItem('cookieExpiration');

      // Destroy Records
      var destroyTokens = () => {
        localStorage.removeItem('acceptCookie');
        localStorage.removeItem('cookieExpiration');
        // Show Cookie Prompt
        this.cookies = true;
        setTimeout( () => {
          this.showCookies = true;
        }, 800);
      };

      // If either Cookie or Expiration is missing...
      if ( !cookie || !expiration ) {
        destroyTokens();
      }
      // If token is expired..
      else if ( Date.now() > parseInt(expiration) ) {
        destroyTokens();
      }
    }
  }
};
</script>



<style lang="scss">

/*--------------------------------------*/
/* Lean Import for Components           */
/*--------------------------------------*/
/* Disable because they are already linted */
/* stylelint-disable */
@import './assets/styles/global-main.scss';
/* stylelint-enable */


/*--------------------------------------*/
/* Main Component Styles                */
/*--------------------------------------*/

.fade-enter {
  transition: 1.4s opacity 1.8s;
}

.fade-leave-to {
  transition: opacity 1.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  opacity: 1;
}

.fade-leave-active {
  opacity: 0;
  position: absolute;
}

.mdev-skipnav {
  display: block;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate3d(-50%, -200%, 0);
  background: transparent;
  text-transform: uppercase;
  color: $color-brand-primary;
  border: 2px solid $color-brand-primary;
  padding: 15px 20px;
  transition: all .8s;
  z-index: 999;
  font-size: 1.5vw;
  opacity: 0;

  &:focus {
    opacity: 1;
    color: $white;
    background: $color-brand-primary;
    transform: translate3d(-50%, 0, 0);
  }
}


// Scrollbar Styling ( Webkit Only )
/* Disabled to use hacks.. */
/* stylelint-disable */

// Scrollbar Width
body::-webkit-scrollbar {
  width: 1vw;
}

// Background of Scrollbar
body::-webkit-scrollbar-track {
  background: lighten($color-brand-bkg, 10%);
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}

// Scroll Thumb ( Part that moves )
body::-webkit-scrollbar-thumb {
  background-color: lighten($color-brand-primary, 10%);
  outline: 4px solid darken($color-brand-bkg, 10%);
}


::selection {
  background: $color-brand-accent;
}
::-moz-selection {
  background: $color-brand-accent;
}

h1.u-c-primary::selection,
h2.u-c-primary::selection,
h3.u-c-primary::selection,
h4.u-c-primary::selection {
  background: $color-brand-bkg;
}
h1.u-c-primary::-moz-selection,
h2.u-c-primary::-moz-selection,
h3.u-c-primary::-moz-selection,
h4.u-c-primary::-moz-selection {
  background: $color-brand-bkg;
}

/* stylelint-enable */
</style>
