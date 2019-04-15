<template lang="pug">
  .mdev-main-content
    h1
      |ABOUT
</template>




<script>
export default{
  name: 'About',
  // TODO - Edit meta Title

  metaInfo: {
    changed (newInfo, addedTags, removedTags) {
      // Dispatch even for prerenderr
      document.dispatchEvent(new Event('spa-rendered'));
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
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* ABOUT Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
