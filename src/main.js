// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import Http from "./assets/help";
import Comfn from './assets/Comn';
import store from './store/index';
import {
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
Vue.prototype.$http=new Http();
Vue.prototype.Comfn=new Comfn();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
