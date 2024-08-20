import './assets/main.css'
import signalRService from '../src/services/signalrService';
import router from '../Router/router.js'
import { createApp } from 'vue'
import App from './App.vue'




signalRService.start().then(() => {
    signalRService.onNewNotification()
   
});



const app = createApp(App);
app.use(router); 

app.mount('#app');
