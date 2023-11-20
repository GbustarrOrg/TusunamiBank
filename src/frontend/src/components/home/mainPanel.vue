<script setup>
    import VirtualScroller from 'primevue/virtualscroller';
    import Card from 'primevue/card';
    import Button from 'primevue/button';
    //lista con "transacciones, estas se mostraran en el scroll, deberian ser transacciones desde la bd"
    const listaTransacciones = [
    { fecha: '1/09/2019', tipo: 'Deposito', sucursal: 'Islas Caimán', monto: '5.000.000' },
    { fecha: '2/04/2020', tipo: 'Retiro', sucursal: 'Talca', monto: '2.000.000.000' },
    { fecha: '3/09/2021', tipo: 'Deposito', sucursal: 'Santiago', monto: '500.000' },
    { fecha: '4/09/2022', tipo: 'Retiro', sucursal: 'Islas Caimán', monto: '2.000.000' },
    
    ];
    //informacion de la cuenta actual , se actualizan en la card
    const infoCuenta={
        tipo:'Corriente',
        numCuenta:'000000001',
        saldo:'Infinito',
        sucursal:'Curicó'
    };
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300&display=swap');

    .montoDerecha{
        font-size: 20px;
        font-weight: bold; 
        text-align: right;
    }

    .botonDeposito{
        margin-right: 40px;
        background-color: #ffff; 
        color: #d52b1e
    }

    .botonRetiro{
        margin-right: 40px;
        color: #ffff; 
        background-color: #d52b1e
    }

    .cardPrincipal{
        height: 100%; 
        width:55vw; 
        display: flex; 
        flex-direction: column;
    }

    .cardCuenta{
        font-size: 20px;
        background-color: #d9d9d9; 
        color: #0039A6;
        margin-bottom: 12px; 
        text-align: left;
        border-radius: 30px;
        padding: 0 24px;
        height: 100%;
        display: flex; 
        flex-direction: column;
        margin-bottom: 40px;
    }

    .cardScroll{
        font-size: 20px;
        background-color: #d9d9d9; 
        color: #0039A6;
        margin-bottom: 12px; 
        border-radius: 30px;
        padding: 0 24px;
        height: 100%;
        flex-direction: column;
    }

    .cardTransaccion{
        font-size: 18px;
        margin-bottom: 16px; 
        border-radius: 60px;
        height: auto;
        width: 100%;
        display: flex; 
        padding: 0 36px;
        flex-direction: column;
    }

    .scrollTransaccion{
        display: flex;
        height: 45vh;
        width: 100%;
        flex-grow: 1;
    }

    .divPrincipal{
        height: 100%; 
        display: flex; 
        align-items: left;   
    }

    .fondoDerecha {
        background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Retrato_Oficial_Presidente_Pi%C3%B1era_2018.jpg/1200px-Retrato_Oficial_Presidente_Pi%C3%B1era_2018.jpg); /* Reemplaza con la ruta correcta de tu imagen */
        background-size: cover;
        background-position: center;
        height: auto; 
        width: 26.2vw; 
    }

</style>

<template>
    <div class="divPrincipal">
        <row>
        <Card class="cardPrincipal">
            <template #title > 
                <div style="text-align: center; font-weight: bold; color:black;">Cuenta {{ infoCuenta.tipo }} </div>
            </template>
          <template #content>
            <column style="height:40%">
            <Card class="cardCuenta">
              <template #content>
                Cuenta: #{{ infoCuenta.numCuenta }} <br>
                Saldo: {{infoCuenta.saldo}} <br>
                Sucursal: {{infoCuenta.sucursal}}<br>
                <br>
                <div>
                    <row>
                        <Button label="Realizar Depósito" text raised  class="botonDeposito"/>
                    </row>
                    <row>
                        <Button label="Realizar Retiro" text raised class="botonRetiro"/>
                    </row>
                </div>
              </template>
            </Card>
            </column>
            <column>
                <Card class="cardScroll" style="height: 60%;">
                <template #title><div style="text-align: center; font-weight: bold; color:black;">Últimas Transacciones</div> </template>
                <template #content>
                    <VirtualScroller :items="listaTransacciones" :itemSize="100" class="scrollTransaccion">
                    <template v-slot:item="{ item }">
                        <Card class="cardTransaccion">
                        <template #content>
                            <div style="display: flex; flex-direction: column; align-items: flex-start;">
                                <div style="font-weight: bold;">{{ item.fecha }}</div>
                                <div style="display: flex; justify-content: space-between; width: 100%;">
                                  <div>{{ item.tipo }} Sucursal {{ item.sucursal }}</div>
                                  <div class="montoDerecha">${{ item.monto }}</div>
                                </div>
                              </div>
                        </template>
                        </Card>
                    </template>
                    </VirtualScroller>
                </template>
                </Card>
            </column>
          </template>
        </Card>
        </row>
        <row class="fondoDerecha">
        </row>
    </div>
  </template>
  