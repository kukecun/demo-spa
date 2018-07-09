
import Vue from 'vue';
import VueRouter from 'vue-router';
import Util from '@/lib/util';
import Cookies from 'js-cookie';

// 用cookie记录是否刷新，每次刷新的时候重新返回权限
Cookies.set('refresh', 'true');

Vue.use(VueRouter);

import store from '@/store';

// home
import Home from './home';

// login
import Login from './login';

// test
import Test from './test';

// 合并路由
const routes = [...Login, ...Test, ...Home];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {

  let toName = to.name;

  // 当前左侧导航显示菜单
  let name = to.path.split("/")[1] || "data";

  // 当前左侧高亮菜单
  let matched = to.matched;
  let len = matched.length;
  let asideName = len ? matched[len-1].name : "";

  // 设置首页
  if(toName == "home" || toName == "data") {
    next({
      name: 'dataStore'
    });
    asideName = 'dataStore';
  }
  
  if(toName == "svg") {
    next({
      name: 'svgCollection'
    });
    asideName = 'svgCollection';
  }

  // 判断是否是刷新后进入的导航守卫，如果是，那么重置权限（菜单）
  if(Cookies.get("refresh")) {

    Cookies.remove("refresh");

    store.dispatch('menu/menuList').then(nav => {
      router.addRoutes(nav);
    });
  }

  // 当前菜单顶部位置
  store.dispatch('menu/menuTypeInfo', {
    name: name,
    openedsType: Util.getMenuAsideOpenedsType(to.matched),
  });

  // 当前菜单左侧
  store.dispatch('menu/menuTypeAside', {
    name: asideName,
  });

  // 设置标题
  Util.title(to.meta.title);

  // if(to.name == 'login') {
  //   next({
  //     name: 'home_index'
  //   });
  // } else {
  //   next();
  // }

  next();
});

export default router;
