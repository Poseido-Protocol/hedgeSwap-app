import PatientManage from "./index.vue";

PatientManage.install = function(Vue) {
  Vue.component(PatientManage.name, PatientManage);
};

export default PatientManage;
