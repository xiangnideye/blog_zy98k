import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import html from '../../components/html'; 
import css from '../../components/css';
import js from '../../components/js';
import node from '../../components/node';
import list from '../../components/blogList'
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
    { path: '/html', component: html },
    { path: '/css', component: css },
    { path: '/js', component: js },
    { path: '/node', component: node },
    // {path:'/list',component: list}
]
const router = new VueRouter({
    routes
})

// 
const appRouter = new Vue({
    router:router,
    render:h=>h(App)
}).$mount('#index');
  