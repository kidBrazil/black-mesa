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

  metaInfo: {
    changed (newInfo, addedTags, removedTags) {
      // Dispatch event for Prerenderer
      document.dispatchEvent(new Event('spa-rendered'));
      // REMOVE CONSOLE.LOG
      console.log('Meta info was updated!');
      console.log(addedTags);
      console.log(removedTags);
    },
    // TODO - Update Meta Information
    title: 'BLACK MESA',
    titleTemplate: '%s | CLIENT PROJECT | MDEV DIGITAL',
    meta: [
      { property: 'og:title', content: 'Open Graph Title' },
      { name: 'twitter:title', content: 'Twitter Card Title' },
      { name: 'description', content: 'Meta Description'},
      { name: 'twitter:description', content: 'Twitter Card Description'},
      { property: 'og:description', content: 'Open Graph Description'}
    ]
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
