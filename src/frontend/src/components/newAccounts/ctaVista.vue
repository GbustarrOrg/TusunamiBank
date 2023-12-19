<template>
    
    <v-otp-input :length="9" v-model="idUsuario" variant="solo-filled"></v-otp-input>
    <v-btn class="boton-contratar"  @click="contratarCuentaVista" >Contratar</v-btn>


</template>
<script setup>
  import { ref } from 'vue';
  import API from '@/API.js';
  import Swal from 'sweetalert2';
  import { useRouter } from 'vue-router';
  
  const comisionMensual = ref(0);
  const numRetiros = ref(0);
  const idUsuario = ref('');
  const sucursal = ref('None');
  const intereses = ref(0);
  const saldo = ref(0);
  const router = useRouter();

  const contratarCuentaVista = async () => {
    //HACER ESTILOS DE CONFIRMACION AQUI
    createCuentaVista();
  }
  const createCuentaVista = async () => {
    const formatearRut = (rutSinFormato) => {
        // Asegúrate de que el RUT sin formato sea una cadena
        rutSinFormato = String(rutSinFormato);

        // Obtén los últimos dígitos y el dígito verificador
        const ultimosDigitos = rutSinFormato.slice(-1);
        const digitosRestantes = rutSinFormato.slice(0, -1);

        // Separa los dígitos en grupos de tres desde el final
        const rutFormateado = digitosRestantes.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        // Devuelve el RUT formateado
        return `${rutFormateado}-${ultimosDigitos}`;
    };
    const validaRut = formatearRut(idUsuario.value);
    console.log("rut: " + validaRut)
    const numCuenta = await API.getNumeroCuentaVista();
    const confirmRut = await API.confirmarUsuarioByRut(validaRut);
    console.log("data de rut: " + confirmRut.Respuesta)
    if (confirmRut.Respuesta === true) {
      
      const response = await API.addCuentaVista({
        "nRetiros": numRetiros.value,
        "numeroCuenta": numCuenta + 1,
        "comisionMensual": comisionMensual.value,
        "interes": intereses.value,
        "saldo": saldo.value,
        "sucursal": sucursal.value, //ref susucrsal
        "idUsuario": validaRut //ref usuario
        
      }).then((response) => {
        console.log(response.data);
        console.log("bd ctavista creada")
      }).catch((error) => {
        console.log("error al crear ctavista");
        console.log(error);
      });
    }
  }




</script>