import { createApp } from 'vue';
import App from './App.vue';
import './bootstrap';

import router from './Router';

const app = createApp({
    data() {
        return {
            loading: true
        }
      }
})

app.component(App)
app.use(router)
app.mount('#app')
