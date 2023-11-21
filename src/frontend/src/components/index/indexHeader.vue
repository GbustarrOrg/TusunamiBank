<!-- Parte superior del index (landing page) aqui podrian colocar iconos o botones de navegación-->
<!-- Desde aqui se accede al login mediante el componente indexModalLogin-->
<script setup>
    import Button from 'primevue/button';
</script>

<template>
    <div class="flex justify-content-center">
        <button  class="p-button-rounded p-button-secondary button" @click="$router.push('/iniciarSesion')">Iniciar Sesión</button>
    </div>
</template>

<style scoped>
    .button {
        margin-left: 10px;
        display: block;
        background-color: blue;
        color: white;
    }
    .button:hover {
        background-color: #0f45ab;
    }
</style>