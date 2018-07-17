
import * as types from '../types';

import rt from '@/lib/router';

// 导入主页，之后权限需要在此添加
import Home from '@/router/home';

// 获取到本地配置
import Group from '@/router/group';

// 获取菜单
import menuAPI from '@/services/menu';

let navList = '[{"children":[{"children":[],"hidden":1,"level":2,"name":"数据仓库","orderNum":1,"parentId":309,"path":"/berth/data/store"},{"children":[],"hidden":1,"level":2,"name":"停车场总览","orderNum":2,"parentId":309,"path":"/berth/data/pack"}],"hidden":1,"level":1,"name":"数据总览","orderNum":1,"parentId":0,"path":"/berth/data"},{"children":[{"children":[],"hidden":0,"level":2,"name":"采集筛选","orderNum":1,"parentId":310,"path":"/berth/parking/collection"},{"children":[],"hidden":0,"level":2,"name":"草图绘制","orderNum":2,"parentId":310,"path":"/berth/parking/sketch"},{"children":[],"hidden":0,"level":2,"name":"SVG绘制","orderNum":3,"parentId":310,"path":"/berth/parking/drafting"},{"children":[],"hidden":0,"level":2,"name":"审核管理","orderNum":4,"parentId":310,"path":"/berth/parking/verify"}],"hidden":0,"level":1,"name":"停车场管理","orderNum":2,"parentId":0,"path":"/berth/parking"},{"children":[{"children":[],"hidden":0,"level":2,"name":"发布管理","orderNum":1,"parentId":311,"path":"/berth/release/manage"}],"hidden":0,"level":1,"name":"发布管理","orderNum":3,"parentId":0,"path":"/berth/release"},{"children":[{"children":[],"hidden":0,"level":2,"name":"采集任务创建管理","orderNum":1,"parentId":312,"path":"/berth/task/collectionCreate"},{"children":[],"hidden":0,"level":2,"name":"采集任务执行管理","orderNum":2,"parentId":312,"path":"/berth/task/collectionExecution"}],"hidden":0,"level":1,"name":"任务管理","orderNum":4,"parentId":0,"path":"/berth/task"}]';

export default {

	// 配置菜单权限
  menuList({commit, dispatch}) {

		return new Promise((resolve, reject) => {
			menuAPI.menu({
				
			}).then( res => {
				
				// 加入过滤后的导航
				let navData = rt.authorityManagement(JSON.parse(res.data), Group);

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
