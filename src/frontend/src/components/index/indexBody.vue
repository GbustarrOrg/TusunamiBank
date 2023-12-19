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
                    <v-btn variant="outlined" rounded>Ingresar</v-btn>
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
                        ¿Que es BancoTsunami?
                        </h1>
                    </div>
                </v-layout>
                <v-layout style="margin: 40px;">
                    <v-col>
                        <v-card style="text-align: center" class="elevation-0 transparent">
                            <v-card-tittle class="text-h5 font-weight-thin">
                                Préstamos con tasas de interés bajas y plazos de pago flexibles.
                            </v-card-tittle>
                            <v-card-text>
                                ¿Está cansado de las altas tasas de interés? ¿Quiere un préstamo que se adapte a sus necesidades financieras? Entonces, ¡nuestros préstamos estudiantiles con tasas de interés bajas y plazos de pago flexibles son la solución!

                                Ofrecemos préstamos estudiantiles de hasta $100,000 para cubrir sus matrículas, alojamiento y comidas. Los préstamos tienen tasas de interés iniciales tan bajas como el 3%, y ofrecemos plazos de pago de hasta 10 años.
                            </v-card-text>
                            <v-img   
                                :height="260"
                                aspect-ratio="16/9"
                                src="https://cdn.aarp.net/content/dam/aarp/money/credit_loans_debt/2020/06/1140-percent-sign-interest-rates-falling-esp.jpg"
                                class="d-flex align-center"
                            >
                            </v-img>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card style="text-align: center" class="elevation-0 transparent">
                            <v-card-tittle class="text-h5 font-weight-thin">
                                Servicios bancarios en línea y móviles convenientes.
                            </v-card-tittle>
                            <v-card-text>
                                ¿Quiere realizar sus transacciones bancarias cuando y donde quiera? ¡Nuestro banco ofrece servicios bancarios en línea y móviles convenientes!

                                Acceda a su cuenta desde su computadora o dispositivo móvil.

                                Realice transferencias, pagos y más con solo unos clics.

                                Acceso a su cuenta 24/7

                                Realice transferencias y pagos desde cualquier lugar

                                ¡Mantenga su dinero en movimiento con nuestros servicios bancarios en línea y móviles!
                            </v-card-text>
                            <v-img   
                                :height="260"
                                aspect-ratio="16/9"
                                src="https://static.vecteezy.com/system/resources/previews/003/519/443/non_2x/online-payment-concept-isolated-payment-by-card-and-banking-services-in-mobile-app-people-scene-in-flat-cartoon-design-illustration-for-blogging-website-mobile-app-promotional-materials-vector.jpg"
                                class="d-flex align-center"
                            >
                            </v-img>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card style="text-align: center" class="elevation-0 transparent">
                            <v-card-tittle class="text-h5 font-weight-thin">
                                Tarjetas de crédito con recompensas atractivas.
                            </v-card-tittle>
                            <v-card-text>
                                ¿Quiere ganar dinero extra con sus compras? ¡Nuestras tarjetas de crédito ofrecen recompensas atractivas!

                                Gane puntos por cada dólar que gaste, que puede canjear por efectivo, viajes o productos.

                                Obtenga 2 puntos por cada dólar gastado en restaurantes y tiendas de comestibles.

                                Obtenga 1 punto por cada dólar gastado en otros lugares.

                                ¡Canjee sus puntos por efectivo, viajes o productos que ama!.
                            </v-card-text>
                            <v-img   
                                :height="260"
                                aspect-ratio="16/9"
                                src="https://res.cloudinary.com/compara/image/upload/q_auto,f_auto,c_crop,ar_16:9/v1649946992/cms/new-uploads/mejores-tarjetas-de-credito-chile-16x9-2-62583170a2e7f1.18629649.jpg"
                                class="d-flex align-center"
                            >
                            </v-img>
                        </v-card>
                    </v-col>
                </v-layout>
            </section>
            <!-- Dentro de esta section va el carrusell de imagenes, por ahora solo hay una imagen-->
            <section style="margin-top: 40px; margin-bottom:40px">  
                <v-carousel show-arrows="hover">
                    <v-carousel-item
                        src="https://static.13.cl/7/sites/default/files/images/ocupload/pinerabv1510-2.jpg"
                        cover
                    ></v-carousel-item>

                    <v-carousel-item
                        src="https://bancariachile.cl/wp-content/uploads/2020/07/pin%CC%83era-1200x685.jpg"
                        cover
                    ></v-carousel-item>

                    <v-carousel-item
                        src="https://prensa.presidencia.cl/lfi-content/uploads/2021/03/thumbs/_srq0291_653x431.jpg"
                        cover
                    ></v-carousel-item>
                    <v-carousel-item
                        src="https://www.latercera.com/resizer/y2RuQZjZqLR6G3rzq24AiAkHO9I=/900x600/filters:focal(2907x1317:2917x1307)/cloudfront-us-east-1.images.arcpublishing.com/copesa/M6BSHAE3IFCXRHVH3JJS3C2A2I.jpg"
                        cover
                    ></v-carousel-item>
                </v-carousel>
            </section>

            <section style="margin: 40px;">
                <v-layout class="d-flex justify-center">
                    <div class="d-flex flex-column justify-center align-center" style="text-align: center">
                        <h1 class="text-h4 font-weight-thin mb-4">
                        Nuestro banco Tusunami
                        </h1>
                        <h4 class="subheading">
                        El banco mas confiable de Chile
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