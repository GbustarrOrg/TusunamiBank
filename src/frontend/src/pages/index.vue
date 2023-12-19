
<!-- Esta pagina es el landing page-->
<!-- Permite que un nuevo usuario vea los tipos de cuenta y/o ofertas del banco-->
<!-- Otorga al usuario la opcion de redirección a registro (en este mismo componente) o login
    (en el header)
-->

<script setup>
import indexHeader from '../components/index/indexHeader.vue'
import indexBody from '../components/index/indexBody.vue'
import cuentas from '../pages/cuentas.vue'

</script>
<template>
  <v-app>
    <v-app-bar>
    <indexHeader></indexHeader>
    </v-app-bar>
  <v-main>
    <indexBody></indexBody> <!-- contenido del landing page-->
  </v-main>
</v-app>
</template>

<style scoped>

</style>
