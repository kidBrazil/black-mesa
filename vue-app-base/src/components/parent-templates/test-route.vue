<template>
  <main id="app">
    <main-navigation></main-navigation>
    <hero-main></hero-main>
    <vue-loader-example></vue-loader-example>
  </main>
</template>




<script>
  
  //Local Component registration
  import MainNavigation from '../shared/navigation.vue';
  import HeroMain       from '../modules/hero-main.vue';
  import LoaderExample  from '../modules/vue-loader-example.vue';
  
  export default{

    components: {
      'main-navigation' : MainNavigation,
      'hero-main'       : HeroMain,
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
