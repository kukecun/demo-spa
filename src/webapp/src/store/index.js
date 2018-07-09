import Vue from 'vue';
import Vuex from 'vuex';

// 登录退出
import auth from './auth';

// 菜单
import menu from './menu';

Vue.use(Vuex);

export default new Vuex.Store({
  
  modules: {
   auth,
   menu,
  },

  // 关闭严格模式
  strict: false,
});
