import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueAxios from 'vue-axios'
import Axios from 'axios'
import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import api from './config/api'

router.beforeEach((to, from, next) => {

    let token = localStorage.getItem('token') || '';

    //配置接口信息
    // Axios.defaults.baseURL = 'http://www.地址.com:8360/admin/';
    Axios.defaults.baseURL = api.rootUrl;
    Axios.defaults.headers.common['X-Nideshop-Token'] = token;

    if (!token && to.name !== 'login') {
        next({
            path: '/login',
            query: {redirect: to.fullPath}
        })
    } else {
        next()
    }
});


createApp(App)
    .use(ElementPlus)
    .use(store)
    .use(router)
    .use(VueQuillEditor)
    .use(VueAxios, Axios)
    .mount('#app')
