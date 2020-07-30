import Vue from 'vue';
import iView from 'iview';
import router from './router';

import './permission';
import BaseService from './service/BaseServive';

import App from './app.vue';

import 'iview/dist/styles/iview.css';

//引入阿里巴巴图标
// import './assets/iconfont/iconfont.css';


Vue.use(iView);
Vue.prototype.$ajax = BaseService;
Vue.prototype.$bus = new Vue();


new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
