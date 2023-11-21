
<!-- Esta pagina es el landing page-->
<!-- Permite que un nuevo usuario vea los tipos de cuenta y/o ofertas del banco-->
<!-- Otorga al usuario la opcion de redirección a registro (en este mismo componente) o login
    (en el header)
-->

<script setup>
import indexBody from '../components/index/indexBody.vue'


</script>
<template>
    <indexBody class="main"></indexBody> <!-- contenido del landing page-->
</template>

<style scoped>
.main{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
}
</style>
