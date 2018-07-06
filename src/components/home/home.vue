<template>
  <section class="mdev-main-content">
    <h1> HOME </h1>
    <hero-main></hero-main>
    <home-services></home-services>
    <home-casestudies></home-casestudies>
    <home-about></home-about>
    <home-testimonials></home-testimonials>
    <main-footer></main-footer>
  </section>
</template>




<script>

//Local Component registration
import HeroMain           from './hero-main.vue';
import HomeCaseStudies    from './home-casestudies.vue';
import HomeAbout          from './home-about.vue';
import HomeServices       from './home-services.vue';
import MainFooter   from '../shared/main-footer.vue';
import HomeTestimonials   from './home-testimonials.vue';

export default{
  name: 'HomePage',
  components: {
    'hero-main'         : HeroMain,
    'home-about'        : HomeAbout,
    'home-services'     : HomeServices,
    'home-testimonials' : HomeTestimonials,
    'main-footer'       : MainFooter,
    'home-casestudies'  : HomeCaseStudies
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* HOME Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
