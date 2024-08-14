import './assets/main.css'
import signalRService from '../src/services/signalrService';

import { createApp } from 'vue'
import App from './App.vue'


signalRService.start().then(() => {
    signalRService.onNewNotification((notification) => {
        app.config.globalProperties.$root.$emit('new-notification', notification);
    });
});

createApp(App).mount('#app')
