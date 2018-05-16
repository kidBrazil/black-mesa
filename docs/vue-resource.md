# Vue Resource - AJAX Wrapper
---
Vue resource allows us to make asynchronous AJAX requests to any API quickly and easily. For more information specific to vue-resource please visit their official [documentation](https://github.com/pagekit/vue-resource/tree/master/docs "Vue-Resource Documentation").

## Setup
The setup for vue-resource is actually quite simple and simply requires VueResource to be imported into *main.js*


## Configuration
There are several configuration options available for vue-resource and you can find more information in the official [documentation](https://github.com/pagekit/vue-resource/tree/master/docs "Vue-Resource Documentation").

```javascript
// main.js

// Import vue-resource
import VueResource from 'vue-resource';

// Tell Vue to use vue-resource..
Vue.use(VueResource);

// Set Global Root Path
// point it to project DB main project API

Vue.http.options.root = 'http://some-resource.io';
```

# Common Usage

## Standard *POST* Request

```javascript
//my-component.vue

// $http == vue-resource
// Post Request Sample ( Ajax )
// Utilizing Global root Path set in Main.js
// Interpolates to -- ('http://some-resource.io/data.json')
//
// this.$http.post('url' data)..
postData() {
  this.$http.post('data.json', this.user)
    //.then handles the promise once it returns with something
    .then( response => {
      // Log Response
      console.log( response );
      },
      error => {
        // Log Response
        console.log( error );
    });
}
```

## Standard *GET* Request

```javascript
//my-component.vue

// Sample GET Request (AJAX)
// Utilizing Global Root Path set in Main.js
// interpolates to -- ('http://some-resource.io/data.json')
//
// this.$http.get('url')
fetchData() {
  // Fetch Request Sampe ( Ajax )
  // Utilizing Global Root Path set in Main.js
  this.$http.get('data.json')
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
},
```

# Default Actions & Custom Actions
vue-resource ships with a few baked in default actions that you can use such as .save({..options..}, data). Which provide you with quick shorthand ways of making POST requests. Please check the documentation for more.

[Using URI Template Syntax](http://medialize.github.io/URI.js/uri-template.html "URI Syntax")

```javascript
//my-component.vue

// For default actions to work we first need to tell vue-resource to accept custom actions and to have a default fall back
// To do this we add a call to this.resource in the created() lifecycle hook.

export default {
  data() {
    return {
      // Points to the name of the firebase bucket minus the .json which gets appended.
      // Can be bound to something else to make it dynamic
      node: 'data',
      // Resource empty array storage
      resource: {}
    };
  },

  // Methods...
  methods: {
    // Default Action - Save [POST]
    this.resource.save( {..params..}, this.data );

    // Custom Action
    this.resource.saveCustom( this.data  )

    // Dynamic Fetch.
    fetchDataDynamic() {
      // Dynamic data fetch using dynamic data resource
      // getData is a customAction that pipes the data
      this.resource.getData( { node: this.node } )
        .then ( response =>  {
          return response.json();
        })
        .then ( data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;
        });
    },
  },

  // Created Lifecycle hook
  // Bindin resource to enable Custom Actions
  created (){
    // Create Custom Action Container
    const customActions() {
      // Create Custom Action
      saveCustom: {
        method: 'POST',
        // New data bucket..
        url: 'alternative.json'
      },
      // Dynamic Get Custom Action
      dynamicGet: {
        method: 'GET',
        // Dynamic URL takes data node from component.
        url: this.node + '.json'
      }
    };
    // Binds vue.resource to data.json
    // passes first data bucket and empty object
    this.resource = this.$resource('data.json', {}, customActions);
  }
}
```

# Interceptors
Interceptors allow for rules to be created so requests coming in and out of the application can be modified or logged. This might now always be necessary but provides a great level of flexibility when creating an app.

```javascript
// main.js

// Setting up request interceptors.

// Interceptors are an array of functions..
// create a new one by pushing a new one into the Array.

// request - self explanatory
// next - allows function to continue.
vue.http.interceptors.push((request, next) => {
  // Log Request
  console.log(request);

  // Smart Modify request
  if (request.method == 'POST') {
    // Dangerous stuff...
    request.method = 'PUT';
  }

  // Proceed with request by running next.
  // Grab response...
  next( response => {
    // Even MORE dangerous stuff...
    response.json = () => {
      //return new object....
    }
  });
});
```


