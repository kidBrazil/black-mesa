<template lang="pug">
  .mdev-main-content
    contact-map( :animLoaded="anim" )
</template>




<script>
// Import SEO From File
import SEOData       from '../../seo-meta.js';
import ContactMap     from '../shared/contact-map.vue';

export default {
  name: 'About',
  // TODO - Edit meta Title

  data: function(){
    return {
      seo: SEOData.siteSeo,
      anim: false
    };
  },

  mounted (){
    // TODO - Replace interval with proper transition animation
    setTimeout( () => {
      // Anim switches to true when the animation is finished
      // this will trigger the map rendering
      this.anim = true;
    }, 250);
  },
  // Meta SEO Function
  metaInfo() {
    return {
      title: this.seo.app.title,
      meta: [
        // SEO
        { vmid: 'desc', name: 'description', content: this.seo.app.desc },
        { vmid: 'ogtitle', property: 'og:title', content: this.seo.app.title + this.seo.templateAddon },
        { vmid: 'ogimage', property: 'og:image', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + this.loadImage(this.seo.social.ogimage) },
        { vmid: 'ogdesc', property: 'og:description', content: this.seo.app.desc },
        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.app.title + this.seo.templateAddon },
        { vmid: 'twimage', name: 'twitter:image', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + this.loadImage(this.seo.social.twimage) },
        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.app.desc }
      ]
    };
  },

  components: {
    'contact-map' : ContactMap
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* ABOUT Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
