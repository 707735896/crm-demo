import router from './router';
import {LoadingBar} from 'iview';
// 路由守卫
// router.beforeEach((to, from, next) => {
//     let user = sessionStorage.getItem('sportHealthUserName');
//     if (!user && to.path !== '/login') {
//         sessionStorage.clear();
//         next('/login');
//     } else {
//         if (to.path === '/login' || to.path === '/') {
//             sessionStorage.clear();
//             next();
//         } else if (to.path === '/index') {
//             LoadingBar.start();
//             next();
//         } 
//     }
// });

router.afterEach(() => {
    LoadingBar.finish();
    window.scrollTo(0, 0);
});
