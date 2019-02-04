<template lang="pug">
  section.mdev-main-content
    //- Use comments witn `-`
    //- This omits them from output.
    h1
      |Base Template
</template>




<script>
export default{
  name: 'BaseTemplate',
  // TODO - Edit meta Title
  // SEE - https://github.com/ktquez/vue-head
  head: {
    title: {
      inner: 'ABOUT',
      complement: 'MDEV DIGITAL'
    },
  },

  data: function(){
    return{

    };
  },

  mounted: function(){
    console.log('COMPONENT NAME Mounted');
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
