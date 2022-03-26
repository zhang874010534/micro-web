import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {subNavList} from "./store/sub";

import {registerApp} from "./util";
registerApp(subNavList)

createApp(App).use(store).use(router).mount('#app')
