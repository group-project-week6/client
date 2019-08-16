import Vue from 'vue';
import Swal from 'sweetalert2';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue';


new Vue(App).$mount('#app');
Vue.use(BootstrapVue)
Vue.use(Swal)