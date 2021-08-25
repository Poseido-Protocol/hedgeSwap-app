//验证日期 格式是否有效 形如(2020-05-27)
function dateReg(dateValue) {

  // debugger;
  let reg = /^(\d{4})-(\d{2})-(\d{2})$/;
  let str = trim(dateValue);

  if (str === "") {
    return false;
  }
  if (reg.test(str) && RegExp.$2 <= 12 && RegExp.$3 <= 31) {
    return true;
  }

  return false;

}

//短时间 格式是否有效，形如 (13:04)
function isTime(str) {

  let a = str.match(/^(\d{1,2})(:)?(\d{1,2})$/);
  if (a == null) {
    return false;
  }
  if (a[1] > 24 || a[3] > 60) {
    return false
  }
  return true;
}

/**
 * 时间戳转 自定义 时间格式
 * @param date 时间戳
 * @param fmt 格式 例：yyyy-MM-dd
 * @returns {void | string}
 */
function formatDate(date, fmt) {

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}


export {
  dateReg, isTime, formatDate
}
