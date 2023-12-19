<script setup>


</script>

<template>
    <v-app style="height: auto;">
        <v-toolbar>
            <v-toolbar-side-icon><img src="../icons/logo.png" alt="logo.png" style="width:70px; height: 55px;"></v-toolbar-side-icon>
            <v-toolbar-title><strong>Banco Tusunami</strong></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-col style="height:100%">
                    <v-btn variant="outlined" rounded>Abre Tu Cuenta</v-btn>
                </v-col>
                <v-col style="height:100%">
                    <v-btn variant="outlined" rounded><router-link to="login">Ingresar</router-link></v-btn>
                </v-col>
                <v-col></v-col>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <section>
                <v-img   
                    :height="500"
                    aspect-ratio="16/9"
                    cover
                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                    class="d-flex align-center"
                >
                    <v-layout class="d-flex justify-center">
                        <div class="d-flex flex-column fill-height justify-center align-center text-white ">
                            <h1 class="text-h4 font-weight-thin mb-4 font-weight-bold">
                              Texto Bienvenida
                            </h1>
                            <h4 class="subheading font-weight-bold">
                              Subtexto de la bienvenida
                            </h4>
                        </div>
                    </v-layout>
                </v-img>
            </section>
            <section style="margin: 40px;">
                <v-layout class="d-flex justify-center">
                    <div class="d-flex flex-column justify-center align-center" style="text-align: center">
                        <h1 class="text-h4 font-weight-thin mb-4">
                        Texto Acerca del Banco
                        </h1>
                        <h4 class="subheading">
                        Subtexto acerca del banco.
                        </h4>
                    </div>
                </v-layout>
                <v-layout style="margin: 40px;">
                    <v-col>
                        <v-card style="text-align: center" class="elevation-0 transparent">
                            <v-card-tittle class="text-h5 font-weight-thin">
                                Titulo 1
                            </v-card-tittle>
                            <v-card-text>
                                Lorem ipsum dolor sit amet. Est dolores accusamus ut quidem temporibus aut rerum corrupti ut voluptas aspernatur et voluptatem dolore. Rem laudantium Quis ut quam minus ut consequatur iure aut molestiae fugit.
                            </v-card-text>
                            <v-img   
                                :height="260"
                                aspect-ratio="16/9"
                                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                                class="d-flex align-center"
                            >
                            </v-img>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card style="text-align: center" class="elevation-0 transparent">
                            <v-card-tittle class="text-h5 font-weight-thin">
                                Titulo 2
                            </v-card-tittle>
                            <v-card-text>
                                Lorem ipsum dolor sit amet. Est dolores accusamus ut quidem temporibus aut rerum corrupti ut voluptas aspernatur et voluptatem dolore. Rem laudantium Quis ut quam minus ut consequatur iure aut molestiae fugit.
                            </v-card-text>
                            <v-img   
                                :height="260"
                                aspect-ratio="16/9"
                                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                                class="d-flex align-center"
                            >
                            </v-img>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card style="text-align: center" class="elevation-0 transparent">
                            <v-card-tittle class="text-h5 font-weight-thin">
                                Titulo 3
                            </v-card-tittle>
                            <v-card-text>
                                Lorem ipsum dolor sit amet. Est dolores accusamus ut quidem temporibus aut rerum corrupti ut voluptas aspernatur et voluptatem dolore. Rem laudantium Quis ut quam minus ut consequatur iure aut molestiae fugit.
                            </v-card-text>
                            <v-img   
                                :height="260"
                                aspect-ratio="16/9"
                                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                                class="d-flex align-center"
                            >
                            </v-img>
                        </v-card>
                    </v-col>
                </v-layout>
            </section>
            <!-- Dentro de esta section va el carrusell de imagenes, por ahora solo hay una imagen-->
            <section style="margin-top: 40px; margin-bottom:40px">  
                <v-img   
                    :height="500"
                    aspect-ratio="16/9"
                    cover
                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                    class="d-flex align-center"
                >
                    <v-layout class="d-flex justify-center">
                        <div class="d-flex flex-column fill-height justify-center align-center text-white ">
                            <h1 class="text-h4 font-weight-thin mb-4 font-weight-bold">
                              Aqui iria va el carrusel de imagenes
                            </h1>
                            <h4 class="subheading font-weight-bold">
                              Subtexto del carrusel
                            </h4>
                        </div>
                    </v-layout>
                </v-img>
            </section>

            <section style="margin: 40px;">
                <v-layout class="d-flex justify-center">
                    <div class="d-flex flex-column justify-center align-center" style="text-align: center">
                        <h1 class="text-h4 font-weight-thin mb-4">
                        Texto Acerca de las cuentas del Banco
                        </h1>
                        <h4 class="subheading">
                        Subtexto acerca de las cuentas del Banco.
                        </h4>
                    </div>
                </v-layout>
                <v-layout style="margin: 40px;">
                    <v-col>
                        <v-card style="text-align: center" class="elevation-0 transparent">
                            <v-card-tittle class="text-h5 font-weight-thin">
                                Cuenta Vista
                            </v-card-tittle>
                            <v-card-text>
                                Lorem ipsum dolor sit amet. Est dolores accusamus ut quidem temporibus aut rerum corrupti ut voluptas aspernatur et voluptatem dolore. Rem laudantium Quis ut quam minus ut consequatur iure aut molestiae fugit.
                            </v-card-text>
                            <v-img   
                                :height="260"
                                aspect-ratio="16/9"
                                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                                class="d-flex align-center"
                            >
                            </v-img>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card style="text-align: center" class="elevation-0 transparent">
                            <v-card-tittle class="text-h5 font-weight-thin">
                                Cuenta Ahorro
                            </v-card-tittle>
                            <v-card-text>
                                Lorem ipsum dolor sit amet. Est dolores accusamus ut quidem temporibus aut rerum corrupti ut voluptas aspernatur et voluptatem dolore. Rem laudantium Quis ut quam minus ut consequatur iure aut molestiae fugit.
                            </v-card-text>
                            <v-img   
                                :height="260"
                                aspect-ratio="16/9"
                                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                                class="d-flex align-center"
                            >
                            </v-img>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card style="text-align: center" class="elevation-0 transparent">
                            <v-card-tittle class="text-h5 font-weight-thin">
                                Cuenta Corriente
                            </v-card-tittle>
                            <v-card-text>
                                Lorem ipsum dolor sit amet. Est dolores accusamus ut quidem temporibus aut rerum corrupti ut voluptas aspernatur et voluptatem dolore. Rem laudantium Quis ut quam minus ut consequatur iure aut molestiae fugit.
                            </v-card-text>
                            <v-img   
                                :height="260"
                                aspect-ratio="16/9"
                                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                                class="d-flex align-center"
                            >
                            </v-img>
                        </v-card>
                    </v-col>
                </v-layout>
            </section>
            <v-footer class="bg-teal" style="width: 100%;">
                <div class="px-4 py-2 text-center w-100">
                  {{ new Date().getFullYear() }} — <strong>Tusunami Group</strong>
                </div>
            </v-footer>
        </v-content>
    </v-app>
</template>