<template>
  <section class="mdev-main-content u-text-center">
    <hero-main></hero-main>
    <main-footer></main-footer>
  </section>
</template>




<script>

//Local Component registration
import HeroMain           from './hero-main.vue';
import MainFooter   from '../shared/main-footer.vue';

export default{
  name: 'HomePage',
  components: {
    'hero-main'         : HeroMain,
    'main-footer'       : MainFooter
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* HOME Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
