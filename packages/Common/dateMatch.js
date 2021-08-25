//验证日期 格式是否有效 形如(2020-05-27)
export function dateReg(dateValue) {

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
export function isTime(str) {

  let a = str.match(/^(\d{1,2})(:)?(\d{1,2})$/);
  if (a == null) {
    return false;
  }
  if (a[1] > 24 || a[3] > 60) {
    return false
  }
  return true;
}

//运用正则表达式去除字符串两端空格（因为js不支持trim（））
function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}
