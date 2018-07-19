
import * as types from '../types';

import rt from '@/lib/router';

// 导入主页，之后权限需要在此添加
import Home from '@/router/home';

// 获取到本地配置
import Group from '@/router/group';

// 获取菜单
import menuAPI from '@/services/test';

export default {

	// 配置菜单权限
  menuList({commit, dispatch}) {

		return new Promise((resolve, reject) => {
			menuAPI.menu({
				
			}).then( res => {

				if(!!!res.data) reject(false);
				
				// 加入过滤后的导航
				//let filterData = rt.authorityManagement(JSON.parse(res.data), Group);
				let filterData = rt.authorityManagement(res.data, Group);
				let navData = filterData.list;
				let menus = filterData.menus;

				// 获取菜单默认匹配
				let matched = rt.getMenuMatched(navData);

				Home[0].children.push(...navData);

				commit({
					type: types.MENULIST,
					menuList: navData,
				});

				resolve({
					nav: Home,
					matched,
					menus,
				});
			});
		});
	},

	// 当前菜单
	menuTypeInfo({commit, dispatch}, payload) {

		commit({
			type: types.MENUTYPEINFO,
			menuTypeInfo: {
				name: payload.name,
				openedsType: payload.openedsType,
			},
		});
	},

	// 左侧菜单
	menuTypeAside({commit, dispatch}, payload) {

		commit({
			type: types.MENUTYPEASIDE,
			menuTypeAside: {
				name: payload.name
			},
		});
	}
}
