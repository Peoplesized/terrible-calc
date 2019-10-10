import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Signup from './views/Signup.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/calc',
      name: 'calc',
      component: Home,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '*',
      redirect: '/about',
    },
  ],
});
