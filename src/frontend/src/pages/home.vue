<!-- Esta pagina es la pagina principal del usuario logeado-->
<!-- Permite interaccionar con las funcionalidades de la app-->
<!-- Otorga al usuario la opcion cambio de sucursal y otras visualizaciones de datos-->

<script setup>
    import topPanel from '../components/home/topPanel.vue';
    import leftPanel from '../components/home/leftPanel.vue';
    import mainPanel from '../components/home/mainPanel.vue';
    import {ref,reactive} from 'vue';

    const tipoCuentaN = reactive({
        tipo:1,
    });

    const cambioCuenta = (tipoCuenta) => {
        console.log(tipoCuenta);
        tipoCuentaN.tipo = tipoCuenta.id;
        console.log(tipoCuentaN.tipo);
    };

     //lista con "transacciones de cuenta corriente, estas se mostraran en el scroll, deberian ser transacciones desde la bd"
    const lt_Corriente = [
    { fecha: '1/09/2019', tipo: 'Deposito', sucursal: 'Islas Caimán', monto: '5.000.000' },
    { fecha: '2/04/2020', tipo: 'Retiro', sucursal: 'Talca', monto: '2.000.000.000' },
    { fecha: '3/09/2021', tipo: 'Deposito', sucursal: 'Santiago', monto: '500.000' },
    { fecha: '4/09/2022', tipo: 'Retiro', sucursal: 'Islas Caimán', monto: '2.000.000' },
    { fecha: '1/09/2019', tipo: 'Deposito', sucursal: 'Islas Caimán', monto: '5.000.000' },
    { fecha: '2/04/2020', tipo: 'Retiro', sucursal: 'Talca', monto: '2.000.000.000' },
    { fecha: '3/09/2021', tipo: 'Deposito', sucursal: 'Santiago', monto: '500.000' },
    { fecha: '4/09/2022', tipo: 'Retiro', sucursal: 'Islas Caimán', monto: '2.000.000' },
    { fecha: '1/09/2019', tipo: 'Deposito', sucursal: 'Islas Caimán', monto: '5.000.000' },
    { fecha: '2/04/2020', tipo: 'Retiro', sucursal: 'Talca', monto: '2.000.000.000' },
    { fecha: '3/09/2021', tipo: 'Deposito', sucursal: 'Santiago', monto: '500.000' },
    { fecha: '4/09/2022', tipo: 'Retiro', sucursal: 'Islas Caimán', monto: '2.000.000' },
    
    ];
    //informacion de la cuenta corriente, se actualizan en la card
    const iCorriente={
        tipo:'Corriente',
        numCuenta:'000000001',
        saldo:'Infinito',
        sucursal:'Curicó'
    };
    //lista con "transacciones de cuenta ahorro, estas se mostraran en el scroll, deberian ser transacciones desde la bd"
    const lt_Ahorro = [
    { fecha: '1/09/2019', tipo: 'Deposito', sucursal: 'Islas Caimán', monto: '5.000.000' },
    ];
    //informacion de la cuenta ahorro, se actualizan en la card
    const iAhorro={
        tipo:'Ahorro',
        numCuenta:'000000151',
        saldo:'Poquito',
        sucursal:'NY'
    };
    //lista con "transacciones de cuenta vista, estas se mostraran en el scroll, deberian ser transacciones desde la bd"
    const lt_Vista = [
    { fecha: '1/09/2019', tipo: 'Deposito', sucursal: 'Islas Caimán', monto: '5.000.000' },
    { fecha: '16/12/2023', tipo: 'Retiro', sucursal: 'Islas Caimán', monto: '4.000.000' },
    ];
    //informacion de la cuenta vista, se actualizan en la card
    const iVista={
        tipo:'Vista',
        numCuenta:'000000400',
        saldo:'1000000000000000000000',
        sucursal:'Talca'
    };

</script>

<template>
    <div class="main">
        <Row>
            <topPanel></topPanel>
        </Row>
        <Row class="contenedor">
            <Column class="item">
                <leftPanel @tipo="cambioCuenta"></leftPanel>
            </Column>
            <Column class="item">
                <mainPanel v-if="tipoCuentaN.tipo === 1" :listaTransacciones="lt_Corriente" :infoCuenta="iCorriente"></mainPanel>
                <mainPanel v-if="tipoCuentaN.tipo === 2" :listaTransacciones="lt_Ahorro" :infoCuenta="iAhorro"></mainPanel>
                <mainPanel v-if="tipoCuentaN.tipo === 3" :listaTransacciones="lt_Vista" :infoCuenta="iVista"></mainPanel>
            </Column>
        </Row>
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
