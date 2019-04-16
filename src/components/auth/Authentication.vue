<template lang="pug">
  //-Router view to display child components
  router-view
</template>

<script>
// Import SEO From File
import SEOData       from '../../seo-meta.js';

export default {
  name: "AuthComponent",
  // TODO - Edit meta Title

  data: function(){
    return {
      seo: SEOData.siteSeo
    };
  },
  // Meta SEO Function
  metaInfo() {
    return {
      title: this.seo.app.title,
      meta: [
        { vmid: 'ogtitle', property: 'og:title', content: this.seo.app.title + this.seo.templateAddon },
        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.app.title + this.seo.templateAddon },
        { vmid: 'desc', name: 'description', content: this.seo.app.desc },
        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.app.desc },
        { vmid: 'ogdesc', property: 'og:description', content: this.seo.app.desc }
      ]
    };
  },

  mounted: function() {console.log('Auth Here');}
};
</script>

<style lang="scss" scoped>

</style>
