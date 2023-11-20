<template>
  <div class="registro-container">
    <div class="image-container">
      <h1 style="color: #ee451b">Bancos<br>Tusunami</h1>
      <img
        src="https://trello.com/1/cards/654d83f9682db5e91c4b4d00/attachments/654ff6e5f6f7c785ecf36ba5/previews/654ff6e6f6f7c785ecf36bbd/download/pngwing.com.png"
        alt="Imagen de fondo" width="510" height="510" />
    </div>
    <div class="form-container">
      <h2 style="color:#103ed4">Crear cuenta</h2>
      <v-btn size="medium">
        Iniciar sesión con <br>google
      </v-btn>
      <br><br>
      <v-btn size="medium">
        Iniciar sesión con <br> facebook
      </v-btn>
      <form @submit.prevent="login">
        <div class="input-container">
          <label style="color:#103ed4" for="username">Nombre Completo:</label>
          <input type="text" id="username" :maxlength="50" :counter="50" @keypress="soloLetras" v-model="completeName"
            required>
        </div>
        <div class="input-container">
          <label style="color:#103ed4" for="rut">Rut:</label>
          <input type="text" id="rut" :maxlength="12" :counter="12" v-model="rut" @input="validarRut" required>
          <p v-if="!esRutValido" style="color: red;">El Rut ingresado no es válido.</p>
          <p style="color: black">El rut tiene el siguiente formato: 12.345.678-9.</p>
        </div>
        <div class="input-container">
          <label style="color:#103ed4" for="text">Correo electrónico:</label>
          <input @input="validarEmail" type="text" id="correo electronico" :maxlength="50" :counter="50" v-model="email"
            required>
          <p v-if="esValido"></p>
          <p v-else style="color: black">El correo electrónico debe contener al menos un "@" y terminar en .com .cl .</p>
        </div>
        <div class="input-container">
          <label style="color:#103ed4" for="password">Contraseña:</label>
          <input type="password" id="password" :maxlength="50" :counter="50" v-model="password" required>
        </div>

        <v-select style="color: #103ed4;" v-model="sucursal" label="Sucursal" :items="[1, 2, 3]" variant="outlined"
          required></v-select>

        <v-btn block :color="esValido ? '#ee451b' : 'grey'" type="submit" @click="verificarYCrearUsuario"
          :disabled="!(completeName.length > 0 && password.length > 0 && esRutValido)">Registrar</v-btn>
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
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      completeName: '',
      rut: '',
      email: '',
      password: '',
      sucursal: '',
      esValido: false,
      esRutValido: true,
    };
  },

  methods: {
    async verificarYCrearUsuario() {
      // Verificar rut y correo
      if (this.validarRut() && this.validarEmail()) {
        await this.crearUsuario();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error de Registro',
          text: 'Rut o correo incorrecto',
        });
        console.log("Error de registro");
      }
    },

    async crearUsuario() {
      const nombre = this.completeName.split(' ');
      const numeroDeUsuarios = await API.getNumeroUsuarios();
      await API.addUsuario({
        "nombres": nombre[0] + " " + nombre[1],
        "apellidoPaterno": nombre[2],
        "apellidoMaterno": nombre[3],
        "email": this.email.toLowerCase(),
        "rut": this.rut,
        "password": this.password,
        "sucursal": this.sucursal,
        "idUsuario": numeroDeUsuarios + 1
      })
        .then((response) => {

          if (response.Respuesta == true) {
            Swal.fire({
              icon: 'success',
              title: 'Registro Exitoso',
            })
            console.log("Registro exitoso")


          } else {

            Swal.fire({
              icon: 'error',
              title: 'Error de Registro',
              text: 'Uno de los campos esta mal ingresado'
            })
            console.log("Error de registro")
          }
        })
    },

    validarEmail() {
  // Expresión regular para verificar la extensión
  const expresionRegular = /\.(com|cl|net)$/;

  // Convertir el correo a minúsculas antes de la validación
  const correoEnMinusculas = this.email.toLowerCase();

  // Verificar si el correo electrónico contiene '@' y si la extensión es válida
  this.esValido = correoEnMinusculas.includes('@') && expresionRegular.test(correoEnMinusculas);
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
  },
};
</script>

<style scoped>
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
