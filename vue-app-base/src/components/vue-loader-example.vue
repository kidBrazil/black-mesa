<template>
  <div>
    <div class="rr-main-wrapper u-text-center">
      <h1 style="margin: 20px 0;"> VUE LOADER TEST</h1>
      <label> Username </label>
      <input style="margin-right: 20px;" type="text" v-model="user.username">
      <label> Email </label>
      <input type="text" v-model="user.email">
      <!-- Submit Click Listener -->
      <button @click="submit"> Submit </button>
      <hr style="margin: 30px 0;">
      <div class="u-text-left">
        <!-- fetchData Click Listener -->
        <button @click="fetchData"> Get Data </button>
        <hr style="margin: 30px 0;">
        <!-- Iterate Array -->
        <li v-for="u in users">
          {{ u.username  }}  |  {{ u.email  }}
        </li>
      </div>
    </div> 
  </div>
</template>



<script>
  export default{
    
    data: function(){
      return{
        
        user: {
          username: '',
          email: ''
        },
        users: []
      };
    },
    
    // Submit Method utilizing Firebase IO & vue-resource
    // Vue resource has been setup on Main.js and Webpack.config

    // Method here uses $http.post()[.get()] to create async requests with promises.
    methods:{
      submit() {
        // Post Request Sample ( Ajax )
        this.$http.post('https://vuejs-http-resource.firebaseio.com/data.json', this.user)
          //.then handles the promise once it returns with something
          .then( response => {
            // Log Response
            console.log( response );
            },
            error => {
              // Log Response
              console.log( error );
          });
      },
      fetchData() {
        //Fetch Request Sampe ( Ajax )
        this.$http.get('https://vuejs-http-resource.firebaseio.com/data.json')
          // .then handles the promise once it returns with a response
          .then( response => {
            // Method to transform data to json
            // Returns promise first then data
            return response.json();
          })
          // Extracts data from previous returned promise.then
          .then( data => {
            // Generate Array From Returned Object
            // Firebase is OODB so it will return .json Objects
            
            // Initialize Empty array 
            const resultArray = [];
            // loop through Data keys
            for (let key in data) {
              resultArray.push(data[key]);
            }
            //Set users array to new array
            this.users = resultArray;
            console.log(resultArray);
          });
      }

    }
  };

</script>



<style lang="scss" scoped>

  /*--------------------------------------*/
  /* Lean Import for Components           */
  /*--------------------------------------*/

  /* Disable because they are already linted */
  /* stylelint-disable */
  @import '../assets/styles/component-lean-main.scss';
  /* stylelint-enable */

  /*--------------------------------------*/
  /* Main Component Styles                */
  /*--------------------------------------*/
  

  /*--------------------------------------*/

</style>
