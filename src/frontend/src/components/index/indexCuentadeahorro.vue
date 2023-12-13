<template>
    <div class="pagina">
      <v-app>
        <h1 class="titulo">Cuenta de Ahorro</h1>
        <v-container class="container">
          <v-row>
            <v-col>
              <v-card class="square-card">
                <div style="display: flex; flex-direction: column;">
  
                  <div style="display: flex">
                    <img src="https://i.ytimg.com/vi/_WqiodYeykI/maxresdefault.jpg" alt="Imagen de fondo"
                      width="600" height="510" />
                    <h2>
                      ¡Hola! ¿Te gustaría abrir una cuenta de Ahorros? Es súper fácil: solo necesitas hacer un depósito inicial
                      de $100.000 pesos. Una vez creada, puedes hacer depósitos sin límite , ¡sí, sin límite! Pero ten en
                      cuenta que los retiros solo pueden realizarse si el saldo está por encima de $50.000 pesos. Si un retiro
                      baja el saldo por debajo de ese monto, la cuenta se vuelve inactiva hasta que superen los $100.000 pesos
                      nuevamente. No te preocupes, ¡no podrás retirar más de lo que tienes!
                    </h2>
                  </div>
                  <div class="abajo">
                    <h3>Ingrese el depósito inicial</h3>
  
                    
  
                    <v-text-field
                      label="Depósito inicial"
                      v-model="depositoInicial"
                      :rules="[rules.required, rules.numeric]"
                    ></v-text-field>
                    
                    <h3>Escoja su sucursal</h3>
                    <v-select label="Sucursal" :items="[
                          'Sucursal Talca',
                          'Sucursal Paris',
                          'Sucursal Londres'
                      ]" v-model="sucursalSeleccionada"></v-select>
  
                    <v-btn class="botonContratar" :disabled="!sucursalSeleccionada || !depositoInicial">Contratar</v-btn>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-app>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sucursalSeleccionada: null,
        depositoInicial: null,
        rules: {
          required: (value) => !!value || 'Este campo es requerido',
          numeric: (value) => /^\d+(\.\d+)?$/.test(value) || 'Ingrese solo números',
        },
      };
    },
  };
  </script>
<style scoped>
.pagina {
    width: 100%;
}

.titulo {
    text-align: center;
}

.square-card {
    width: 1000px;
    justify-content: space-between;
    padding: 1rem;
    text-align: center;
}

.abajo {
  display: block;
  text-align: left;
  align-items: left; /* Alinea los elementos en el centro horizontalmente */
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