// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'ant-design-vue/dist/antd.css';
import Alert from 'ant-design-vue/lib/alert';
import 'ant-design-vue/lib/alert/style/css';
import Tag from 'ant-design-vue/lib/tag';
import 'ant-design-vue/lib/tag/style/css';
import Checkbox from 'ant-design-vue/lib/checkbox';
import 'ant-design-vue/lib/checkbox/style/css';
import List from 'ant-design-vue/lib/list';
import 'ant-design-vue/lib/list/style/css';
import Transfer from 'ant-design-vue/lib/transfer';
import 'ant-design-vue/lib/transfer/style/css';
import Vue from 'vue';
import App from './App';

Vue.use(Alert);
Vue.use(Tag);
Vue.use(Checkbox);
Vue.use(List);
Vue.use(Transfer);
Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
