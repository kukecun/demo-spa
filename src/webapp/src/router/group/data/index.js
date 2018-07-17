import dataViews from '@/views/group/data';

const data = {
	path: '/berth/data',
	name: 'data',
	meta: {
		title: '数据总览',
		level: 1,
	},
	component: dataViews,
	children:{
		"/berth/data/store": {
			path: '/berth/data/store',
			meta: {
				title: '数据仓库',
				level: 2,
			},
			name: 'dataStore', 
			component: () => import('@/views/group/data/store.vue')
		},
		"/berth/data/pack": {
			path: '/berth/data/pack',
			meta: {
				title: '停车场总览',
				level: 2,
			},
			name: 'dataPack', 
			component: () => import('@/views/group/data/pack.vue')
		},
	},
};

export default {
	data,
};
