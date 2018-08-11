<template>
    <div>
      <h2> Welcome To MDEV Boilerplate </h2>
      <a class="mdev-boilerlink" href="https://github.com/MdevDigitalInc/black-mesa" title="Documentation">
        Boilerplate Documentation
      </a>
      <a class="mdev-boilerlink" href="https://github.com/MdevDigitalInc/sass-boilerplate" title="Documentation">
        SASS Boilerplate Documentation
      </a>
      <a class="mdev-boilerlink" href="https://vuejs.org/v2/guide/" title="Documentation">
        Vue Documentation
      </a>
      <a class="mdev-boilerlink" href="https://github.com/vuejs/awesome-vue" title="Documentation">
        Vue Resources, Plugins & More
      </a>
      <a class="mdev-boilerlink" href="https://webpack.js.org/concepts/" title="Documentation">
        Webpack Documentation
      </a>
    </div>
</template>



<script>
export default{
  name: 'MainFooter',
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
/* MAIN FOOTER Component Styles
/--------------------------------------*/
.mdev-boilerlink {
  color: $color-brand-primary;
  margin-top: 10px;
  display: block;
}

/*--------------------------------------*/

</style>
