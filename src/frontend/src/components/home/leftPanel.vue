<script setup>
    import {defineEmits} from 'vue';
    const emit = defineEmits();
    const menuCuenta =(tipo)=>{
        console.log("Cuenta de tipo:",tipo)
        emit('tipo',tipo)
    };
    const tipoCuenta=[
        { id: 1 , cuenta: 'Cuenta Corriente' },
        { id: 2 , cuenta: 'Cuenta Ahorro' },
        { id: 3 , cuenta: 'Cuenta Vista' },
    ];

</script>

<template>
    <div class="primaldiv">
        <card class="contenedor">
            <div>
                <div class="d-flex align-center" style="border-bottom: 2px solid #ffff">
                    <img src="../icons/Pitufo.jpg" class="icono">
                    <v-col>
                        <v-btn size="x-large" variant="text" style="color:#ffff; width:100%">
                            Inicio
                        </v-btn>
                    </v-col>
                </div>
                <div class="d-flex align-center" style="border-bottom: 2px solid #ffff">
                    <img src="../icons/Cuentas.jpg" class="icono">
                    <v-col>
                        <v-menu
                            location="end"
                            open-on-hover
                        >
                        <template v-slot:activator="{ props }">
                            <v-btn
                            class="boton" size="x-large" variant="text" style="color:#ffff ;width:100%"
                            v-bind="props"
                            >
                            Cuentas
                            </v-btn>
                        </template>
                        <v-list
                        style="color: #0039A6;"
                        >
                            <v-list-item
                            v-for="(item, index) in tipoCuenta"
                            :key="index"
                            >
                            <v-btn variant="text" size="x-large" style="width:100%;" @click="menuCuenta(item)">{{ item.cuenta }}</v-btn>
                            </v-list-item>
                        </v-list>
                        </v-menu>
                    </v-col>
                </div>
                <div class="d-flex align-center" style="border-bottom: 2px solid #ffff; width:100%">
                    <img src="../icons/Bob.jpg" class="icono">
                    <v-col>
                        <v-btn size="x-large"  variant="text" style="color:#ffff; width:100%">
                            Retiros
                        </v-btn>
                    </v-col>
                </div>
                <div class="d-flex align-center" style="border-bottom: 2px solid #ffff">
                    <img src="../icons/Deposito.jpg" class="icono">
                    <v-col>
                        <v-btn size="x-large"  variant="text" style="color:#ffff;width:100%">
                            Depositos
                        </v-btn>
                    </v-col>
                </div>
                <div class="d-flex align-center" style="border-bottom: 2px solid #ffff">
                    <img src="../icons/Comision.jpg" class="icono">
                    <v-col>
                        <v-btn size="x-large" variant="text" style="color:#ffff;width:100%">
                            Comisiones
                        </v-btn>
                    </v-col>
                </div>
            </div>
        </card>
    </div> 
</template>

<style>
    .contenedor{
        background-color: #D52B1E;
        height: 100%;
        width: 100%;
    }
    .icono{
        width: 75px;
        height: 75px;
        margin-left: 10px;
        margin-top: 4px;
        border-radius: 50%;
    }
    .primaldiv{
        width: 100%; 
        display: flex; 
        align-items: left;   
    }
</style>