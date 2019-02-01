<template lang="pug">
    //-Router view to display child components
    router-view
</template>

<script>
export default {
 name: "AuthComponent",
 mounted: function() {console.log('Auth Here');}
};
</script>

<style lang="scss" scoped>

</style>
