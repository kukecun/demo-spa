const arr = [
	{
		path: '/test',
		name: 'test',
		meta: {
			title: 'test'
		},
		component: resolve => { require(['@/views/page/test'], resolve); }
	}
];

export default arr;
