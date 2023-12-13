<!-- Componente designado para contener el formulario de registro del mockup-->
<!-- Debe contener la logica necesaria para redireccionar hacia home si el registro fue exitoso-->
<template>

		<body>
			<v-row class="registro-container">
				<v-col class="image-container">
					<div class="fila" style="color: red; text-align: center; font-weight:800; font-size: 40px ;">Bancos
						<br>Tusunami
					</div>
					<div>
						<h3 style="color:#103ed4">¿Ya tienes cuenta?
							<router-link to="/iniciarSesion">Iniciar Sesión</router-link>
							<br><br>
						</h3>
						<img src="/pinera.png" alt="Logo" style="width: 100%;height: 100%;margin-top: 20px;">
					</div>
				</v-col>

				<v-col class="form-container">
					<h2 style="color:#103ed4; padding-bottom: 10px;">Crear cuenta</h2>

					<form @submit.prevent="login">
						<div class="input-container">
							<label style="color:#103ed4" for="username">Nombre Completo:</label>
							<input type="text" id="username" :maxlength="50" :counter="50" @keypress="soloLetras"
								v-model="completeName" required>
						</div>
						<div class="input-container">
							<label style="color:#103ed4" for="rut">Rut:</label>
							<input type="text" id="rut" :maxlength="10" :counter="10" v-model="rut" @input="validarRut"
								required>
							<p v-if="!esRutValido" style="color: red;">El Rut ingresado no es válido.</p>
							<p style="color: black">El rut tiene el siguiente formato: 12345678-9.</p>
						</div>
						<div class="input-container">
							<label style="color:#103ed4" for="text">Correo electrónico:</label>
							<input @input="validarEmail" type="text" id="correo electronico" :maxlength="50" :counter="50"
								v-model="email" required>
							<p v-if="esValido"></p>
							<p v-else style="color: black">El correo electrónico debe contener al menos un "@" y terminar en
								.com o .cl .</p>
						</div>
						<div class="input-container">
							<label style="color:#103ed4" for="password">Contraseña:</label>
							<input @input="validarPassword" type="password" id="password" :maxlength="10" :counter="10"
								v-model="password" required>
							<p v-if="!contraValida" style="color: red;">La contraseña ingresada no es válida.</p>
							<p style="color: black">La contraseña debe contener minimo 6 caracteres y 1 digito (puede
								contener caracteres especiales)</p>
						</div>

						<v-select style="color: #103ed4;" v-model="sucursal" label="Sucursal" :items="[1, 2, 3]"
							variant="outlined" required></v-select>

						
							<v-btn block :color="esValido ? '#ee451b' : 'grey'" type="submit" @click="verificarYCrearUsuario"
							:disabled="!(completeName.length > 0 && contraValida && esRutValido) ">Registrar</v-btn>
						
						<div>
							<h3 style="color:#103ed4; padding-top: 2%;">¿Ya tienes cuenta?
								<router-link to="login">Iniciar Sesión</router-link>
								<br><br>
							</h3>
						</div>
					</form>
				</v-col>
			</v-row>

		</body>

</template>
	
<script>
import API from '@/API.js';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

const router = useRouter()
const completeName = ref('');
const rut = ref('');
const email = ref('');
const password = ref('');
const sucursal = ref('');
const esValido = ref(false);
const esRutValido = ref(true);
const contraValida = ref(true);

const verificarYCrearUsuario = async () => {
  if (validarRut() && validarEmail()) {
    await crearUsuario();
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error de Registro',
      text: 'Rut o correo incorrecto',
    });
    console.log("Error de registro");
  }
};

const crearUsuario = async () => {
  const nombre = completeName.value.split(' ');
  const numeroDeUsuarios = await API.getNumeroUsuarios();
  const response = await API.addUsuario({
    "nombres": nombre[0] + " " + nombre[1],
    "apellidoPaterno": nombre[2],
    "apellidoMaterno": nombre[3],
    "email": email.value.toLowerCase(),
    "rut": rut.value,
    "password": password.value,
    "sucursal": sucursal.value,
    "idUsuario": numeroDeUsuarios + 1
  });

  if (response.Respuesta == true) {
    Swal.fire({
      icon: 'success',
      title: 'Registro Exitoso',
    });
    console.log("Registro exitoso");
  
    router.push({ path: '/iniciarSesion' });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error de Registro',
      text: 'Cuenta ya registrada',
    });
    console.log("Error de registro");
  }
};

const validarEmail = () => {
  const expresionRegular = /\.(com|cl|net)$/;
  const correoEnMinusculas = email.value.toLowerCase();
  esValido.value = correoEnMinusculas.includes('@') && expresionRegular.test(correoEnMinusculas);
  return esValido.value;
};

const validarRut = () => {
  const rutSinPuntos = rut.value.replace(/\./g, '').replace(/\s/g, '');
  const [rutNumeros, rutDV] = rutSinPuntos.split('-');
  if (!rutNumeros || !rutDV || rutNumeros.length !== 8 || rutDV.length !== 1 || !/^\d*$/.test(rutNumeros) ||
    (!/^\d*$/.test(rutDV) && rutDV.toLowerCase() !== 'k')) {
    esRutValido.value = false;
    return false;
  } else {
    esRutValido.value = true;
    return true;
  }
};

const validarPassword = () => {
  const passwordValue = password.value;
  if (!/^[^\d]*\d+[^\d]*$/.test(passwordValue) || passwordValue.length < 6) {
    contraValida.value = false;
    return false;
  } else {
    contraValida.value = true;
    return true;
  }
};

const dv = (T) => {
  let M = 0, S = 1;
  for (; T; T = Math.floor(T / 10))
    S = (S + T % 10 * (9 - M++ % 6)) % 11;
  return S ? String(S - 1) : 'K';
};


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
			contraValida: true
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
						this.$router.push({ path: '/tipoDeCuenta' })

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

			const expresionRegular = /\.(com|cl|net)$/;

			const correoEnMinusculas = this.email.toLowerCase();


			this.esValido = correoEnMinusculas.includes('@') && expresionRegular.test(correoEnMinusculas);
			return this.esValido;

		},

		validarRut() {
			const rutSinPuntos = this.rut.replace(/\./g, '').replace(/\s/g, '');
			const [rutNumeros, rutDV] = rutSinPuntos.split('-');
			if (!rutNumeros || !rutDV || rutNumeros.length !== 8 || rutDV.length !== 1
				|| !/^\d*$/.test(rutNumeros) ||
				(!/^\d*$/.test(rutDV) && rutDV.toLowerCase() !== 'k')) {
				this.esRutValido = false;
				return false;
			}
			else {
				this.esRutValido = true;
				return true;
			}
		},

		validarPassword() {
			const password = this.password
			if (!/^[^\d]*\d+[^\d]*$/.test(password) || password.length < 6) {
				this.contraValida = false;
				return false;
			}
			else {
				this.contraValida = true;
				return true;
			}
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
	
<style setup>
body {
	background-color: #c7c7c7;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
}

.registro-container {
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 80%;
}

.image-container {
	flex: 1;
	padding: 20px;
	text-align: center;
}

.image-container img {
	margin-top: 20px;
	margin-bottom: 10px;
	padding: 10px;
}

.form-container {
	flex: 1;
	padding: 20px;
	background-color: white;
	border-radius: 30px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h1 {
	font-size: 40px;
	font-weight: 800;
	text-align: center;
	color: #ee451b;
}

h2 {
	margin-top: 0;
	font-size: 30px;
	font-weight: 800;
	text-align: center;
	color: #103ed4;
}

.input-container {
	margin-bottom: 20px;
}

label {
	display: block;
	font-weight: 800;
	color: #103ed4;
}

input[type="text"],
input[type="password"] {
	width: 100%;
	padding: 10px;
	border: none;
	border-bottom: 2px solid #103ed4;
	font-size: 16px;
	color: #103ed4;
}

.redirigir {
	display: inline;
}

</style>
  