
const arr = [
	{
		path: '/404',
		name: '404',
		meta: {
			title: '页面不存在'
		},
		component: () => import('@/views/page/error/error404.vue'),
		children:[],
	}
];

export default arr;
