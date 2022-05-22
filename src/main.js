import { createApp } from 'vue'
import App from './App.vue'

// third-party
import less from 'less'

// css
import './assets/css/reset.css'

import router from './router'
import store from './store'

createApp(App).use(less).use(store).use(router).mount('#app')
