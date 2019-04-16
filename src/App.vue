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
</template>




<script>

//Local Component registration
import MainNavigation from './components/shared/navigation.vue';
// Import SEO From File
import SEOData       from './seo-meta.js';

export default {
  name: 'App',

  data: function(){
    return {
      seo: SEOData.siteSeo
    };
  },
  // Meta SEO Function
  metaInfo() {
    return {
      title: this.seo.app.title,
      titleTemplate: this.seo.template,
      meta: [
        { vmid: 'ogtitle', property: 'og:title', content: this.seo.app.title + this.seo.templateAddon },
        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.app.title + this.seo.templateAddon },
        { vmid: 'desc', name: 'description', content: this.seo.app.desc },
        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.app.desc },
        { vmid: 'ogdesc', property: 'og:description', content: this.seo.app.desc }
      ]
    };
  },

  components: {
    'main-navigation' : MainNavigation
  },

  methods: {
    skipNav() {
      var anchor = $("#mainContent").offset().top;
      $('html,body').scrollTop(anchor);
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


</style>
