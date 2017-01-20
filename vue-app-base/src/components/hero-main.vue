<template>
  <section class="rr-main-hero" :style="heroStyles" aria-role="presentation">
    <!-- Hero Features Strip -->
    <div class="rr-main-hero-features u-uppercase">
      <div class="rr-main-wrapper flex flex-hor-between flex-vert-center">
        <h3 class="rr-main-hero-heading"> Standard <br class="u-hidden-phone" /> Features </h3>
        
        <!-- Generate Items  -->
        <a  href="#" 
            :title="item.text" 
            v-for="item in items"
            aria-role="menuitem"
            class="flex flex-hor-between flex-ver-center rr-hero-feature-detail">

          <div class="rr-hero-feature-icon">
            <img :src="loadImage(item.image)" :alt="item.text">
          </div>
          <div class="rr-hero-feature-desc flex flex-wrap flex-group-center">
            <span class="h4">{{item.text}}</span>
            <span class="h4">{{item.subtext}}</span>
          </div>

        </a>

      </div>
    </div>
  </section>
</template>



<script>

	export default {
    data: function() {
      return{
        items: [
          { 
            image: 'AIR_RIDE.png',
            text: 'Air ride',
            subtext:'cab & seat'
          },
          { 
            image: 'GPS.png',
            text: 'GPS',
            subtext: 'Auto Steer'
          },
          {
            image: 'CONTROLS.png',
            text: 'Machine/touch',
            subtext: 'screen controls'
          },
          {
            image: 'FUEL.png',
            text: 'Fuel',
            subtext: 'efficiency'
          }
        ],
        heroStyles: {
            backgroundImage: "url('" + this.loadImage('hero.jpg')  + "')",
            backgroundSize: 'cover'
        }
      };
    },

    methods:{
      // Get Compiled image Paths
      
      loadImage(path){
        return require('../assets/images/' + path);
      }
    }
	};

</script>

<style lang="scss" scoped>

  /*--------------------------------------*/
  /* Lean Import for Components           */
  /*--------------------------------------*/
  @import '../assets/styles/component-lean-main.scss';

  /*--------------------------------------*/
  /* Main Component Styles                */
  /*--------------------------------------*/

  .rr-main-hero {
    height: 89vh;
    position: relative;
    background-position: -62% -80px;

    @media screen and ('$tablet-up-comp') {
      background-position: center -80px;
    }
  }

  .rr-main-hero-features {
    width: 100%;
    background: $charcoal-grey;
    padding: 35px 0;
    position: absolute;
    bottom: 0;
    color: $white;
  }

  .rr-main-hero-heading,
  .rr-hero-feature-detail {
    width: 100%;
    text-shadow: 1px 1px 3px rgba(0,0,0,0);
    transition: all, .3s;

    @media screen and ('$tablet-up-comp') {
      width: 18%;
    }

    &:hover {
      text-shadow: 1px 1px 3px rgba(0,0,0,.5);
      cursor: pointer;
    }
  }

  .rr-main-hero-heading {
    letter-spacing: 2px;
    line-height: 33px;
    margin-right: 30px;
  }

  .rr-hero-feature-detail {
    width: 50%;
  }

  .rr-hero-feature-desc {
    width: 70%;

    span {
      display: block;
      width: 100%;
      line-height: 22px;
    }
  }

  .rr-hero-feature-icon {
    width: 30%;

    img {
      width: 100%;
    }
  }

  //Wrapper Hack for Flex
  .rr-main-wrapper {
    flex-wrap: wrap;

    @media screen and ('$tablet-up-comp') {
      flex-wrap: nowrap;
    }
  }

  // Escaped media query to avoid repetition
  @media screen and ('$phone-only-comp') {
    .rr-main-hero-heading {
      text-align: center;
      margin-bottom: 30px;
      margin-right: 0;
    }
  }

  /*--------------------------------------*/

</style>
