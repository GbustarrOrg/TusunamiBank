<template>
  <div class="pagina">
    
    <v-app>
      <v-container class="container">
        <v-row>
          <v-col>
            <v-card class="square-card">
              <div style="display: flex; flex-direction: column;">
                <h1 class="titulo">Cuenta Corriente</h1>
                <div style="display: flex">
                  <img
                    src="https://www.laizquierdadiario.cl/IMG/arton125228.jpg?1551878991"
                    alt="Imagen de fondo"
                    width="800"
                    height="510"
                  />
                  <h2>
                    En nuestro banco ofrece una variedad de beneficios que hacen que sea una
                    elección conveniente y segura para gestionar tus finanzas. Una cuenta corriente
                    proporciona acceso fácil y rápido a tus fondos, permitiéndote realizar
                    transacciones cotidianas como pagos de facturas, transferencias y compras con
                    tarjeta de débito. Solo debes presionar CONTRATAR, podras acceder a tu nueva
                    cuenta corriente y tu plata sera nuestra.
                  </h2>
                </div>
                <div class="abajo">
                  <v-select
                    label="Sucursal"
                    :items="[
                      'Sucursal contigo aprendo',
                      'Sucursal sin plata',
                      'Sucursal sin tinta'
                    ]"
                  >
                  </v-select>
                  <v-btn class="botonContratar">Contratar</v-btn>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script></script>

<style scoped>
.pagina {
  width: 100%;
}
.titulo {
  text-align: center;
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
}

h2 {
  padding: 1rem;
}
</style>
