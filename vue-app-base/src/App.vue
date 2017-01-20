<template>
  <main id="app">
    <main-navigation></main-navigation>
    <hero-main></hero-main>
    <hero-news></hero-news>
    <hero-service></hero-service>
  </main>
</template>




<script>
  
  //Local Component registration
  import MainNavigation from './components/navigation.vue';
  import HeroMain       from './components/hero-main.vue';
  import HeroNews       from './components/hero-news.vue';
  import HeroService    from './components/service.vue';
  
  export default{

    components: {
      'main-navigation' : MainNavigation,
      'hero-main'       : HeroMain,
      'hero-news'       : HeroNews,
      'hero-service'    : HeroService
      
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
