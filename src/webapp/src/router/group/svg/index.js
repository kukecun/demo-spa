import svgViews from '@/views/group/svg';

const svg = {
	path: '/svg',
	name: 'svg',
	meta: {
		title: 'SVG',
		level: 1,
	},
	component: svgViews,
	children: {
		"svgCollection": {
			path: '/svg/collection',
			meta: {
				title: '采集筛选',
				level: 2,
			},
			name: 'svgCollection', 
			component: resolve => { require(['@/views/group/svg/collection'], resolve); },
			children: {
				"svgCollectionAdd": {
					path: '/svg/collection/add',
					name: 'svgCollectionAdd',
					meta: {
						title: '新增停车场',
						level: 3,
					},
					component: resolve => { require(['@/views/group/svg/collection/add.vue'], resolve); } 
				},
				"svgCollectionDetail": {
					path: '/svg/collection/detail',
					name: 'svgCollectionDetail',
					meta: {
						title: '停车场详情',
						level: 3,
					},
					component: resolve => { require(['@/views/group/svg/collection/detail.vue'], resolve); } 
				}
			}
		},
		"svgSketch": {
			path: '/svg/sketch',
			meta: {
				title: '草图绘制',
				level: 2,
			},
			name: 'svgSketch', 
			component: resolve => { require(['@/views/group/svg/sketch.vue'], resolve); } 
		},
		"svgDrafting": {
			path: '/svg/drafting',
			meta: {
				title: 'SVG制图',
				level: 2,
			},
			name: 'svgDrafting', 
			component: () => import('@/views/group/svg/drafting.vue')
		},
		"svgCheck": {
			path: '/svg/check',
			meta: {
				title: 'SVG核验',
				level: 2,
			},
			name: 'svgCheck', 
			component: () => import('@/views/group/svg/check.vue')
		},
		"svgRules": {
			path: '/svg/rules',
			meta: {
				title: 'SVG规则化',
				level: 2,
			},
			name: 'svgRules', 
			component: () => import('@/views/group/svg/rules.vue')
		},
		"svgVerify": {
			path: '/svg/verify',
			meta: {
				title: '预上线审核',
				level: 2,
			},
			name: 'svgVerify', 
			component: () => import('@/views/group/svg/verify.vue')
		}
	},
};

export default {
	svg,
};
