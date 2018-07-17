export default {

	// 获取url
	getQueryString(name){
		let reg = new RegExp("(^|&?)"+ name +"=([^&]*)(&|$)");
		let r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
	},

	// 获取url参数对象
	getRequestData(){
		let url = location.search;
		let R = {};

		if(url.indexOf("?") != -1) {
			let str = url.substr(1);
			let strs = str.split("&");

			for(let i=0; i<strs.length; i++) {
				let r = strs[i].split("=");
				R[r[0]] = decodeURIComponent(r[1]);
			}
		}

		return R;
	},

	// 替换URL参数
	changeURLArg(url,arg,arg_val){ 
    let pattern=arg+'=([^&]*)'; 
		let replaceText=arg+'='+arg_val; 
		
    if(url.match(pattern)){ 
			let tmp = '/('+ arg+'=)([^&]*)/gi'; 
			tmp = url.replace(eval(tmp),replaceText); 
			return tmp; 
    }else{ 
			if(url.match('[\?]')){ 
				return url+'&'+replaceText; 
			}else{ 
				return url+'?'+replaceText; 
			} 
    } 
    return url+'\n'+arg+'\n'+arg_val; 
	},

	// 设置title
	title(str){
		let title = str || '';
    window.document.title = title;  
	},

	// 打*号
	hiddenString: function(str, startLen, endLen){
		if (!str) return "";
		
		var xNum = str.length - (startLen + endLen);
			
		if (xNum < 0) {
			return str;
		}
		return str.replace(str.slice(startLen, str.length - endLen), new Array(xNum + 1).join("*"));
	},

	/**
	 * 功能：时间戳转换时间
	 * 用法: expUse.format(new Date().getTime(), "yyyy-MM-dd hh:mm:ss W")
	 */
	format: function(timenumber, format) {

		let week = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
			newDate = new Date(timenumber),
			date = {
				"M+": (newDate.getMonth() + 1),
				"d+": newDate.getDate(),
				"h+": newDate.getHours(),
				"m+": newDate.getMinutes(),
				"s+": newDate.getSeconds(),
				"q+": Math.floor((newDate.getMonth() + 3) / 3),
				"S+": newDate.getMilliseconds(),
				"w+": newDate.getDay(),
				"W+": week[newDate.getDay()],
				"P+": () => {
					if(newDate.getHours() >= 11 && newDate.getHours() < 12)
					return "中午";

					if(newDate.getHours() < 11)
					return "上午";

					if(newDate.getHours() >=12)
					return "下午";
				}
			};

		if (/(y+)/i.test(format)) {
			format = format.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length));
		}

		for (var k in date) {
			if (new RegExp("(" + k + ")").test(format)) {
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
			}
		}

		return format;
	},

	/** 
	 * 倒计时
	*/
	tick(n, callback){

		let d = n * 1000, //持续时间
				c = d, //变化值
				t = 0, //当前时间
				b = 1, //当前值
				s = new Date().getTime(); 

		let T = (t, b, c, d) => (c * t / d + b),
				timer = null, isTick;

		function run(){
			let t = new Date().getTime() - s;

			if(isTick === false) {
				clearTimeout(timer);
				return false;
			}

			if (d > t) {
				if (typeof callback === "function") {
					isTick = callback(Math.ceil(T(t, b, c, d) / 1000))
				};
				timer = setTimeout(function(){
					run();
				}, 1000);
			};
		}
		run();
	},
};
