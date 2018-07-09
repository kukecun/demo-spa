const arr = [
	{
		path: '/login',
		name: 'login',
		meta: {
			title: 'login'
		},
		component: resolve => { require(['@/views/page/login'], resolve); },
		children:[],
	}
];

export default arr;
