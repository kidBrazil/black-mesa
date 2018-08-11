<template>
  <div class="mdev-split flex flex-hor-between flex-vert-center">
    <div class="mdev-split-5" :class="animClassLeft" v-in-viewport>
      <slot name="leftSlot"></slot>
    </div>
    <div class="mdev-split-5":class="animClassRight" v-in-viewport>
      <slot name="rightSlot"></slot>
    </div>
  </div>
</template>



<script>

	export default {
    props: ['animClassLeft', 'animClassRight']
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
