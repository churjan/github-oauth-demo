export default [
  {
    path: '/',
    component: () => import('@/views/index'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
  },
];
