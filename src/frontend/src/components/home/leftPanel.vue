<script setup>
    import {defineEmits} from 'vue';
    const cuentas= [
        { id: 1 , text: 'Cuenta Corriente' },
        { id: 2 , text: 'Cuenta Vista' },
        { id: 3 , text: 'Cuenta de Ahorro' },
    ];
    const emit = defineEmits();
    const menuClick = (item) =>{
            // Implementa la lógica para manejar la acción del botón aquí
            // Por ejemplo, puedes mostrar un diálogo o realizar una acción específica
            if (item.id == 1) {
                console.log("Cuenta Corriente")
                emit('tipo-cuenta',1)
            }
            if (item.id == 2) {
                console.log("Cuenta Vista")
                emit('tipo-cuenta',2)
            }
            if (item.id == 3) {
                console.log("Cuenta de Ahorro")
                emit('tipo-cuenta',3)
            }
        };
</script>

<template>
    <v-app>
    <div class="primaldiv">
        <div class="contenedor">
            <div>
                <div class="d-flex align-center">
                    <img src="../icons/pitufo.jpg" class="icono">
                    <v-col>
                    <v-btn class="boton" variant="plain" size="x-large"> Inicio</v-btn>
                    </v-col>
                </div>
                <hr class="linea">
                
                <div class="d-flex align-center">
                    <img src="../icons/Cuentas.jpg" class="icono">
                    <v-col class="d-flex justify-center">
                    <v-menu location="right">
                        <template v-slot:activator="{ props }">
                          <v-btn v-bind="props" variant="plain" class="boton" size="x-large">
                            Cuentas
                          </v-btn>
                        </template>
                  
                        <v-list>
                          <v-list-item
                            v-for="(item, index) in cuentas"
                            :key="index"
                          >
                                <v-btn variant="text" size="large" style="width:100%;" @click="menuClick(item)">
                                    {{ item.text }}
                                </v-btn>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-col>
                </div>
                <hr class="linea">
                <div class="d-flex align-center">
                    <img src="../icons/Bob.jpg" class="icono">
                    <v-col>
                        <v-btn class="boton" variant="plain" size="x-large">Retiros</v-btn>
                    </v-col>
                </div>
                <hr class="linea">
                <div class="d-flex align-center">
                    <img src="../icons/Deposito.jpg" class="icono">
                    <v-col>
                        <v-btn class="boton" variant="plain" size="x-large">Depositos</v-btn>
                    </v-col>
                </div>
                <hr class="linea">
                <div class="d-flex align-center">
                    <img src="../icons/Comision.jpg" class="icono">
                    <v-col>
                        <v-btn class="boton" variant="plain" size="x-large">Comisiones</v-btn>
                    </v-col>
                </div>
                <hr class="linea">
                
            
            </div>
        </div>
    </div>
    </v-app> 
</template>

<style>

    .boton{
        color:#ffffff;
        background-color: transparent;
        border-color: transparent;
        width: 100%;
    }

    .contenedor{
        background-color: #D52B1E;
        height: 100%;
        width: 100%;
    }
    .icono{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    .primaldiv{
        width: 100%; 
        height: 100vh;
        display: flex; 
        align-items: left;   
    }
    .linea{
        width: 100%;
    }
</style>