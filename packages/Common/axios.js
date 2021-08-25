import axios from 'axios';
import Vue from "vue";
import storeControl from './store'

axios.defaults.timeout = 30000; // 设置请求超时时间（ms）不超过半分钟

axios.interceptors.request.use(config => {
  // storeControl.state.loadding = true; //在请求发出之前进行一些操作
  return config;
}, error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  // storeControl.state.loadding = false;//在这里对返回的数据进行处理
  return response.data;
}, error => {

  let errMsg = '';
  if (error.response) {
    // 请求被执行，服务器以状态码进行响应
    switch (error.response.status) {
      case 400:
        errMsg = '错误请求';
        break;
      case 401:
        errMsg = '未授权，请重新登录';
        // 返回 401 清除token信息并跳转到登录页面
        localStorage.removeItem("token");
        console.log(this);
        this.$message.error(errMsg);
        location.href = "/login";
        break;
      case 403:
        errMsg = '拒绝访问';
        // 返回 401 清除token信息并跳转到登录页面
        localStorage.removeItem("token");
        console.log(this);
        this.$message.error(errMsg);
        location.href = "/login";
        break;
      case 404:
        errMsg = '请求错误,未找到该资源';
        break;
      case 405:
        errMsg = '请求方法未允许';
        break;
      case 408:
        errMsg = '请求超时';
        break;
      case 500:
        errMsg = '服务器端出错';
        break;
      case 501:
        errMsg = '网络未实现';
        break;
      case 502:
        errMsg = '网络错误';
        break;
      case 503:
        errMsg = '服务不可用';
        break;
      case 504:
        errMsg = '网络超时';
        break;
      case 505:
        errMsg = 'http版本不支持该请求';
        break;
      default:
        errMsg = '连接错误';
    }
  } else {
    errMsg = "连接到服务器失败";
  }

  return Promise.reject(errMsg);

});


/**
 * 错误提示，并把加载loading隐藏。只有data不显示
 * @param error 错误提示
 * @param loadingState
 */
function errorMessageView(error, loadingState) {
  console.log('failed', error);
  if (loadingState !== false) {
    storeControl.state.loadding = false;//在这里对返回的数据进行处理
  }
  if (error !== 'data') {
    Vue.prototype.$message.error(
        error,
        5,
    );
  }
}

export default {
  /**
   *
   * @param url  接口地址
   * @param params 接口参数 object
   * @param cdTetBdmd 租户隔离接口访问时，需要更改Header头Device信息
   * @param loadingState false则不显示loadding加载，其余则显示 loadding
   * @returns {Q.Promise<any>}
   */
  post(url, params, cdTetBdmd, loadingState) {

    let deviceUse = localStorage.getItem('device');

    //如果传入 租户标识,则重新拼装 device
    if (cdTetBdmd) {
      let deviceObj = JSON.parse(localStorage.getItem('device'));
      deviceObj.cdTet = cdTetBdmd;
      deviceObj.cdBdmd = cdTetBdmd;
      deviceUse = JSON.stringify(deviceObj);
    }
    //loadingState 不等于 false, 则显示加载 loading
    if (loadingState !== false) {
      storeControl.state.loadding = true;
    }

    return axios({
      method: 'post',
      url: url,
      data: params,
      headers: {
        'authorization': '{"token":"' + localStorage.getItem('token') + '"}',
        'device': deviceUse,
        'Content-Type': 'application/json'
      }
    }).then((response) => {

      if (loadingState !== false) {
        storeControl.state.loadding = false;//在这里对返回的数据进行处理
      }

      if (response.header.errcode === "0000000000") {
        return Promise.resolve(response.data);
      } else {
        if (response.header.errcode === "0000000415") {
        } else {
          Vue.prototype.$message.error(
              response.header.errmsg,
              5,
          );
          return Promise.reject('data');
        }
      }
    }).catch(error => {
      errorMessageView(error, loadingState);
    })
  },

  /**
   *
   * @param url  接口地址
   * @param params 接口参数 object
   * @param cdTetBdmd 租户隔离接口访问时，需要更改Header头Device信息
   * @param loadingState false则不显示loadding加载，其余则显示 loadding
   * @returns {Q.Promise<any>}
   */
  get(url, params, cdTetBdmd, loadingState) {

    let deviceUse = localStorage.getItem('device');

    //如果传入 租户标识,则重新拼装 device
    if (cdTetBdmd) {
      let deviceObj = JSON.parse(localStorage.getItem('device'));
      deviceObj.cdTet = cdTetBdmd;
      deviceObj.cdBdmd = cdTetBdmd;
      deviceUse = JSON.stringify(deviceObj);
    }

    //loadingState 不等于 false, 则显示加载 loading
    if (loadingState !== false) {
      storeControl.state.loadding = true;
    }

    return axios({
      method: 'get',
      url: url,
      params: params,
      headers: {
        'authorization': '{"token":"' + localStorage.getItem('token') + '"}',
        'device': deviceUse,
        'Content-Type': 'application/json'
      }
    }).then((response) => {

      if (loadingState !== false) {
        storeControl.state.loadding = false;//在这里对返回的数据进行处理
      }

      if (response.header.errcode === "0000000000") {
        return Promise.resolve(response.data);
      } else {
        if (response.header.errcode === "0000000415") {

        } else {
          Vue.prototype.$message.error(
              response.header.errmsg,
              5,
          );
          return Promise.reject('data');
        }
      }
    }).catch(function (error) {
      errorMessageView(error, loadingState);
    });
  },

  /**
   * 获取JSON文件内容
   * @param method
   * @returns {Promise<any>}
   */
  getJson(method) {

    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        baseURL: '',
        url: method,
        dataType: "json",
        crossDomain: true,
        cache: false
      }).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  }

}
