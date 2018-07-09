import onlineViews from '@/views/group/online';

const online = {
	path: '/online',
	name: 'online',
	meta: {
		title: '上线管理',
		level: 1,
	},
	component: onlineViews,
	children:{
		"onlineManage": {
			path: '/online/manage',
			meta: {
				title: '上线管理',
				level: 2,
			},
			name: 'onlineManage', 
			component: () => import('@/views/group/online/manage.vue')
		}
	}
};

export default {
	online,
};
