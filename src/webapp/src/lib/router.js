
export default {

  // 配置导航
	authorityManagement (list, original, menus = []) {

		let _this = this;
	
		list.forEach((item, key) => {
			
			list[key].component = original[item.path].component;
			list[key].meta = original[item.path].meta;
			list[key].meta.title = list[key].name;
			list[key].meta.index = key;
			list[key].name = original[item.path].name;

			menus.push(list[key].path);

			let childrenList = item.children;
			
			if(!!childrenList && childrenList.length > 0) {
				_this.authorityManagement(childrenList, original[item.path].children, menus);
			}
		});
	
		return {
			list,
			menus
		};
	},

	// 获取左侧菜单展开数组
	getMenuAsideOpenedsType(list){

		let R = [];
		for(let i=0; i<list.length; i++) {
			R.push(list[i].name);
		}
		return R;
	},

	// 获取菜单默认匹配
	getMenuMatched(list = []){

		let R = [];

		list.forEach(function(item){

			let r = {};

			if(item.hidden == 0) {

				let itemName = item.name;

				r.name = itemName;

				let len = item.children.length;

				if(!!len) {

					for(let i=0; i<len; i++) {
						if(item.children[i].hidden == 0) {
							r.curName = item.children[i].name;
							R.push(r);
							break;
						}
					}

				} else {
					r.curName = itemName;
					R.push(r);
				}
			}
		});

		return R;
	},

	// 获取导航跳转
	getCurMenu(menu = [], name = ""){

		let R = null;
		
		for(let i=0; i<menu.length; i++) {
			if(menu[i].name == name) {
				R = menu[i];
				break;
			}
		}

		return R;
	},

	is404(path, menus) {

		let flag = true;
		let len = menus.length;

		for(let i=0; i<menus.length; i++) {
			if(path == menus[i]) {
				flag = false;
				break;
			}
		}

		if(/^(\/404|\/)$/.test(path)) {
			flag = false;
		}

		return flag; 
	}
}