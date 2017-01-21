// Import Parent Compontents
import TestRoute from './components/parent-templates/test-route.vue';
import homeMain from './components/parent-templates/home.vue';

// Export routes as named constant array.
// Routes consist of desired path + bound parent component
export const routes = [
  {
    path: '',
    component: homeMain
  },
  {
    path: '/testroute/:id',
    component: TestRoute
  },
  // Example with Url Argument
  {
    path: '/testroute2/:id',
    component: TestRoute
  }
];
