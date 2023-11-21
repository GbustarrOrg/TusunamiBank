<template>
      <div class="columna1">
        <div style="height: 80vh;background-color: white;border-radius: 30px;">
          <div class="fila" style="color:#0f45ab;text-align: left; margin-top: 30px;font-weight: 800;font-size: 30px;">
            Crear Cuenta Vista
            </div>
          <div class="fila">      
              <img src="../icons/Piñera.png">
            <div class="input-container">
                <p for="miCuadroDeTexto" style="color: #0f45ab;font-weight: 700;">La cuenta Vista es la más limitada (para rotos), con un limite de saldo de $2,500,000,
                lo que significa que no puedes realizar depósitos sobre ese monto. Asimismo, no pueden realizarse retiros por debajo de $0 pesos, y solo los primeros 4 retiros
                son gratuitos. Cada retiro posterior tiene un costo de $400 pesos.
                </p>
                <p style="color: #0f45ab;font-weight: 700; margin-top: 30px; font-size: 17px;">Proporciona tu rut para confirmar</p>
               


                <v-text-field :rules="[validateInput]" v-model="idUsuario" maxlength="10" color="black" :style="{ color: 'black' } "></v-text-field>
                <p style="color: black">El rut tiene el siguiente formato: 12345678-9</p>


            </div>
          </div>
          <div class="fila">

            <v-btn class="boton-contratar"  @click="contratar" >Contratar</v-btn>
          </div>
      
          <div class="fila" style="color: #0f45ab;font-weight: 800;">
            <p>¿Aun no confias? <a href="#"><router-link to="/creacioncuentas">Volver atras</router-link></a></p>
        </div>
    </div>
      
    </div>

  </template>
  
  <script setup>
  import { ref } from 'vue';
  import API from '@/API.js';
  import Swal from 'sweetalert2';
  import { useRouter } from 'vue-router';

  const nRetiros = ref(0);
  //const numeroCuenta = ref('');
  const comisionMensual = ref(0);
  const interes = ref(0);
  const saldo = ref(0);
  const sucursal = ref('default');
  const idUsuario = ref('');
  
  

  const validateInput = (value) => {
      const pattern = /^[0-9kK-]+$/;
      return pattern.test(value) || 'Ingrese solo números del 0 al 9, guion o la letra "k"';
    };
  
   


  const router = useRouter();
  const contratar = async () => {
    console.log('ENTRA');
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      
      if (result.isConfirmed) {
        console.log(idUsuario.value);
        crearCuentaVista();
      }
    });

  }

  const crearCuentaVista = async () => {
    const rutValid = idUsuario.value;
    console.log('rutvalid: '+ rutValid);
    const numeroDeCuentaVista = await API.getNumeroCuentaVista();
    const confirmarRut = await API.confirmarUsuarioByRut(rutValid);
    console.log("data de rut: " + confirmarRut.Respuesta)
    if (confirmarRut.Respuesta === true) {
      console.log("SE CREA EN LA BASE DE DATOS");
      const response = await API.addCuentaVista({
        "nRetiros": nRetiros.value,
        "numeroCuenta": numeroDeCuentaVista + 1,
        "comisionMensual": comisionMensual.value,
        "interes": interes.value,
        "saldo": saldo.value,
        "sucursal": sucursal.value, //ref susucrsal
        "idUsuario": rutValid //ref usuario
      });
      if(response.Respuesta == true){
        Swal.fire(
              '¡Cuenta Vista creada!',
              'Tu cuenta Vista ha sido creada con éxito.',
              'success'
            )
            router.push('/home');
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal!',
          })
        }

    }else{

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡El rut ingresado no es correcto!',
      })
      return;

  }
}




  </script>
  
  <style >
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
img{
    width: 300px;
    float: right;
}
.container-titulo-2{
    margin-bottom: 20px;
    text-align: end;
    width: 100%;
    float: right;
}
  
  .contenedor {
    height: 100%;
    background-color: #d9d9d9;
    
  }

  .columna1 {
    background-color: #d9d9d9;
    padding: 20px;
    width: 100%
  }

  .fila {
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 40px;
  }
  
  
  .input-container {
    margin-bottom: 20px;
    width: 50%;
  }
  
  .boton-contratar {
    
    margin: 0 auto;
    padding: 10px 150px;
    background-color: #ff0000;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  
  
  
  
      .login-buttons {
        text-align: center;
      }
  
      .login-button {
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        margin: 5px;
        cursor: pointer;
      }
  
      .google-button {
        background-color: #4285F4;
        color: #ffffff;
      }
  
      .facebook-button {
        background-color: #3b5998;
        color: #ffffff;
      }
      .floating-alert {
        position: fixed;
        top: 85%; /* Puedes ajustar la posición vertical según tus necesidades */
        right: 2%;
        transform: translateY(-50%);
      }
  </style>