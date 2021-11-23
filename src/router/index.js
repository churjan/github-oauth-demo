import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/configs/routes';
import VueCookies from 'vue-cookies';
import store from '@/store';
import { getUserInfo } from '@/apis/sso.api.js';

Vue.use(VueRouter);

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.state.userInfo) {
      const token = VueCookies.get('token');
      if (!token) {
        next('/login');
      } else {
        getUserInfo(token)
          .then((data) => {
            store.commit('changeUserInfo', data);
            next();
          })
          .catch(() => {
            VueCookies.remove('token');
            next('/login');
          });
      }
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
