<template lang="pug">
  .mdev-main-wrapper
    div
      h2
        |Reset
      input(v-model="user.email" type="text" placeholder="Email")
      button(@click="reset")
        |Reset
      hr
      p
        |Don't have an account? <router-link to="/auth/register"> Sign Up! </router-link>
</template>

<script>
export default {
 name: "RegisterComponent",

 data: function() {
  return{
    user:{
      email: ""
    }
  };
 },

 methods: {
  register: function() {
    this.$http.post("user.json", this.user)
      .then(function(res){
        alertify.success('You have Successfully Reset your Password');
      });
    console.log(this.user);
  }
 }
};
</script>

<style lang="scss" scoped>

</style>
