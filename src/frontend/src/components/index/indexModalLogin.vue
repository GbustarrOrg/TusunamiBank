<!--Contenido del formulario de login-->
<!-- Debe contener la logica para redireccionar hacia home.vue si existe un login correcto-->

<template>
  <div >
    <div class="contenedor">
      <div class="columna1">
        <div class="fila" style="color: red; text-align: center; font-weight:800; font-size: 40px ;">Bancos <br>Tusunami
        </div>
        <div>
          <img src="../../assets/pinera.png" alt="Logo" style="width: 100%;height: 100%;margin-top: 20px;">
        </div>
      </div>

      <div class="columna2">
        <div style="height: 80vh;background-color: white;border-radius: 30px;">
          <div class="fila"
            style="text-align: center;color:#0f45ab; margin-top: 30px;font-weight: 800;font-size: 30px;">
            Inicia Sesión
          </div>

          <div class="fila">
            <div class="login-buttons">
              <button @click="iniciarSesionConGoogle" class="login-button google-button" ><i class="pi pi-google" style="color: white"></i>Iniciar Sesión con Google</button>
              <button class="login-button facebook-button"><i class="pi pi-facebook" style="color: white"></i>Iniciar Sesión con Facebook</button>
            </div>
          </div>

          <div class="fila"
            style="text-align: center;color: #0f45ab; margin-top: 30px;font-weight: 800;font-size: 30px;">
            -o-
          </div>
          <div class="fila">
            <div class="input-container">
              <label for="miCuadroDeTexto" style="color: #0f45ab;font-weight: 800;">RUT:</label>
              <input type="text" id="rut" class="underline-input" name="rut">
              <p id="mensajeDeError" style="color: red;">{{mensajeDeError}}</p>
            </div>
          </div>
          <div class="fila">
            <div class="input-container">
              <label for="password" style="color: #0f45ab;font-weight: 800;">Contraseña</label>
              <input type="password" id="password" class="underline-input" name="password">
            </div>
          </div>
          <div class="fila">
            <button class="boton-iniciar-sesion" @click="login">Iniciar Sesión</button>
          </div>
          <div class="fila" style="color: #0f45ab;font-weight: 800;">
            <p>¿No tienes una cuenta? <a href="#">Registrate</a></p>
            <transition-group name="p-message" tag="div">
              <Message v-for="msg of mensajes" :key="msg.id" :severity="msg.severity">{{ msg.content }}</Message>
            </transition-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import API from '@/API.js';
    import Message from 'primevue/message';
    import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

    export default{
        data () {
        return {
            rut: '',
            password: '',
            flagInicioSesion: true,
            mensajes: [],
            count: 0,
            mensajeDeError: ''
        }
    },
    methods: {

        validarFormato(vrut){
            const rutRegex = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
            // Validar el formato
            if (rutRegex.test(vrut)) {
              console.log("valido")
              return true;
            } else {
              console.log("invalido")
              this.mensajeDeError = "RUT invalido"
              setTimeout(()=> {
            // Ocultar el elemento después de 2 segundos
              this.mensajeDeError = ""
              }, 2000);
              return false;
            }
        },
        successMessage() {
            this.mensajes.push({ severity: 'success', content: 'Inicio de sesión exitoso, redirigiendo...', id: this.count++ });
        },
        failedMessage() {
            this.mensajes.push({ severity: 'error', content: 'Inicio de sesión fallido', id: this.count++ });
        },
        async funcion(){
          const texto1=document.getElementById("rut").value;
          const texto2=document.getElementById("password").value;
          console.log("rut:"+texto1);
          console.log("contraseña:"+texto2);
        },
        async login() {
            const rut=document.getElementById("rut").value;
            const password=document.getElementById("password").value;
            
            await API.logusuario({
                "rut": rut,
                "password": password
            })
            .then((result) => {
                if(rut != "" && password != "" && this.validarFormato(rut) && result.resplogin){
                  this.successMessage();
                  this.$router.push('/home');
                }else{
                    this.failedMessage();
                }	
            })
            .catch((err) => {
                console.log(err)
            }); 
     
        },
        async iniciarSesionConGoogle() {
          console.log('Iniciando sesión con Google...');
          const auth = getAuth();
          const provider = new GoogleAuthProvider();
          try {
              const result = await signInWithPopup(auth, provider);
              const user = result.user;
              console.log('Usuario autenticado con Google:', user);
          } catch (error) {
              console.error('Error de autenticación con Google:', error.message);
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

</style>