import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [{
        path: '/login',
        meta: {
            title: '登录'
        },
        component: (resolve) => require(['./views/login.vue'], resolve)
    },
    {
        path: '/',
        redirect: '/login',
    },
];

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes
};
const router = new Router(RouterConfig);

//利用全局路由导航守卫来判断页面权限
// router.beforeEach(function (to, from, next) { //to代表将要去到的地址，from代表从哪个路径跳转而来，next是一个方法，代表放行也就是允许访问
//     if (to.path === '/login' || to.path === '/reset') return next();
//     const token = window.sessionStorage.getItem('token');
//     if (!token) return next('/login');
//     next();
// });
export default router;
