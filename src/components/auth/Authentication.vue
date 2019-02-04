<template lang="pug">
  //-Router view to display child components
  router-view
</template>

<script>
export default {
  name: "AuthComponent",
  // TODO - Edit meta Title
  // SEE - https://github.com/ktquez/vue-head
  head: {
    title: {
      inner: 'AUTHENTICATION',
      complement: 'MDEV DIGITAL'
    },
  },
  mounted: function() {console.log('Auth Here');}
};
</script>

<style lang="scss" scoped>

</style>
