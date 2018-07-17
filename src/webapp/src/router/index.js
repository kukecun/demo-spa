
import Vue from 'vue';
import VueRouter from 'vue-router';
import Util from '@/lib/util';
import Cookies from 'js-cookie';
import rt from '@/lib/router';

// 用cookie记录是否刷新，每次刷新的时候重新返回权限
Cookies.set('refresh', 'true');

Vue.use(VueRouter);

import store from '@/store';

// home
import Home from './home';

// Err
import Err from './error';

// 合并路由
const routes = [...Err, ...Home];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

let menuMatched = [];

router.beforeEach((to, from, next) => {

  let toName = to.name;

  // 当前左侧导航显示菜单
  let name = to.path.split("/")[2];

  // 当前左侧高亮菜单
  let matched = to.matched;
  let len = matched.length;
  let asideName = len ? matched[len-1].name : "";

  // 判断是否是刷新后进入的导航守卫，如果是，那么重置权限（菜单）
  ;(async () => {

    if(Cookies.get("refresh")) {

      Cookies.remove("refresh");
  
      await store.dispatch('menu/menuList').then( ({nav, matched}) => {
        menuMatched = matched;
        router.addRoutes(nav);
      });
    }

    // 得到第一层默认高亮菜单路由name
    let curMenu = rt.getCurMenu(menuMatched, toName);

    if(toName == "home") {
      asideName = menuMatched[0].curName;
      next({
        name: asideName
      });
    }

    // 配置当前默认页面
    if(curMenu && curMenu.name != curMenu.curName) {
      asideName = curMenu.curName;
      next({
        name: curMenu.curName
      });
    }
  })();

  // 当前菜单顶部位置
  store.dispatch('menu/menuTypeInfo', {
    name: name,
    openedsType: rt.getMenuAsideOpenedsType(to.matched),
  });

  // 当前菜单左侧
  store.dispatch('menu/menuTypeAside', {
    name: asideName,
  });
  
  // 设置标题
  Util.title(to.meta.title);

  if(name != toName) next();
});

export default router;
