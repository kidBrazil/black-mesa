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
  // SEE - https://github.com/ktquez/vue-head
  head: {
    title: {
      inner: 'CLIENT PROJECT',
      complement: 'MDEV DIGITAL'
    },
    meta: [
      { property: 'og:title', content: 'CLIENT PROJECT | MDEV DIGITAL' },
      { name: 'twitter:title', content: 'CLIENT PROJECT | MDEV DIGITAL' }
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
