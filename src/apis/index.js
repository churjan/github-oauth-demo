import Vue from 'vue';

const context = require.context('./', false, /\.api\.js$/);
const apis = {};
context.keys().forEach((name) => {
  const key = name.replace(/(^\.\/)|(\.api\.js$)/g, '');
  apis[key] = context(name);
});
Vue.prototype.$apis = apis;
