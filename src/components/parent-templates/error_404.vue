<template lang="pug">
  section.mdev-main-content
    h1
      |404 Page Of Doom
</template>


<script>
// Import SEO From File
import SEOData       from '../../seo-meta.js';

export default {
  name: 'ErrorPage',

  data: function(){
    return {
      seo: SEOData.siteSeo
    };
  },
  // Meta SEO Function
  metaInfo() {
    return {
      title: this.seo.app.title,
      titleTemplate: this.seo.template,
      meta: [
        { vmid: 'ogtitle', property: 'og:title', content: this.seo.app.title + this.seo.templateAddon },
        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.app.title + this.seo.templateAddon },
        { vmid: 'desc', name: 'description', content: this.seo.app.desc },
        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.app.desc },
        { vmid: 'ogdesc', property: 'og:description', content: this.seo.app.desc }
      ]
    };
  },

};
</script>


<style lang="scss">

/*-------------------------------------*/
/* 404 Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
