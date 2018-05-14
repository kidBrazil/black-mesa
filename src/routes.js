// Import Parent Compontents
import About                from './components/about/about.vue';
import Contact              from './components/parent-templates/contact.vue';
import ErrorPage            from './components/parent-templates/error_404.vue';
import Home                 from './components/home/home.vue';
// Case Studies
import CaseStudies          from './components/casestudies/casestudies.vue';
import CaseStudiesOverview  from './components/casestudies/casestudies-all.vue';
import ZucoraRsp            from './components/casestudies/zucora-rsp.vue';
import ZucoraTwop           from './components/casestudies/zucora-twop.vue';
// Services
import Services             from './components/services/services.vue';
import ServicesAppDev       from './components/services/service-appdev.vue';
import ServicesBranding     from './components/services/service-branding.vue';
import ServicesConsulting   from './components/services/service-consulting.vue';
import ServicesDigiAds      from './components/services/service-digiads.vue';
import ServicesOverview     from './components/services/service-all.vue';
import ServicesUx           from './components/services/service-ux.vue';
// Auth Components
import AuthComponent from './components/auth/Authentication.vue';
import LoginComponent from './components/auth/Login.vue';
import RegisterComponent from './components/auth/Register.vue';
import ResetComponent from './components/auth/Reset.vue';

// Export routes as named constant array.
// Routes consist of desired path + bound parent component
export const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '*', //404
    component: ErrorPage
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  },
  // Case Study Master Routes
  {
    path: '/casestudy',
    component: CaseStudies,
    redirect: '/casestudy/overview',
    // Load case studies as child views
    children: [
      {
        path: 'overview',
        component: CaseStudiesOverview,
      },
      {
        path: 'zucora-twop',
        component: ZucoraTwop
      },
      {
        path: 'zucora-rsp',
        component: ZucoraRsp
      }
    ]
  },
  // Services Master Routes
  {
    path: '/services',
    component: Services,
    redirect: '/services/overview',
    // Load case studies as child views
    children: [
      {
        path: 'overview',
        component: ServicesOverview,
      },
      {
        path: 'branding',
        component: ServicesBranding,
      },
      {
        path: 'app-development',
        component: ServicesAppDev
      },
      {
        path: 'consulting',
        component: ServicesConsulting
      },
      {
        path: 'digital-advertising',
        component: ServicesDigiAds
      },
      {
        path: 'ui-ux',
        component: ServicesUx
      }
    ]
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
      },
      {
        path: "reset",
        component: ResetComponent
      }
    ]
  }

];
