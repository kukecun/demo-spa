import axios from 'axios';
import qs from 'qs';
import vm from './index';
import Cookies from "js-cookie";

// 获取VUE对象
let VM = vm.getVM();

// axios 中文使用说明
// https://www.kancloud.cn/yunye/axios/234845
const xhr = axios.create({
  baseURL: $G.webServer,
  timeout: 3000,
  //responseType: 'json',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    //'Accept': 'application/json'
  },
  // 在传递给 then/catch 前，允许修改响应数据
  // 通过Qs.stringify转换为表单查询参数
  transformRequest: [(data) => {
    data = qs.stringify(data);
    return data;
  }],
  // 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。
  // 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`) ,
  // promise 将被 resolve; 否则，promise 将被 rejecte 。
  validateStatus: status => status === 200,
});

// 表示跨域请求时是否需要使用凭证
// 设置请求允许携带cookie
//xhr.defaults.withCredentials = true;

// 请求拦截
// api.interceptors.request.use(
//   apiconfig => apiconfig,
//   e => Promise.reject(e),
// );

// 响应拦截
xhr.interceptors.response.use((res = {}) => {
  
  try {

    if (res.status >= 400) {
      // 错误提示
      console.log(">>>>>>>>>>>>"+res.data);
      return Promise.reject();
    }
    
    if(res.data.code < 0) {
      // VM.$message.error(res.data.msg);
      
      // // 登录失效的情况下,清除token
      // if(res.data.enumCode == 10000) {
      //   Cookies.remove("token");
      //   if(!!Cookies.get("token")) location.reload();
      // };

      // return Promise.reject();
    }

    return Promise.resolve(res.data);

  } catch (e) {

    return Promise.reject(e);
  }
});
export default xhr;
