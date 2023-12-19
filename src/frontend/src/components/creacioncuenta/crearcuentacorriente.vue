<template>
  <div class="creacion">
    <v-card title="" text="" variant="tonal" style="width: 90; border-radius: 20px">
      <table>
        <tr style="width: 100%">
          <td style="width: 50vw">
            <h1 style="text-align: justify; padding: 5%; color: #0039A6;">Cuenta Corriente</h1>
            <h4 style="text-align: justify; padding: 5%; color: #0039A6;">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quis repellat ipsa
              minima repudiandae itaque quam totam vel veniam excepturi, maiores delectus eum ex
              consequatur, perspiciatis dolorem autem eveniet distinctio?
            </h4>

            <v-text-field
              v-model="message"
              clearable
              label="Rut para confirmar"
              type="text"
              variant="outlined"
              style="padding-left: 5%;"
            >
              <template v-slot:append-inner>
                <v-fade-transition leave-absolute>
                  <v-progress-circular
                    v-if="loading"
                    color="info"
                    indeterminate
                    size="24"
                  ></v-progress-circular>
                </v-fade-transition>
              </template>

              <template v-slot:append> </template>
            </v-text-field>
            <p style="text-align: justify; padding: 5%">
              El rut debe tener el siguiente formato: 12345678-9.
            </p>

            <v-btn color="red" style="margin-left: 5%">Contratar</v-btn>
          </td>
          <td style="width: 50vw">
            <img style="margin-top: 10px;"
              src="https://www.elquintopoder.cl/wp-content/uploads/2012/08/fotos-de-pi%C3%B1era-trucadas-www.detodomucho.com-online.jpg"
            />
          </td>
        </tr>
      </table>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'creacioncuenta',
  components: {},
  props: [],
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>

<style scoped>
.creacion {
  background-color: #f5f5f5;
  color: black;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
