import Vue from "vue";
import App from "./App.vue";
import router from "./router/";
import './assets/css/index.scss';

//element-ui
import '../packages/core/components_use.js';
import 'element-ui/lib/theme-chalk/index.css';

//组件
// import {
//   PatientManage
// } from "../packages/index";
// Vue.use(PatientManage);

//语言化插件
import VueI18n from 'vue-i18n';
Vue.use(VueI18n) // 通过插件的形式挂载，通过全局方法 使用插件
import laguage_zh from '../packages/language/zh.js';
import laguage_en from '../packages/language/en.js';
const i18n = new VueI18n({
  locale: 'zh', // 语言标识 //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh': laguage_zh, //中文
    'en': laguage_en //英文
  },
  silentTranslationWarn: true, // 去除国际化警告
})

// import axios from "./../packages/Common/axios";
// import patientManageApi from "./../packages/Common/api";
// Vue.prototype.$axios = axios;
// Vue.prototype.$patientManageApi = patientManageApi;

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
