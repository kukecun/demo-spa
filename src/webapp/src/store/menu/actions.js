
import * as types from '../types';

import Util from '@/lib/util';

// 导入主页，之后权限需要在此添加
import Home from '@/router/home';

// 获取到本地配置
import Group from '@/router/group';

// 一个模拟请求
import testAPI from '@/services/test';

let navList = [
	{
		name: "data",
		path: "/data",
		children: [
			{
				name: "dataStore",
				path: "/data/store",
				children: []
			}
		]
	},
	{
		name: "svg",
		path: "/svg",
		children: [
			{
				name: "svgCollection",
				path: "/svg/collection",
				children: [
					{
						name: "svgCollectionAdd",
						path: "/svg/collection/add",
						children: [],
					},
					{
						name: "svgCollectionDetail",
						path: "/svg/collection/detail",
						children: []
					}
				]
			},
			{
				name: "svgSketch",
				path: "/svg/sketch",
				children: []
			}
		]
	}
];

export default {

	// 配置菜单权限
  menuList({commit, dispatch}) {
		return new Promise((resolve, reject) => {
			testAPI.test({
				data: "111"
			}).then( res => {

				// 加入过滤后的导航
				let navData = Util.authorityManagement(navList, Group);

				Home[0].children.push(...navData);

				commit({
					type: types.MENULIST,
					menuList: navData,
				});

				resolve(Home);
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
