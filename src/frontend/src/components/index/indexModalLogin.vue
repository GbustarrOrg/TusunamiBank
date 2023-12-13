<!--Contenido del formulario de login-->
<!-- Debe contener la logica para redireccionar hacia home.vue si existe un login correcto-->

<template>
  
  <div class="contenedor">
    <div class="columna1">
      <div class="fila" style="color: red; text-align: center; font-weight:800; font-size: 40px ;">Bancos <br>Tusunami
      </div>
      <div>
        <img src="../../assets/pinera.png" alt="Logo" style="width: 65%;height: 100%;margin-top: 20px;">
      </div>
    </div>

    <div class="columna2">
      <div style="height: 80vh;background-color: white;border-radius: 30px;">
        <div class="fila"
          style="text-align: center;color:#0f45ab; margin-top: 30px;font-weight: 800;font-size: 30px;">
          Inicia Sesión
        </div>

        <div class="fila">
          <div class="input-container">
            <label for="miCuadroDeTexto" style="color: #0f45ab;font-weight: 800;">RUT:</label>
            <input type="text" id="rut" class="underline-input" name="rut" v-model="rut">
            <p id="mensajeRUTError" style="color: red;">{{mensajeRUTError}}</p>
          </div>
        </div>
        <div class="fila">
          <div class="input-container">
            <label for="password" style="color: #0f45ab;font-weight: 800;">Contraseña</label>
            <input type="password" id="password" class="underline-input" name="password" v-model="password">
            <p id="mensajePasswordError" style="color: red;">{{mensajePasswordError}}</p>
          </div>
        </div>
        <div class="fila">
          <button class="boton-iniciar-sesion" @click="login">Iniciar Sesión</button>
        </div>
        <div class="fila" style="color: #0f45ab;font-weight: 800;">
          <p>¿No tienes una cuenta? <a href="#"><router-link to="/registro">Registrate</router-link></a></p>
        </div>
      </div>
      <div class="floating-alert">
            <v-alert v-for="msg of mensajes"
            closable
            close-label="Close Alert"
            if="showAlert" 
            color="#3b5998"
            
            dismissible @input="showAlert = false"
            >
              {{ msg.content }}
            </v-alert>
          </div>
    </div>
  </div>
</template>

<script>
    import API from '@/API.js';

    export default{
        data () {
        return {
            rut: '',
            password: '',
            flagInicioSesion: true,
            mensajes: [],
            count: 0,
            mensajeRUTError: '',
            mensajePasswordError: '',
            showAlert: true,
            tipoMensajes: {
                success: 'success',
                error: 'error',
            }
        }
    },
    methods: {
        validarFormatoPassword(){
            const passwordRegex = /^(?=.*[0-9])[a-zA-Z0-9]{6,}$/;
            const testPass =passwordRegex.test(this.password);
            // Validar el formato
            if (testPass) {
              console.log("contraseña valida")
              return true;
            } else {
              console.log("contraseña invalida")
              this.mensajePasswordError = "Contraseña invalida"
              setTimeout(()=> {
                this.mensajePasswordError = ""
                }, 2000);
              return false;
            }
        },
        
        validarFormatoRUT(){
            const rutRegex = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
            const testRut = rutRegex.test(this.rut);
            // Validar el formato
            if (testRut) {
              console.log("Rut valido")
              return true;
            } else {
              console.log("Rut invalido")
              this.mensajeRUTError = "RUT invalido"
              setTimeout(()=> {
                this.mensajeRUTError = ""
                }, 2000);
              return false;
            }

        },
        successMessage() {
            this.mensajes.push({ content: '✔️ Inicio de sesión exitoso, redirigiendo...', id: this.count++ });
        },
        failedMessage() {
            this.mensajes.push({ content: '❌ Inicio de sesión fallido', id: this.count++ });
        },
        async login() {
    
            const result = await API.logusuario({
                "rut": this.rut,
                "password": this.password,
            })
            const validarFormatoPassword = this.validarFormatoPassword();
            const validarFormatoRUT = this.validarFormatoRUT();
            if(validarFormatoPassword && validarFormatoRUT && result.resplogin === true){
              this.successMessage();  
              this.$router.push('/home');
            }else{
              this.failedMessage();
              console.log("password: "+this.password);
            }	
     
        },
    }
};
</script>

<style >
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.contenedor {
  display: flex;
  height: 100%;
  background-color: #d9d9d9;
}

.columna1 {
  flex: 1;
  background-color: #d9d9d9;
  padding: 20px;
}

.columna2 {

  flex: 1;
  background-color: #d9d9d9;
  padding: 20px;
}

.fila {
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 10px;
}


.input-container {
  position: relative;
  margin-bottom: 20px;
  width: 50%;
}

.underline-input {
  width: 100%;
  border: none;
  border-bottom: 2px solid #0f45ab;
  padding-bottom: 0px;
  font-size: 16px;
  
}
.boton-iniciar-sesion {
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
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