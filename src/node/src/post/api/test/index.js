
module.exports.start = function(app) {

	app.post("/api/menu", function(req, res){
		res.json({
			data: [
				{
					"children": [
						{"children":[],"hidden":1,"level":2,"name":"数据仓库","orderNum":1,"parentId":309,"path":"/berth/data/store"},
						{"children":[],"hidden":0,"level":2,"name":"停车场总览","orderNum":2,"parentId":309,"path":"/berth/data/pack"}
					],"hidden":0,"level":1,"name":"数据总览","orderNum":1,"parentId":0,"path":"/berth/data"
				},
				{
					"children":[
						{
							"children":[
								{
									"hidden":0,"level":2,"name":"采集筛选2","orderNum":1,"parentId":310,"path":"/berth/parking/collection2",
									"children":[]
								}
							],
							"hidden":0,"level":2,"name":"采集筛选","orderNum":1,"parentId":310,"path":"/berth/parking/collection"
						},
						{"children":[],"hidden":0,"level":2,"name":"草图绘制","orderNum":2,"parentId":310,"path":"/berth/parking/sketch"},
						{"children":[],"hidden":0,"level":2,"name":"SVG绘制","orderNum":3,"parentId":310,"path":"/berth/parking/drafting"},
						{"children":[],"hidden":0,"level":2,"name":"审核管理","orderNum":4,"parentId":310,"path":"/berth/parking/verify"}
					],
					"hidden":0,"level":1,"name":"停车场管理","orderNum":2,"parentId":0,"path":"/berth/parking"
				},
				{"children":[{"children":[],"hidden":0,"level":2,"name":"发布管理","orderNum":1,
			"parentId":311,"path":"/berth/release/manage"}],"hidden":0,"level":1,"name":"发布管理",
			"orderNum":3,"parentId":0,"path":"/berth/release"},
			{"children":[{"children":[],"hidden":0,"level":2,"name":"采集任务创建管理",
			"orderNum":1,"parentId":312,"path":"/berth/task/collectionCreate"},
			{"children":[],"hidden":0,"level":2,"name":"采集任务执行管理","orderNum":2,
			"parentId":312,"path":"/berth/task/collectionExecution"}],"hidden":0,
			"level":1,"name":"任务管理","orderNum":4,"parentId":0,"path":"/berth/task"}]
		});
	});
}