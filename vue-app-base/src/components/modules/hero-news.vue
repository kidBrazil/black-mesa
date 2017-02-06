<template>
  <section class="rr-hero-news" aria-role="group">
    <div class="rr-main-wrapper">
      <div class="rr-hero-news-content flex flex-hor-between flex-ver-start">
        <div class="rr-hero-news-action u-uppercase">
          <h2 class="rr-hero-news-action-heading">{{ heading }}</h2>
          <a class="u-heading-weight" href="#" :alt="actionText">{{ actionText  }}</a>
        </div>
        <div class="rr-hero-news-items flex flex-hor-between flex-vert-start">
          <div v-for="item in items" class="rr-hero-news-item" aria-role="document">
            <h3 class="rr-hero-news-heading">{{ item.heading }}</h3>
            <span class="rr-hero-news-date-category">{{ item.date }} | {{ item.category }}</span>
            <h1>{{ $t("messages.hello") }}</h1>
            <p>{{ lorem }}</p>
            <a :href="item.readMore" :title="item.heading" class="rr-read-more u-heading-weight"> Read More </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>




<script>
	
	export default {
    data: function(){
      return {
        items: [
          {
            heading: "Wolfe's New Look & New Website",
            date: 'October 2016',
            category: 'Releases',
            readMore: '#'
          },
          {
            heading: "Wolfe's Latest Equipment Release",
            date: 'November 2016',
            category: 'Equipment',
            readMore: '#'
          }
        ],
        heading: 'Wolfe recent News',
        actionText: 'See All Recent News & Events',
        lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare urna non hendrerit mattis. Maecenas ac lorem eu.'
      };
    },
	};

</script>



<style lang="scss" scoped>

  /*--------------------------------------*/
  /* Lean Import for Components           */
  /*--------------------------------------*/
  @import '../../assets/styles/component-lean-main.scss';

  /*--------------------------------------*/
  /* Main Component Styles                */
  /*--------------------------------------*/
  .rr-hero-news {
    padding: 152px 0;
  }

  .rr-hero-news-content {
    flex-wrap: wrap;

    @media screen and ('$desktop-up-comp') {
      flex-wrap: nowrap;
    }
  }

  .rr-hero-news-action {
    width: 100%;
    margin-bottom: 55px;

    @media screen and ('$desktop-up-comp') {
      width: 40%;
      margin-bottom: 0;
    }

    .rr-hero-news-action-heading {
      margin-bottom: 15px;
      letter-spacing: 3px;

      @media screen and ('$desktop-up-comp') {
        margin-bottom: 45px;
      }
    }

    a {
      font-size: 18px;
      color: $black;
      transition: all, .3s;

      &:hover {
        color: $escavator-yellow;
      }
    }
  }

  .rr-hero-news-items {
    width: 100%;
    flex-wrap: wrap;

    @media screen and ('$desktop-up-comp') {
      width: 60%;
    }

    .rr-hero-news-item {
      display: inline-block; 
      width: 100%;
      padding: 0;
      margin-bottom: 60px;

      @media screen and ('$tablet-up-comp') {
        width: 45%;
        margin-bottom: 0;
      }

      @media screen and ('$desktop-up-comp') {
        width: 50%;
        padding: 0 50px 0 20px;
      }

      /* Can be replaced with Quantity Query */
      
      &:last-child {
        padding: 0;

        @media screen and ('$desktop-up-comp') {
          padding: 0 20px 0 50px;
        }
      }
    }

    .rr-hero-news-heading {
      width: 100%;
      letter-spacing: 2px;
      word-spacing: 2px;
      line-height: 35px;
    }

    .rr-hero-news-date-category {
      margin: 20px 0;
      display: block;
    }

    p {
      margin-bottom: 20px;
    }

    .rr-read-more {
      color: $black;
      transition: all, .3s;

      &:hover {
        color: $escavator-yellow;
      }
    }
  }

	/*--------------------------------------*/

</style>
