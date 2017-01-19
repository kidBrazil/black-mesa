<template>
  <section aria-role="presentation" class="rr-service-hero" :style="heroStyles">
    <div class="rr-main-wrapper rr-wrapper-hack u-text-right">
      <div class="rr-service-content u-text-left">
        <h1 class="u-uppercase rr-mega-heading"> {{ heading  }} </h1>
        <span class="u-uppercase rr-mega-subheading"> {{ heading2 }} </span>
        <hr>
        <h4 class="u-uppercase rr-body-heading"> {{subheading}} </h4>
        <p class="rr-service-body"> {{ text }}  </p>
        <button class="rr-base-btn rr-action-btn">
          {{ callToAction }}
        </button>
      </div> 
  </section> 
</template>



<script>
	
	export default {
    data: function(){
      return{
        heroStyles: {
          backgroundImage: "url('" + this.loadImage('00_ServicePhoto.jpg') + "')"
        },

        heading: 'Service',
        heading2: '& support',
        text: 'Wolfe products are built to last using the latest technology and highest quality materials. We manufacture and stock critical components and can ship most items same-day to keep your operating. Our service network team is always ready to assist you on short notice.',
        subheading: 'Built to minimize downtime',
        callToAction: 'Learn About Our Service'
      };
    },

    methods: {
      loadImage(path){
        return require('../assets/images/' + path);
      }
    }
	};

</script>



<style lang="scss">
  
  /*--------------------------------------*/
  /* Lean Import for Components           */
  /*--------------------------------------*/
  @import '../assets/styles/component-lean-main.scss';

	/*--------------------------------------*/
	/* Main Component Styles                */
	/*--------------------------------------*/

  .rr-service-hero {
    background-repeat: no-repeat;
    background-color: $charcoal-grey;
    background-size: 150%;
    background-position: top center;
    position: relative;
    clear: both;
    overflow: hidden;
    color: $white;

    @media screen and ('$laptop-up-comp') {
      background-size: cover;
      background-position: -230px top;
    }

    hr {
      width: 100%;
      height: 8px;
      background: $escavator-yellow;
      border: none;
      margin: 15px 0 30px;
    }
  }

  .rr-service-content {
    background: $charcoal-grey;
    width: 100%;
    margin-top: 60vh;
    float: none;
    padding: 40px;
    text-align: center;

    @media screen and ('$laptop-up-comp') {
      float: right; 
      padding: 80px 0 80px 95px;
      text-align: left;
      margin-top: 0;
    }

    @media screen and ('$laptop-only-comp') {
      width: 36vw;
      
    }
    
    @media screen and ('$desktop-up-comp') {
      width: 34vw;
    }
  }

  .rr-mega-heading {
    font-size: 9.8vw;
    letter-spacing: .1vw;

    @media screen and ('$tablet-only-comp') {
      font-size: 8.4vw;
    }
    @media screen and ('$laptop-up-comp') {
      font-size: 6.4vw;
      letter-spacing: .1vw;
    }
  }

  .rr-mega-subheading {
    font-size: 6.4vw;
    letter-spacing: .66vw;
    font-weight: 700;

    @media screen and ('$tablet-only-comp') {
      font-size: 5.4vw;
    }
    @media screen and ('$laptop-up-comp') {
      font-size: 3.4vw;
    }
  }

  .rr-body-heading {
    font-size: 20px;
    letter-spacing: 2px;
    line-height: 25px;
  }
  
  .rr-service-body {
    margin: 20px 0 40px;
  }

  /* Wrapper Hack - It's Scoped so it's ok =) */
  
  /* Hack can be improved, there is some repetitiong.. running out of time.*/

  .rr-wrapper-hack {
    @media screen and ('$phone-only-comp') {
      width: 100%;
      padding: 0 5%;
      background: $charcoal-grey;
    }
    @media screen and ('$tablet-only-comp') {
      width: 100%;
      padding: 0 8%;
      background: $charcoal-grey;
      max-width: 100%;
    }
  }

	/*--------------------------------------*/

</style>
