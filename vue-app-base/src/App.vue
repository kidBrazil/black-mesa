<template>
  <main id="app">
    <main-navigation></main-navigation>
    <hero-main></hero-main>
    <hero-news></hero-news>
    <hero-service></hero-service>
    <vue-loader-example></vue-loader-example>
  </main>
</template>




<script>
  
  //Local Component registration
  import MainNavigation from './components/navigation.vue';
  import HeroMain       from './components/hero-main.vue';
  import HeroNews       from './components/hero-news.vue';
  import HeroService    from './components/service.vue';
  import LoaderExample  from './components/vue-loader-example.vue';
  
  export default{

    components: {
      'main-navigation' : MainNavigation,
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
	@import './assets/styles/global-main.scss';

	/*--------------------------------------*/
	/* Main Component Styles                */
	/*--------------------------------------*/


	/*--------------------------------------*/

</style>
