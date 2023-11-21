<script setup>

/* const registro = async () => {
  console.log('Yendo al registro')
}
const iniciarSesion = async () => {
  console.log('Yendo al inicio de sesión')
} */
</script>

<template>
  <v-app style="height: auto">
    <v-toolbar class="black">
      <img src="../icons/logo.png" alt="tusunami.png" style="height: 50px; width: 68px" />
      <div style="font-weight: bold; font-size: 28px">Banco Tusunami</div>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="registro" variant="tonal" to="/registro" color="black">Registrarse</v-btn>
        <v-btn class="iniciarSesion" variant="tonal" to="/iniciarSesion" color="black">Iniciar Sesión</v-btn>

      </v-toolbar-items>
    </v-toolbar>
      <section>
        <v-parallax
          src="https://www.watsaysurfschool.com/wp-content/uploads/2021/01/como-se-forman-las-olas-1260x630.jpg"
          height="600"
          class="d-flex align-center"
        >
          <v-container class="d-flex justify-center">
            <div style="text-align: center; color: white">
              <h1 class="white--text mb-2 display-1 font-weight-bold" style="font-size: 48px">
                El mejor Banco del Mundo
              </h1>
              <div class="white--text subheading mb-3 font-weight-bold" style="font-size: 20px">
                Danos tu dinero y tus contraseñas, tu confia
              </div>
              <v-btn class="registro" variant="tonal" to="/registro" color="white ">Unirse</v-btn>
            </div>
          </v-container>
        </v-parallax>
      </section>
      <section class="my-5">
        <div>
          <div>
            <div style="text-align: center">
              <h2>¿Ya tienes cuenta?</h2>
              <span class="subheading"> SUBE A REGISTRARTE </span>
            </div>
          </div>
          <div>
            <v-container>
              <v-layout>
                <v-col>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div style="text-align: center">Seguridad y Protección</div>
                    </v-card-title>
                    <v-card-text>
                      Tu seguridad es nuestra principal preocupación. Utilizamos las tecnologías 
                      más avanzadas para proteger tu información financiera y personal. Nuestros 
                      sistemas de seguridad están diseñados para garantizar que tus transacciones 
                      sean seguras y tus datos estén protegidos en todo momento. Puedes confiar en 
                      nuestro gran general Piñera
                    </v-card-text>
                    <v-parallax
                    src="https://media.biobiochile.cl/wp-content/uploads/2018/06/bajos-de-mena-puente-alto-750x400.jpg"
                    height="600"
                    class="d-flex align-center"
                    >
                  </v-parallax>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div div style="text-align: center">Facilidad de Uso</div>
                    </v-card-title>
                    <v-card-text>
                      Simplificamos la banca para ti. Nuestra plataforma en línea y nuestra aplicación 
                      móvil ofrecen una interfaz intuitiva y fácil de usar, permitiéndote acceder a tus 
                      cuentas, realizar transferencias y gestionar tus finanzas con facilidad. 
                      Ahorra tiempo y energía con nuestras soluciones bancarias convenientes.
                    </v-card-text>
                    <v-parallax
                    src="https://medelhi.files.wordpress.com/2010/01/4977g_pinera.jpg"
                    height="600"
                    class="d-flex align-center"
                    >
                  </v-parallax>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div div style="text-align: center">Innovación Continua</div>
                    </v-card-title>
                    <v-card-text>
                      Nos esforzamos por mantenerte a la vanguardia de la innovación financiera. 
                      Constantemente actualizamos nuestras plataformas y servicios para ofrecerte lo 
                      último en tecnología bancaria. Al unirte a nosotros, te beneficiarás de las últimas 
                      tendencias y herramientas que hacen que gestionar tus finanzas sea más eficiente y 
                      emocionante.
                    </v-card-text>
                    <v-parallax
                    src="https://static.theclinic.cl/media/2019/07/pi%C3%B1era-lentes-a1.jpg"
                    height="600"
                    class="d-flex align-center"
                    >
                  </v-parallax>
                  </v-card>
                </v-col>
              </v-layout>
            </v-container>
          </div>
        </div>
      </section>





      <section style="background-color: #D9D9D9 ;">
        <v-carousel hide-delimiters cycle interval="2000" show-arrows>
          <template v-slot:prev="{ props }">
            <v-btn
              variant="elevated"
              color="white"
              @click="props.onClick"
              :rounded="true"
              >
              <i class="pi pi-chevron-left"></i>
            </v-btn>
          </template>

          <template v-slot:next="{ props }">
            <v-btn
              variant="elevated"
              color="white"
              @click="props.onClick"
              :rounded="true"
              >
              <i class="pi pi-chevron-right"></i>
            </v-btn>
          </template>
          <v-carousel-item>
            <img class="carousel-image"
              src="https://cooperativa.cl/noticias/site/artic/20190829/imag/foto_0000002920190829085935.jpg"
              alt="Imagen en el carousel" />
          </v-carousel-item>

          <v-carousel-item>
            <img class="carousel-image"
              src="https://m.cooperativa.cl/noticias/site/artic/20180914/imag/foto_0000001120180914010035.jpg"
              alt="Imagen en el carousel" />
          </v-carousel-item>

          <v-carousel-item>
            <img class="carousel-image"
              src="https://www.laizquierdadiario.cl/local/cache-vignettes/L705xH518/arton184372-b4114.jpg?1700214165D"
              alt="Imagen en el carousel" />
          </v-carousel-item>

        </v-carousel>
      </section>

      <section>
        <v-container>
          <v-layout class="my-5">
            <div class="d-flex justify-center">
              <div class="d-flex justify-center">
                <v-col cols="4" style="margin-left: 100px;">
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title>
                      <div class="headline" style="text-align: center;">Giro Cajero automático</div>
                    </v-card-title>
                    <v-card-text style="text-align: center;">
                      Sin comisiones los primeros 4 giros <br> Retiros adicionales comisión $400
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="4" style="margin-left: 100px;">
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title>
                      <div class="headline" style="text-align: center;">Cuenta de Ahorros</div>
                    </v-card-title>
                    <v-card-text style="text-align: center;">
                      Depósito inicial <br>
                      $100.000
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="4" style="margin-left: 100px;">
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title>
                      <div class="headline" style="text-align: center;">Sin límite diario</div>
                    </v-card-title>
                    <v-card-text style="text-align: center;">
                      Límite cuenta vista <br>
                      Saldo máximo $2.500.000
                    </v-card-text>
                  </v-card>
                </v-col>
              </div>
            </div>
          </v-layout>
        </v-container>
      </section>

      <section>
        <v-container>
          <div>
            <div class="d-flex justify-center">
              <img src="@/assets/banco.png" style="height: 200px; text-align:center">
            </div>
          </div>
        </v-container>
      </section>


      <v-footer class="d-flex justify-center my-5">
        <div>
          Acerca de nuestro salvador <a class="white--text"
            href="https://es.wikipedia.org/wiki/Sebasti%C3%A1n_Pi%C3%B1era" target="_blank" style="color:#0039A6">
            Sebastian Piñera</a>
        </div>
      </v-footer>

  </v-app>
</template>

<style scoped>
.carousel-image {
  width: 50%;
  height: 100%;
  margin-left: 25%;
}
</style>
