// MDEV Site SEO
// Flat File JSON Object for easy SEO implementation

// Staging Build Flag -------------------------------
// This flag will tell the compiler wether you are working on
// staging or live. If the variable is True it means you are on
// staging build.
//
// This will affect which one of the URL's the builder will append
// to the social media images and the og:url attribute.
//
// This will allow for the staging branch to be tested on
// Facbeook / Twitter debugger panels.
//
// TODO -- Change stagingBuild to FALSE before live deploy.
let stagingBuild = true;

// Template INFO - Dictates slug for title and site URL's
let template = {
  slug: '%s | MDEV Digital | CLIENT PROJECT',
  slugAddon: ' | MDEV Digital | CLIENT PROJECT',
  stageUrl: 'http://TODO-UPPDATE',
  liveUrl: 'https://TODO-UPDATE',
};

// Social Media configuration
let social = {
  appid: 'XXXXXX',
  ogtype: 'website',
  cardtype: 'summary_large_image',
  twsite: '@MDEVdigital',
  ogimage: 'social/MDEV-FB-OG-Home_v01.jpg',
  twimage: 'social/MDEV-TW-Card-Home_v01.png'
};

// General Site Wide SEO
let general = {
  title: 'TODO-Update-Title',
  desc: 'We are a London-based hybrid digital agency offering process-driven branding, website development, software architecture, and business technology solutions'
};

// Page Specific SEO SAMPLE.
// let myPage = {
//   ogimage: 'myImagePathHere.png',
//   twimage: 'myImagePathHereForTwitter.png',
//   title: 'My Page Title',
//   desc: 'My Page Description'
// }
//
// Don't forget to add it to the EXPORT below.

// Export Objects - Add objects as needed
export {
  stagingBuild,
  template,
  social,
  general
};
