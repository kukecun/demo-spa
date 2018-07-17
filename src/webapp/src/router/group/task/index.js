import taskViews from '@/views/group/task';

const task = {
	path: '/berth/task',
	name: 'task',
	meta: {
		title: '任务管理',
		level: 1,
	},
	component: taskViews,
	children:{
		"/berth/task/collectionCreate": {
			path: '/berth/task/collectionCreate',
			meta: {
				title: '采集任务创建管理',
				level: 2,
			},
			name: 'taskCollectionCreate', 
			component: () => import('@/views/group/task/collectionCreate.vue')
		},
		"/berth/task/collectionExecution": {
			path: '/berth/task/collectionExecution',
			meta: {
				title: '采集任务执行管理',
				level: 2,
			},
			name: 'taskCollectionExecution', 
			component: () => import('@/views/group/task/collectionExecution.vue')
		}
	}
};

export default {
	task,
};
