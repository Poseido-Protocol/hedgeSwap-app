//预发布环境
let fileToken_preview = "/basedata/file/query/pubUpToken";
//测试环境
let fileToken_test = "http://192.168.188.61:8093/basedata/file/query/pubUpToken";
//生产环境
let fileToken_production = "http://som.lifesea.com/basedata/file/query/pubUpToken";

function getCurDate() {
  let d = new Date();
  return d.getFullYear() + "-" + (d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) + "-" + (d.getDate() < 10 ? "0" + d.getDate() : d.getDate());
}

//普通上传
function Qiniu_upload(f, token, key, imgdomain, success, failedMatch) {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', "https://upload-z1.qiniup.com", true);
  let formData = new FormData();
  if (key !== null && key !== undefined) formData.append('key', key);
  formData.append('token', token);
  formData.append('file', f);

  xhr.onreadystatechange = function (response) {

    // console.log("response:");
    // console.log(response);
    if (xhr.readyState === 4 && xhr.status === 200 && xhr.responseText !== "") {

      let blkRet = JSON.parse(xhr.responseText);
      success(imgdomain + blkRet.key, f.name);
    } else if (xhr.status === 400 || xhr.status === 401 || xhr.status === 403 || xhr.status === 404 || xhr.status === 405 || xhr.status === 407 || xhr.status === 500) {

      // 服务器常用的状态码及其对应的含义如下：
      // 200：服务器响应正常。
      // 304：该资源在上次请求之后没有任何修改（这通常用于浏览器的缓存机制，使用GET请求时尤其需要注意）。
      // 400：无法找到请求的资源。
      // 401：访问资源的权限不够。
      // 403：没有权限访问资源。
      // 404：需要访问的资源不存在。
      // 405：需要访问的资源被禁止。
      // 407：访问的资源需要代理身份验证。
      // 414：请求的URL太长。
      // 500：服务器内部错误。
      console.log("error:" + xhr.status);

      failedMatch('', f.name);
    }
  };

  xhr.send(formData);
};

function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


//获取七牛云 上传 token && domain
function getReq(options, success, error) {

  let request = new XMLHttpRequest();
  request.open('GET', options.url, true);

  request.onload = function () {

    let data = JSON.parse(this.response);
    if (this.status >= 200 && this.status < 400) {

      success(data);
    } else {
      error(data);
    }
  };
  request.onerror = error || function (e) {
    console.log(e);
    error(e);
  };

  request.send();
}

//图片上传
export function upfilepath(uploadFile, returnWriteArray, returnFailedM) {
  let vueObj = {
    upform: {
      key: "",
      token: ""
    },
    upImgFile: "",
  };

  // debugger;
  let file = uploadFile.file;
  if (file.size > 10 * 1024 * 1024) {
    alert("文件大于10M了!");
    return "";
  }

  let fileToken;

  // fileToken=fileToken_test;

  fileToken = fileToken_preview;

  // fileToken=fileToken_production;

  getReq({
    url: fileToken
  }, function (result) {
    // console.log(result);
    let token = result.data.token;
    let imgdomain = result.data.domain;
    vueObj.upform.token = token;
    vueObj.upform.key = "gxyzx/p/" + getCurDate().replace(/-/g, "") + "/" + guid() + "." + file.name.split(".")[1];
    vueObj.upImgFile = imgdomain + "/" + vueObj.upform.key;

    Qiniu_upload(file, token, vueObj.upform.key, imgdomain, returnWriteArray, returnFailedM);

  }, function (result) {
    console.log("upload getToken error:");
    console.log(result);

    returnFailedM('', file.name);
  });
}

