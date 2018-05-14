<template>
    <h1> Homepage Case Studies </h1>
</template>



<script>
  export default{
    name: 'HomeCaseStudies',
    data: function(){
      return{

      };
    },

    mounted: function(){
      console.log('Element Mounted');
    },

    methods: {
      loadImage(path){
        return require('../../assets/images/' + path);
      },
      // Change Language METHOD
      change () {
        let current = this.$locale.current();
        if (current === 'en') {
          this.$locale.change('pt');
        } else {
          this.$locale.change('en');
        }
      }
    }
  };
</script>



<style lang="scss">

	/*-------------------------------------*/
	/* HOME CASE STUDIES Component Styles
	/--------------------------------------*/


	/*--------------------------------------*/

</style>
