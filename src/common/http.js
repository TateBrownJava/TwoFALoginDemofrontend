import Vue from 'vue'
import axios from 'axios'

import {Loading, Message} from 'element-ui'

// axios 配置
axios.defaults.timeout = 6000;
// axios.defaults.baseURL = 'http://192.168.0.100:8080/';

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (Vue.cookie.get('token')) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.token = Vue.cookie.get('token');
    }
    return config;
  },
  err => {
    console.log(err);
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {

    return response;
  },
  error => {

    if (error.response) {

      switch (error.response.status) { //若服务端发生异常，则取不到http status的值
        case 401: //登录失败或toke无效，则服务端返回HttpServletResponse.SC_UNAUTHORIZED(401)

          Message.error({ //显示提示信息
            message: error.response.data.msg,
          });

          // 401 清除token信息并跳转到登录页面
          // store.commit(types.LOGOUT);
          Vue.cookie.delete('token');
          window.location.href = '/#/login'; //跳转到登录页面。

      }
    }
    return Promise.reject(error.response.data)
  });

// axios.install = (Vue) => {
//   Vue.prototype.$http = axios
// };
export default axios;
