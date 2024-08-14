import './assets/main.css'
import signalRService from '../src/services/signalrService';
import router from '../Router/router.js'
import { createApp } from 'vue'
import App from './App.vue'


signalRService.start().then(() => {
    signalRService.onNewNotification((notification) => {
        app.config.globalProperties.$root.$emit('new-notification', notification);
    });
});

const app = createApp(App);
app.use(router); // Use the router
app.mount('#app');

//createApp(App).mount('#app')
