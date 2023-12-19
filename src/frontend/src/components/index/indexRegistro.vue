<!-- Componente designado para contener el formulario de registro del mockup-->
<!-- Debe contener la logica necesaria para redireccionar hacia home si el registro fue exitoso-->
<template>
  <div class="registro-container">
    <div class="image-container">
      <h1 style="color: #ee451b;">Bancos<br>Tusunami</h1>
      <img
        src="https://trello.com/1/cards/654d83f9682db5e91c4b4d00/attachments/654ff6e5f6f7c785ecf36ba5/previews/654ff6e6f6f7c785ecf36bbd/download/pngwing.com.png"
        alt="Imagen de fondo" width="510" height="510" />
    </div>
    <div class="form-container">
      <h2 style="color: #103ed4;">Crear cuenta</h2>
      <form @submit.prevent="login">
        <div class="input-container">
          <label style="color: #103ed4;" for="username">Nombre Completo:</label>
          <input type="text" id="username" :maxlength="50" :counter="50" @keypress="soloLetras" v-model="completeName"
            required>
        </div>
        <div class="input-container">
          <label style="color: #103ed4;" for="rut">Rut:</label>
          <input type="text" id="rut" class="underline-input" name="rut" v-model="rut" @input="validarRut" required>
            <p id="mensajeRUT" style="color: red;">{{mensajeRUT}}</p>
          <p style="color: black;">El rut tiene el siguiente formato: 12345678-9.</p>
        </div>
        <div class="input-container">
          <label style="color: #103ed4;" for="email">Correo electrónico:</label>
          <input type="text" id="email" :maxlength="50" :counter="50" v-model="email" @input="validarEmail" required>
          <p v-if="esValido"></p>
          <p v-else style="color: black;">El correo electrónico debe contener al menos un "@".</p>
        </div>
        <div class="input-container">
          <label style="color: #103ed4;" for="password">Contraseña:</label>
          <input type="password" id="password" :maxlength="50" :counter="50" v-model="password" @input="validarPassword" required >
        </div>

        <v-select style="color: #103ed4;" v-model="sucursal" label="Sucursal" :items="[1, 2, 3]" variant="outlined"
          required></v-select>

        <v-btn block :color="esValido ? '#ee451b' : 'grey'" type="submit" @click="verificarYCrearUsuario"
          :disabled="!(completeName.length > 0 && esPasswordValido && esRutValido && esPasswordValido)">Registrar</v-btn>
        <div>
          <h3 style="color: #103ed4;">¿Ya tienes cuenta?
            <router-link to="login">Iniciar Sesión</router-link>
            <br><br>
          </h3>
        </div>
      </form>
    </div>
  </div>
</template>
  
  <script>
  import API from '@/API.js';
  
  export default {
    data() {
      return {
        completeName: '',
        rut: '',
        email: '',
        password: '',
        sucursal: '',
        esValido: false,
        esRutValido: false,
        esPasswordValido: false
      };
    },
  
    methods: {
            title: 'Error de Registro',
      validarPassword(){
        var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        this.esPasswordValido = regex.test(this.password);
        console.log(this.esPasswordValido)
        return this.esPasswordValido;
      },

      validarEmail() {
      const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      this.esValido = regex.test(this.email);
      return this.esValido;
      },

      login() {
        // Lógica de inicio de sesión
        // console.log('Iniciando sesión...');
      },

      validarRut() {
        const rut = this.rut;
        const partesRUT = rut.split("-");
        if (partesRUT.length !== 2) {
            console.log("RUT inválido - Debe contener un guion");
            this.esRutValido=false;
            return false;
        }

        const numeroRUT = partesRUT[0];
        const digitoVerificador = partesRUT[1];

        if (!/^\d+$/.test(numeroRUT) || (numeroRUT.length !== 8)) {
            console.log("RUT inválido - Parte numérica debe contener solo dígitos");
            this.esRutValido=false;
            return false;
        }
        if (!/^\d$|[kK]$/.test(digitoVerificador)) {
            console.log("RUT inválido - Dígito verificador no válido");
            this.esRutValido=false;
            return false;
        }

        console.log("RUT válido");
        this.esRutValido=true;
        return true;
      },
    },
  };
  </script>
  
  <style setup>
  h1 {
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
    text-align: center;
  }
  
  .registro-container {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .image-container {
    flex: 1;
    padding: 50px;
  }
  
  .image-container img {}
  
  .form-container {
    flex: 1;
    padding-left: 150px;
    padding-right: 150px;
    padding-bottom: 30px;
    padding-top: 10px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  
  h2 {
    margin-top: 0;
    font-weight: bolder;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
    text-align: center;
  }
  
  /* Estilos para los campos de entrada */
  .input-container {
    margin-bottom: 15px;
    text-align: left;
    text-decoration: underline;
    text-decoration-color: #103ed4;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #0d60c0;
    border-radius: 5px;
  }
  
  /* Estilo para el botón de inicio de sesión */
  button {
    background-color: #ee451b;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    text-align: center;
  }
  
  button:hover {
    background-color: #ee451b;
  }
  
  .redirigir {
    display: inline;
  }
  
  body {
    background-color: #c7c7c7;
  }
  </style>
  