
import * as types from '../types';

export default {

  // 菜单列表
  [types.MENULIST](state, payload) {
    state.menuList = payload.menuList;
  },

  // 当前菜单信息
  [types.MENUTYPEINFO](state, payload) {
    state.menuTypeInfo = payload.menuTypeInfo;
  },

  // 当前菜单 aside
  [types.MENUTYPEASIDE](state, payload) {
    state.menuTypeAside = payload.menuTypeAside;
  },
};
