<template>
 <div class="mdev-main-wrapper">
    <div class="">
      <h2> Login </h2>
      <input v-model="user.email" type="text" placeholder="Email">
      <input v-model="user.password" type="password" placeholder="Password">
      <button @click="login"> Log In </button>
      <hr>
      <p>
        Don't have an account? <router-link to="/auth/register"> Sign Up! </router-link>
      </p>
    </div>
 </div> 
</template>

<script>
  export default {
   name: "LoginComponent",

   data: function() {
    return{
      user:{
        email: "",
        password: ""
      }
    };
   },

   methods: {
    login: function() {
      this.$http.post("user.json", this.user)
        .then(function(res){
          // Notify User
          alertify.success('You have Successfully Created a User.');
          // Store Token
          this.$auth.setToken('abcd', Date.now() + 14400000);
          // Redirect
          this.$router.push('/auth/reset');
        });
      console.log(this.user);
    }
   }
  };
</script>

<style lang="scss" scoped>

</style>
