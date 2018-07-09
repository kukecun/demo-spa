import 'babel-polyfill';
import Vue from 'vue';
import ElementUI from 'element-ui';
import router from './router';
import store from './store';
import services from './services';
import App from './app.vue';
import 'element-ui/lib/theme-chalk/index.css';

import reset from './lib/reset.rem';
reset.init();

Vue.use(ElementUI);

let VM = new Vue({
	router: router,
	store: store,
	render: h => h(App)
}).$mount('#app');

// 配置VUE对象
services.setVM(VM);