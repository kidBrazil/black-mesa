<template lang="pug">
  section.mdev-main-content
    h1
      |404 Page Of Doom
</template>


<script>
export default{
  name: 'ErrorPage',
  // TODO - Edit meta Title

  metaInfo: {
    changed (newInfo, addedTags, removedTags) {
      // Dispatch event for prerenderer
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

  meta: [
    { property: 'og:title', content: '404 | MDEV DIGITAL' },
    { name: 'twitter:title', content: '404 | MDEV DIGITAL' }
  ],

  data: function(){
    return{

    };
  }
};
</script>


<style lang="scss">

/*-------------------------------------*/
/* 404 Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
