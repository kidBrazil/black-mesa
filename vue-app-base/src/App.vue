<template>
  <main id="app">
    <main-navigation></main-navigation>
    <router-view></router-view>
  </main>
</template>




<script>
  
  //Local Component registration
  import MainNavigation from './components/shared/navigation.vue';
  
  export default{

    components: {
      'main-navigation' : MainNavigation
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


</style>
