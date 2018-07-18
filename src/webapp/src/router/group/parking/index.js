import parkingViews from '@/views/group/parking';

const parking = {
	path: '/berth/parking',
	name: 'parking',
	meta: {
		title: '停车场管理',
		level: 1,
	},
	component: parkingViews,
	children: {
		"/berth/parking/collection": {
			path: '/berth/parking/collection',
			meta: {
				title: '采集筛选',
				level: 2,
			},
			name: 'parkingCollection', 
			component: () => import('@/views/group/parking/collection'),
			children: {
				"/berth/parking/collection2": {
					path: '/berth/parking/collection',
					meta: {
						title: '采集筛选2',
						level: 3,
					},
					name: 'parkingCollection', 
					component: () => import('@/views/group/parking/collection'),
				}
			}
		},
		"/berth/parking/sketch": {
			path: '/berth/parking/sketch',
			meta: {
				title: '草图绘制',
				level: 2,
			},
			name: 'parkingSketch', 
			component: () => import('@/views/group/parking/sketch.vue')
		},
		"/berth/parking/drafting": {
			path: '/berth/parking/drafting',
			meta: {
				title: 'SVG制图',
				level: 2,
			},
			name: 'parkingDrafting', 
			component: () => import('@/views/group/parking/drafting.vue')
		},
		"/berth/parking/verify": {
			path: '/berth/parking/verify',
			meta: {
				title: '审核管理',
				level: 2,
			},
			name: 'parkingVerify', 
			component: () => import('@/views/group/parking/verify.vue')
		}
	},
};

export default {
	parking,
};
