<template>
  <section class="test-main-content">
    <hero-main></hero-main>
    <hero-news></hero-news>
    <hero-service></hero-service>
    <vue-loader-example></vue-loader-example>
  </section>
</template>




<script>
  
  //Local Component registration
  import HeroMain       from '../modules/hero-main.vue';
  import HeroNews       from '../modules/hero-news.vue';
  import HeroService    from '../modules/service.vue';
  import LoaderExample  from '../modules/vue-loader-example.vue';
  
  export default{

    components: {
      'hero-main'       : HeroMain,
      'hero-news'       : HeroNews,
      'hero-service'    : HeroService,
      'vue-loader-example' : LoaderExample
      
    }
  };
</script>



<style lang="scss">

	/*-----/
	Global Main
	/-----*/
	@import '../../assets/styles/component-lean-main.scss';

	/*--------------------------------------*/
	/* Main Component Styles                */
	/*--------------------------------------*/


	/*--------------------------------------*/

</style>
