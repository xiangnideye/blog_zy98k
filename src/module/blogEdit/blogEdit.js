import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)
Vue.use(VueResource)
new Vue({
    el:'#blogEdit',
    template:'<App/>',
    components:{App}
})