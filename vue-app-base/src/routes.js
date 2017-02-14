// Import Parent Compontents
import TestRoute from './components/parent-templates/test-route.vue';
import homeMain from './components/parent-templates/home.vue';
import AuthComponent from './components/auth/Authentication.vue';
import LoginComponent from './components/auth/Login.vue';
import RegisterComponent from './components/auth/Register.vue';

// Export routes as named constant array.
// Routes consist of desired path + bound parent component
export const routes = [
  {
    path: '',
    component: homeMain
  },
  {
    path:'/auth',
    component: AuthComponent,
    redirect: '/auth/login',
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "register",
        component: RegisterComponent
      }
    ]
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
