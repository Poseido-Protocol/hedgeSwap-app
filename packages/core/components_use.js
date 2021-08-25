/* eslint-disable */
/**
 * 该文件是为了按需加载，剔除掉了一些不需要的框架组件。
 * 减少了编译支持库包大小
 *
 * 当需要更多组件依赖时，在该文件加入即可
 */
import Vue from 'vue'
import {
  Dialog,
  Slider,
  Divider,
  Dropdown
} from 'element-ui'

Vue.use(Dialog)
Vue.use(Slider)
Vue.use(Divider)
Vue.use(Dropdown)


// message.config({
//   top: '40px',
//   duration: 2,
//   maxCount: 3,
// });

// Vue.prototype.$confirm = Modal.confirm;
// Vue.prototype.$message = message;
// Vue.prototype.$notification = notification
// Vue.prototype.$info = Modal.info
// Vue.prototype.$success = Modal.success
// Vue.prototype.$error = Modal.error
// Vue.prototype.$warning = Modal.warning


