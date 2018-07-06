<template>
  <section class="mdev-main-content">
    <h1> PROCESS </h1>
  </section>
</template>




<script>
export default{
  name: 'Process',
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
/* PROCESS Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
