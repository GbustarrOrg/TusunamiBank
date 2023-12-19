<!-- Parte superior del index (landing page) aqui podrian colocar iconos o botones de navegación-->
<!-- Desde aqui se accede al login mediante el componente indexModalLogin-->
<script setup>
import indexModalLogin from './indexModalLogin.vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import { ref } from "vue";

const visible = ref(false);

</script>

<template>
    <div class="card flex justify-content-center">
        <Button label="Login" icon="pi pi-external-link" @click="visible = true" />

        <Dialog v-model:visible="visible" modal :style="{ width: '600rem', height: '600rem' }">
            <indexModalLogin></indexModalLogin>
        </Dialog>
    </div>
</template>