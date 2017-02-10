<template>
  <div>
    <h2> CRAZY AUTH COMPONENT GUYS</h2>
    <router-view><router-view>
    <h2> CRAZY AUTH COMPONENT GUYS</h2>
  </div>
</template>

<script>
  export default {
   name: "AuthComponent",
   mounted: function() {console.log('Auth Here')}
  };
</script>

<style lang="scss" scoped>

</style>
