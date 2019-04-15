<template lang="pug">
  //-Router view to display child components
  router-view
</template>

<script>
export default {
  name: "AuthComponent",
  // TODO - Edit meta Title

  metaInfo: {
    changed (newInfo, addedTags, removedTags) {
      // Dispatch even for prerenderer
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

  mounted: function() {console.log('Auth Here');}
};
</script>

<style lang="scss" scoped>

</style>
