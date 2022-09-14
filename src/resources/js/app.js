import { createApp } from 'vue';
import App from './App.vue';
import './bootstrap';
import store from './store'
import globalMixin from "./mixins/global"

import router from './Router';


const app = createApp(App)
app.mixin(globalMixin)
app.use(store)
app.use(router)
app.mount('#app')
