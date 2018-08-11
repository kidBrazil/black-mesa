<template>
  <div class="mdev-split flex flex-hor-between flex-vert-center"
    :class="{'--reversed' : reverse , '--top' : top}">
    <div class="mdev-split-6" :class="animClassLeft" v-in-viewport>
      <slot name="leftSlot"></slot>
    </div>
    <div class="mdev-split-4" :class="animClassRight" v-in-viewport>
      <slot name="rightSlot"></slot>
    </div>
  </div>
</template>



<script>

	export default {
    props: ['animClassLeft', 'animClassRight', 'reverse', 'top']
	};

</script>

<style lang="scss">

/*--------------------------------------*/
/* SIXTY FORTY Component
/*--------------------------------------*/
.mdev-split-6 {
  width: 60%;
  padding-right: 1vw;

  @media #{$portrait} {
    width: 100%;
    margin-bottom: 25px;
    padding-right: 0;
  }
}

.mdev-split-4 {
  width: 40%;
  padding-left: 1vw;

  @media #{$portrait} {
    width: 100%;
    padding-left: 0;
  }
}

// If prop REVERSED is true, change order of elements
.--reversed {
  .mdev-split-6 {
    order: 2;
  }
}

.--top {
  align-items: flex-start;
}
</style>
