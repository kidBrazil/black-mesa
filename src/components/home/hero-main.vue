<template>
  <div class="mdev-image">
    <img :src="loadImage(homeBrand)">
  </div>
</template>



<script>

export default {
  name: 'MainHero',
  data: function() {
    return{
      homeBrand: 'main-logo.png'
    };
  },

  methods:{
    // Get Compiled image Paths

    loadImage(path){
      return require('../../assets/images/' + path);
    }
  }
};

</script>

<style lang="scss">

/*-------------------------------------*/
/* HERO MAIN Component Styles
/--------------------------------------*/
.mdev-image {
  width: 20%;
  margin: 30px auto;

  img {
    width: 100%;
  }
}

/*--------------------------------------*/

</style>
