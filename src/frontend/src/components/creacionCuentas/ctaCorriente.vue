<template>
  <div class="pagina">

    <v-app style="background-color: #d9d9d9;">
      <v-container class="container" >
        <v-row>
          <v-col>
            <v-card class="square-card">
              <div style="display: flex; flex-direction: column;">
                <h1 class="titulo">Crear Cuenta Corriente</h1>
                <div style="display: flex; ">
                  <img src="https://www.laizquierdadiario.cl/IMG/arton125228.jpg?1551878991" alt="Imagen de fondo"
                    width="800" height="510" style="margin-top: 27px;" />
                  <h2>
                    ¡En nuestro banco, encontrarás un tesoro de beneficios que harán que administrar tu dinero sea más
                    fácil que encontrar una moneda de $10 en tus jeans! Nuestra cuenta corriente te ofrece acceso rápido
                    y sencillo a tus fondos para que puedas realizar tus transacciones diarias sin complicaciones.
                    ¡Presiona CONTRATAR y únete a la diversión de tener tu cuenta corriente con nosotros, donde tus
                    finanzas estarán en las mejores manos y no te preocupes, ¡tu plata estará a salvo con nosotros!
                  </h2>
                </div>
                <div class="abajo">
                  <v-select label="Sucursal" :items="[
                    'Sucursal contigo aprendo',
                    'Sucursal sin plata',
                    'Sucursal sin tinta'
                  ]">
                  </v-select>
                  <v-btn class="botonContratar" @click="redireccionarAHome">Contratar</v-btn>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
  <footer class="footer">
    <div class="brand">
      <p>Marca Registrada. &reg;</p>
    </div>
  </footer>


</template>

<script>
export default {
  methods: {
    redireccionarAHome() {
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
.pagina {
  width: 100%;
}

.titulo {
  text-align: center;
  font-size: 50px;
  color: #0039A6;
}

.square-card {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  text-align: center;
}

.abajo {
  display: flex;
  justify-content: space-between;
}

.botonContratar {
  margin-left: 1rem;
  margin-right: 2rem;
  margin-top: 10px;
  background-color: red;
  border-radius: 10px;
  color: #ffffff;
}

h2 {
  padding: 1rem;
}
.footer {
  background-color: #f2f2f2;
  width: 100%;
  position: absolute;
  bottom: 0;
}

.brand {
  background-color: #0039A6; /* Azul */
  color: white;
  text-align: center;
  padding: 10px 0;
}
</style>
