// 引入@babel/polyfill处理兼容
import "@babel/polyfill";
// 导入ant组件
// import "./core/components_use";

// import 'ant-design-vue/dist/antd.css';

import PatientManage from "./components/index";

const components = [PatientManage];

const install = function (Vue) {
  // use ant组件
  if (install.installed) return;
  install.installed = true;

  components.map(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}


// 这里可以用es6的解构语法导入组件
export {
  PatientManage
};
export default {
  install
};
