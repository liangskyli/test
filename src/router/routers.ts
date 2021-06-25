export default [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      { path: '/', component: '@/pages/index/index', title: '首页' },
      { path: '/me', component: '@/pages/me/me', title: '个人中心' },
      { path: '*', exact: true, component: '@/pages/404' },
    ],
  },
];
