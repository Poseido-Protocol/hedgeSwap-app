/* eslint-disable */
import Vue from 'vue';

function getUrlKey(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
}

//弹出错误信息，比如接口调用返回错误提示信息
function printMessage(data, messageCon) {
  let errMsg = (data === undefined || data.header === undefined) ? messageCon : data.header.errmsg;
  Vue.prototype.$message.error(
      errMsg,
      5,
  );
}


/**
 * 删除选择数据 确认框
 * @param funDel 确认删除 调用方法
 * @param viewContent 删除时的提示文字
 */
function deleteConfirm(funDel, viewContent) {
  Vue.prototype.$confirm({
    title: '确认',
    content: viewContent ? viewContent : '确认删除当前数据吗？',
    okText: '确认',
    cancelText: '取消',
    onOk() {
      funDel();
    },
    onCancel() {
    },
  });
}

//自定义弹出内容 确认框
function customConfirm(fun, strCon) {
  Vue.prototype.$confirm({
    title: '确认',
    content: strCon,
    okText: '确认',
    cancelText: '取消',
    onOk() {
      fun();
    },
    onCancel() {
    },
  });
}

export {
  getUrlKey, printMessage, deleteConfirm, customConfirm
}
