<script setup>
    import Button from 'primevue/button';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const cerrarSesion= ()=>{
        router.push({ name: 'index' });
        //outer.push({ name: 'index' });
        console.log("Cerrando sesión...");
    };

</script>

<template>
    <div>
      <div class="top-panel">
            <div class="logo-container">
                <img src="../icons/logo.png" class="icono">
                <div class="text-container">
                    <p class="logo-text">Tusunami</p>
                    <p class="subtitle">"No lo vimos venir"</p>
                </div>
                <img src="../icons/estrella.png" class="small-icono">
            </div>
            <div class="spacer"></div>
            <div class="button-container">
                <Button class="boton" label="Sucursales" :ripple="false"/>
                <div class="vertical-line"></div>
                <p style="margin-right: 20px;">Hola, Sebastián Piñera</p>
                <img src="../icons/choripan.jpg" class="rounded-icono">
                <Button class="boton" label="Cerrar" :ripple="false" @click="cerrarSesion"/>
            </div>
      </div>
    </div>
</template>

<style scoped>
    .top-panel {
        background-color: #0039A6;
        height: 100%;
        width: 100%;
        align-items: left;
        display: flex;
        position: relative;
    }

    .logo-container {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }

    .icono {
        width: 100px;
        height: 80px;
        margin-right: 10px;
    }

    .rounded-icono {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .small-icono {
        width: 40px;
        height: 40px;
        margin-bottom: 35px;
    }

    .text-container {
        text-align: left;
        color: white;
    }

    .logo-text {
        font-weight: bold;
        font-size: 40px;
        margin-left: 10px;
    }

    .subtitle {
        font-size: 20px;
        margin-left: 40px;
        margin-bottom: 10px;
    }

    .spacer {
        flex: 1;
    }

    .button-container {
        color: #ffffff;
        font-size: 18px;
        text-align: right;
        margin-right: 20px;
        display: flex;
        align-items: center;
    }

    .boton {
        color: #ffffff;
        background-color: transparent;
        border-color: transparent;
    }

    .vertical-line {
        width: 1px;
        height: 40px;
        background-color: white;
        margin-left: 10px;
        margin-right: 20px;
    }

</style>