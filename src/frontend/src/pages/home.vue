<!-- Esta pagina es la pagina principal del usuario logeado-->
<!-- Permite interaccionar con las funcionalidades de la app-->
<!-- Otorga al usuario la opcion cambio de sucursal y otras visualizaciones de datos-->

<script setup>
    import { ref,reactive} from 'vue';
    import topPanel from '../components/home/topPanel.vue';
    import leftPanel from '../components/home/leftPanel.vue';
    import mainPanel from '../components/home/mainPanel.vue';

    const cuentaTipo = reactive({
        mostrarCorriente: true,
        mostrarVista: false,
        mostrarAhorro: false,
    });;
    //funcion que recibe los datos del emit y cambia el mainpanel
    const cambiarCuenta = (datos) => {
        console.log(datos);
        if (datos == 1){
            cuentaTipo.mostrarCorriente = true;
            cuentaTipo.mostrarVista = false;
            cuentaTipo.mostrarAhorro = false;
        }
        if (datos == 2){
            cuentaTipo.mostrarCorriente =false;
            cuentaTipo.mostrarVista = true;
            cuentaTipo.mostrarAhorro = false;
        }
        if (datos ==3){
            cuentaTipo.mostrarCorriente = false;
            cuentaTipo.mostrarVista = false;
            cuentaTipo.mostrarAhorro = true;
        }

    };
    //"objetos con la info de cada cuenta"
    const infoCorriente= ref({
        tipo:'Corriente',
        numCuenta:'000054321',
        saldo:'Infinito',
        sucursal:'Curicó'
    });

    const infoVista= ref({
        tipo:'Vista',
        numCuenta:'000000321',
        saldo:'Infinito^Infinito',
        sucursal:'Curicó'
    });
    const infoAhorro=ref({
        tipo:'Ahorro',
        numCuenta:'000000001',
        saldo:'Infinito + 1',
        sucursal:'Curicó'
    });
    //array de las transacciones , una array por cada uno de los tipos
    const transaccionesCorriente = [
    { fecha: '1/09/2019', tipo: 'Deposito', sucursal: 'Islas Caimán', monto: '5.000.000' },
    { fecha: '2/04/2020', tipo: 'Retiro', sucursal: 'Talca', monto: '2.000.000.000' },
    { fecha: '3/09/2021', tipo: 'Deposito', sucursal: 'Santiago', monto: '500.000' },
    { fecha: '4/09/2022', tipo: 'Retiro', sucursal: 'Islas Caimán', monto: '2.000.000' },
    ];

    const transaccionesVista = [
    { fecha: '1/09/2019', tipo: 'Deposito', sucursal: 'Islas Caimán', monto: '5.000' },
    { fecha: '2/04/2020', tipo: 'Retiro', sucursal: 'Talca', monto: '2.000.000' },
    ];

    const transaccionesAhorro = [
    { fecha: '1/09/2019', tipo: 'Deposito', sucursal: 'Islas Caimán', monto: '5.000.000' },
    { fecha: '2/04/2020', tipo: 'Deposito', sucursal: 'Talca', monto: '2.000.000.000' },
    { fecha: '3/09/2021', tipo: 'Deposito', sucursal: 'Santiago', monto: '500.000' },
    { fecha: '4/09/2022', tipo: 'Deposito', sucursal: 'Islas Caimán', monto: '2.000.000' },
    { fecha: '1/09/2019', tipo: 'Deposito', sucursal: 'Islas Caimán', monto: '5.000.000' },
    { fecha: '2/04/2020', tipo: 'Deposito', sucursal: 'Talca', monto: '2.000.000.000' },
    { fecha: '3/09/2021', tipo: 'Deposito', sucursal: 'Santiago', monto: '500.000' },
    { fecha: '4/09/2022', tipo: 'Deposito', sucursal: 'Islas Caimán', monto: '2.000.000' },
    ];

</script>

<template>
    <div class="main">
        <div>
            <topPanel></topPanel>
        </div>
        <div class="contenedor">
            <div class="item">
                <leftPanel @tipo-cuenta="cambiarCuenta"></leftPanel>
            </div>
            <div class="item">
                <mainPanel  v-if="cuentaTipo.mostrarCorriente" :infoCuenta='infoCorriente' :listaTransacciones='transaccionesCorriente'></mainPanel>
                <mainPanel  v-if="cuentaTipo.mostrarVista" :infoCuenta='infoVista' :listaTransacciones='transaccionesVista'></mainPanel>
                <mainPanel v-if="cuentaTipo.mostrarAhorro" :infoCuenta='infoAhorro' :listaTransacciones='transaccionesAhorro'></mainPanel>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background-color: #d52b1e;
}
.contenedor{
    display: flex;
    width: 100%;
    height: 100%;
}
.item{
    flex: 1;
    margin: 0;
}

</style>
