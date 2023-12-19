<!-- Componente designado para contener el formulario de registro del mockup-->
<!-- Debe contener la logica necesaria para redireccionar hacia home si el registro fue exitoso-->
<template>
  <div class="registro-container">
    <div class="columnaregistro">
        <div class="columna" style="color: red; text-align: center; font-weight:800; font-size: 40px ;">Bancos <br>Tusunami
        </div>
        <div class="columna">
          <img src="../../assets/pinera.png" alt="Logo" style="width: 100%;height: 100%;">
        </div>
    </div>
    <div class="form-container">
      <h2 style="color:#103ed4">Crear cuenta</h2>
      
      <form @submit.prevent="login">
        <div class="input-container">
          <label style="color:#103ed4" for="username">Nombre Completo:</label>
          <input type="text" id="username" :maxlength="50" :counter="50" @keypress="soloLetras" v-model="completeName"
            required>
        </div>
        <div class="input-container">
          <label style="color:#103ed4" for="rut">RUT:</label>
          <input type="text" id="rut" :maxlength="12" :counter="12" v-model="rut" @input="validarRut" required>
          <p v-if="!esRutValido" style="color: red;">El Rut ingresado no es válido.</p>
          <p style="color: rgb(0, 0, 0)">El rut tiene el siguiente formato: 12345678-9.</p>
        </div>
        <div class="input-container">
          <label style="color:#103ed4" for="text">Correo electrónico:</label>
          <input type="text" id="correo electronico" :maxlength="50" :counter="50" v-model="email" @input="validarEmail"
            required>
            <p v-if="!esValido" style="color: red;">El Correo ingresado no es válido.</p>
        </div>
        <div class="input-container">
          <label style="color:#103ed4" for="password">Contraseña:</label>
          <input type="password" id="password" :maxlength="50" :counter="50" v-model="password" required @input="validarPassword">
          <p v-if="!esPasswordValido" style="color: red;">La contraseña ingresada no es valida.</p>
        </div>

        <v-select style="color: #103ed4;" v-model="sucursal" label="Sucursal" :items="[1, 2, 3]" variant="outlined"
          required></v-select>

        <v-btn block :color="esValido ? '#ee451b' : 'grey'" type="submit" @click="verificarYCrearUsuario"
          :disabled="!(completeName.length > 0 && esValido && esRutValido && esPasswordValido)">Registrar</v-btn>
        <div>
          <h3 style="color:#103ed4">¿Ya tienes cuenta?
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

    validarEmail() {
      this.esValido = this.email.includes('@');
      return this.esValido;
    },

    validarRut() {
      const rutSinPuntos = this.rut.replace(/\./g, '');
      const [rutNumeros, rutDV] = rutSinPuntos.split('-');
      this.esRutValido = true//this.dv(rutNumeros) === rutDV;
      return true;
    },

    dv(T) {
      let M = 0, S = 1;
      for (; T; T = Math.floor(T / 10))
        S = (S + T % 10 * (9 - M++ % 6)) % 11;
      return S ? String(S - 1) : 'K';
    },

    soloLetras(event) {
      const pattern = /^[a-zA-Z\s]+$/; // Permitir solo letras y espacios
      if (!pattern.test(event.key)) {
        event.preventDefault();
      }
    },

    login() {
      // Lógica de inicio de sesión
      // console.log('Iniciando sesión...');
    },
};
</script>

<style setup>

.registro-container {
  display: inline-block;
  width: 1207px;
  background-color: #d9d9d9;
}
.columnaregistro {
  border-radius: 555px;
  background-color: #d9d9d9;
  display: inline-block;
  
}

.image-container {
  flex: 1;
  padding:0;
}

.form-container {

  display: inline-block;
  padding-left: 20px;
  padding-right:20px;
  padding-top: 20px;
  background-color: #ffffff;
  border-radius: 25px;
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
  width: 420px;
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
  box-sizing: border-box;
  background-color: #d9d9d9;
}
.columna{
width: 550px;
background-color: #d9d9d9;
}
</style>
