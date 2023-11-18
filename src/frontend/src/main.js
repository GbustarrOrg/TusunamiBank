//Importaciones base
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'vuetify/styles'
import { initializeApp } from 'firebase/app';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


// Para cambiar el tema de PrimeVue, elegir otro import de: https://primevue.org/theming/
import 'primevue/resources/themes/lara-light-blue/theme.css'

// Importación de iconos de PrimeVue
import 'primeicons/primeicons.css'


//Importación de PrimeVue
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

// importación de rutas
import router from './router';

const firebaseConfig = {
    apiKey: "AIzaSyAjfnH5xIIyv1l_MX23WQ7kUeeUVMq3cg0",
    authDomain: "hola-5d173.firebaseapp.com",
    projectId: "hola-5d173",
    storageBucket: "hola-5d173.appspot.com",
    messagingSenderId: "861416750915",
    appId: "1:861416750915:web:2055906cb5f93d479979f6",
    measurementId: "G-RJF967NYE6"
};

const firebase = initializeApp(firebaseConfig);
console.log(firebase)

const vuetify = createVuetify({
    components,
    directives,
    
  })
const app = createApp(App)

//Uso de dependencias
app.use(createPinia())
app.use(PrimeVue);
app.use(ToastService);
app.use(router); 
app.use(vuetify);

app.mount('#app')
