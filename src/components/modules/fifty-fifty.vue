<template lang="pug">
  //- MDEV Split Component
  .mdev-split.flex.flex-hor-between.flex-vert-center(:class="{'--reversed' : reversed' , '--top' : top}")
    //- Animation class is dynamic passed as prop
    .mdev-split-5(:class="animClassLeft" v-in-viewport)
      slot(name="leftSlot")
    //- Second slot
    .mdev-split-5(:class="animClassRight" v-in-viewport)
      slot(name="rightSlot")
</template>



<script>

	export default {
    props: ['animClassLeft', 'animClassRight', 'reversed', 'top']
	};

</script>

<style lang="scss" scoped>

/*--------------------------------------*/
/* FIFTY FIFTY Component
/*--------------------------------------*/
.mdev-split-5 {
  width: 50%;
  padding-right: 1vw;

  @media #{ $portrait } {
    width: 100%;
    margin-bottom: 25px;
    padding-right: 0;
  }
}
</style>
