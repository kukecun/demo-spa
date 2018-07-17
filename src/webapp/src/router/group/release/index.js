import releaseViews from '@/views/group/release';

const release = {
	path: '/berth/release',
	name: 'release',
	meta: {
		title: '发布管理',
		level: 1,
	},
	component: releaseViews,
	children:{
		"/berth/release/manage": {
			path: '/berth/release/manage',
			meta: {
				title: '发布管理',
				level: 2,
			},
			name: 'releaseManage', 
			component: () => import('@/views/group/release/manage.vue')
		}
	}
};

export default {
	release,
};
