<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const cerrarSesion = async () => {
    await router.push({ name: 'index' });
    //outer.push({ name: 'index' });
    console.log("Cerrando sesión...");
};

</script>

<template>
    <div>
        <div class="top-panel">
            <div class="logo">
                <img src="../icons/logo.png" class="logo-icono">
                <div class="text-container">
                    <p class="logo-text">Tusunami</p>
                    <p class="subtitle">"No lo vimos venir"</p>
                </div>
                <img src="../icons/estrella.png" class="star-icono">
            </div>
            <div class="spacer"></div>
            <div class="boton-container">
                <button class="boton" label="Sucursales" :ripple="false" />
                <div class="vertical-line"></div>
                <p style="margin-right: 20px;">Hola, Sebastián Piñera</p>
                <img src="../icons/choripan.jpg" class="rounded-icono">
                <button class="boton-cerrar" @click="cerrarSesion">
                    <img src="../icons/cerrar.png" alt="Cerrar" class="cerrar-icono">
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300&display=swap');

.top-panel {
    background-color: #0039A6;
    font-family: 'Libre Franklin', sans-serif;
    height: 100%;
    width: 100%;
    align-items: left;
    display: flex;
    position: relative;
}

.logo {
    display: flex;
    align-items: center;
    margin-left: 20px;
}

.logo-icono {
    width: 100px;
    height: 80px;
    margin-right: 10px;
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

.star-icono {
    width: 40px;
    height: 40px;
    margin-bottom: 35px;
}

.spacer {
    flex: 1;
}

.boton-container {
    color: #ffffff;
    font-size: 18px;
    text-align: right;
    margin-right: 20px;
    display: flex;
    align-items: center;
}

.boton {
    color: #ffffff;
    font-size: 18px;
    background-color: transparent;
    border-color: transparent;
    margin-top: 18px;
}

.vertical-line {
    width: 1px;
    height: 40px;
    background-color: white;
    margin-left: 10px;
    margin-right: 20px;
}

.rounded-icono {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}

.boton-cerrar {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}

.cerrar-icono {
    width: 35px;
    height: 35px;
    margin-left: 20px;
}
</style>