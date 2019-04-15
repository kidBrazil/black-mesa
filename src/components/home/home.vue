<template lang="pug">
  //- Wrapper Container
  section.mdev-main-content.u-text-center
    //- Hero
    hero-main
    //- Main Footer
    main-footer
</template>




<script>

//Local Component registration
import HeroMain           from './hero-main.vue';
import MainFooter   from '../shared/main-footer.vue';
import TestDiv   from '../modules/sixty-forty.vue';

export default{
  name: 'HomePage',
  // TODO - Edit meta Title

  metaInfo: {
    changed (newInfo, addedTags, removedTags) {
      // Dispatch even for prerenderer
      document.dispatchEvent(new Event('spa-rendered'));
    },
    // TODO - Update Meta Information
    title: 'BLACK MESA',
    titleTemplate: '%s | CLIENT PROJECT | MDEV DIGITAL',
    meta: [
      { property: 'og:title', content: 'Open Graph Title' },
      { name: 'twitter:title', content: 'Twitter Card Title' },
      { name: 'description', content: 'Meta Description'},
      { name: 'twitter:description', content: 'Twitter Card Description'},
      { property: 'og:description', content: 'Open Graph Description'}
    ]
  },

  components: {
    'hero-main'         : HeroMain,
    'main-footer'       : MainFooter,
    'test-div'          : TestDiv
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* HOME Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
