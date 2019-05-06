<template lang="pug">
  //- Wrapper Container
  section.mdev-main-content.u-text-center
    //- Hero
    hero-main
    //- Main Footer
    main-footer
</template>




<script>

//Local Component registration
import HeroMain           from './hero-main.vue';
import MainFooter   from '../shared/main-footer.vue';
import TestDiv   from '../modules/sixty-forty.vue';
// Import SEO From File
import SEOData       from '../../seo-meta.js';

export default{
  name: 'HomePage',
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
    'hero-main'         : HeroMain,
    'main-footer'       : MainFooter,
    'test-div'          : TestDiv
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* HOME Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
