// [ SEO Meta Information ] ----------------------------------
// The purpose of this file is to store SEO information in a
// centralized fashion. Other attributes for Open Graph and
// Twitter can easily be added but in general only Title
// and description are really needed.
//
// Typically, title and description don't vary from Open Graph
// to Twitter card so using the canonical meta information is best
//
// ----------------------------------------------------------
// [ USAGE INSTUCTIONS ]
// To add meta information to the Site SEO simply create a JSON
// object with the desired key and add the title & desc keys inside.
//
// siteSeo: {
//   myPage: {
//     title: 'My Awesome Title',
//     desc: 'My Awesome Description'
//   }
// }
//
// You then use the metaInfo() function inside of the VUE component
// to attach your newly created object.
//
//  metaInfo() {
//    return {
//      title: this.seo.app.title,
//      meta: [
//        { vmid: 'ogtitle', property: 'og:title', content: this.seo.app.title + this.seo.templateAddon },
//        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.app.title + this.seo.templateAddon },
//        { vmid: 'desc', name: 'description', content: this.seo.app.desc },
//        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.app.desc },
//        { vmid: 'ogdesc', property: 'og:description', content: this.seo.app.desc }
//      ]
//    };
//  },
//
// ----------------------------------------------------------
//  [ CAVEATS ]
// - Unique vmid is needed for any additional meta info. This avoids duplicates
// - the 'template' string gets appended to the end of the title given
// - the 'templateAddon' string gets appended to the end of the tile on FB/TW

export default  {
  siteSeo: {
    template: '%s | MDEV Digital | London, Toronto, Montreal',
    templateAddon: ' | MDEV Digital | London, Toronto, Montreal',
    app: {
      title: 'Base Project Setup - TODO Change',
      desc: 'This is a basic project install of BlackMesa'
    }
  }
};
