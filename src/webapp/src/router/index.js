
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

// 这里保存了顶部导航切换过程中，左侧菜单默认的高亮菜单
let saveMatched = [];

// 这里保存了所有后台返回的path路径
let saveMenus = [];

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
  
      await store.dispatch('menu/menuList').then( ( res ) => {
        saveMatched = res.matched;
        saveMenus = res.menus;
        router.addRoutes(res.nav);
      });
    }

    // 得到第一层默认高亮菜单路由name
    let curMenu = rt.getCurMenu(saveMatched, toName);

    if(toName == "home") {
      asideName = saveMatched[0].curName;
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

    // 跳转404页面
    if(rt.is404(to.path, saveMenus)) {
      next({
        name: '404'
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
