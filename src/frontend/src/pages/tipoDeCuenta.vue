<template>
	<body>

		<v-container class="main">

			<h1>¿Que cuenta deseas contratar?</h1>

			<v-row class="planes justify-center">

				<v-col cols="3" style="min-width: 33%;">
					<v-card class="plan">
						<v-card-title class="titulo">Cuenta Básica</v-card-title>
						<v-card-item class="imagen"><img src="/planbasico.png" alt="Logo"
								style="width: 100%;height: 50%;"></v-card-item>
						<router-link to="/cuentaAhorro">
							<v-btn block rounded="lg" style="background-color:#FF0000 ;">Contratar</v-btn>
						</router-link>
					</v-card>
				</v-col>

				<v-col cols="3" style="min-width: 33%;">
					<v-card class="plan">
						<v-card-title class="titulo">Cuenta Estándar</v-card-title>
						<v-card-item class="imagen"><img src="/plancomun.png" alt="Logo"
								style="width: 100%;height: 50%;"></v-card-item>
						<v-btn block rounded="lg" style="background-color:#964B00;">Contratar</v-btn>
					</v-card>
				</v-col>

				<v-col cols="3" style="min-width: 33%;">
					<v-card class="plan">
						<v-card-title class="titulo">Cuenta Premium</v-card-title>
						<v-card-item class="imagen"><img src="/planpremium.png" alt="Logo"
								style="width: 100%;height: 50%;"></v-card-item>
						<v-btn block rounded="lg" style="background-color:#0000FF;">Contratar</v-btn>
					</v-card>
				</v-col>

			</v-row>

		</v-container>

	</body>
</template>
  
<style scoped>

body {
  background-color: lightblue;
}

.main {
  height: 100%;
  margin: 0;
  padding: 0;
}

h1 {
	color: black;
	font-size: xx-large;
	padding-bottom: 3%;
	text-align: center;
}

.planes {
	text-align: center;
}

.plan {
	background-color: #0139a6;
	border-radius: 10px;
	padding: 10%;
}

.titulo {

	color: white;
	font-size: x-large;
}

.imagen {
  overflow: hidden;
}

.imagen img {
  width: 100%;
  height: 100%;
  border-radius: 10%;
  transition: border-radius 0.3s ease-in-out;
}

.imagen:hover img {
  border-radius: 0;
}



.v-btn {
  color: white;
}

.v-col_hover{
	transition: background-color 0.3s ease-in-out;
	box-shadow: 0px 0px 40px 20px #0ff;
}
</style>