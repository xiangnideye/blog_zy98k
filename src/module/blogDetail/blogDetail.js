import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';

Vue.use(VueResource);
Vue.use(ElementUI);

new Vue({
    el:"#blogDetail",
    template:'<App/>',
    components:{App}
})
