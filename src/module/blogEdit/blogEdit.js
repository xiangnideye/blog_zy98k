import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import VueQuillEditor from 'vue-quill-editor'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor);
Vue.use(VueResource);
Vue.use(ElementUI);

new Vue({
    el:'#blogEdit',
    template:'<App/>',
    components:{App}
})