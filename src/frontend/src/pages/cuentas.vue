<template>
  <h1 style="text-align: center; color: black; padding-bottom: 5%;">
    ¿Qué tipo de cuenta desea?
  </h1>

  <div class="contenedor-horizontal">
    <!-- Primer rectángulo vertical -->
    <div class="rectangulo-vertical">
      <h2 style="padding: 2%; color: white;">Cuenta N°1</h2>
      <!-- Contenido del primer rectángulo (horizontal) -->
      <div class="rectangulo-horizontal">
        <p>Característica 1</p>
      </div>
      <!-- Contenido del segundo rectángulo (horizontal) -->
      <div class="rectangulo-horizontal">
        <p>Característica 2</p>
      </div>
      <div class="rectangulo-horizontal">
        <p>Característica 3</p>
      </div>
      <div style="display: block; text-align: center;">
        <v-btn block rounded="xl" size="x-large" style="background-color: #d52b1e; color: white;">
          Contratar
        </v-btn>
      </div>
    </div>

    <!-- Segundo rectángulo vertical -->
    <div class="rectangulo-vertical">
      <h2 style="padding: 2%; color: white;">Cuenta N°2</h2>
      <!-- Contenido del primer rectángulo (horizontal) -->
      <div class="rectangulo-horizontal">
        <p>Característica 1</p>
      </div>
      <!-- Contenido del segundo rectángulo (horizontal) -->
      <div class="rectangulo-horizontal">
        <p>Característica 2</p>
      </div>
      <div class="rectangulo-horizontal">
        <p>Característica 3</p>
      </div>
      <div style="display: block; text-align: center;">
        <v-btn block rounded="xl" size="x-large" style="background-color: #d52b1e; color: white;">
          Contratar
        </v-btn>
      </div>
    </div>

    <!-- Tercer rectángulo vertical -->
    <div class="rectangulo-vertical">
      <h2 style="padding: 2%; color: white;">Cuenta N°3</h2>
      <!-- Contenido del primer rectángulo (horizontal) -->
      <div class="rectangulo-horizontal">
        <p>Característica 1</p>
      </div>
      <!-- Contenido del segundo rectángulo (horizontal) -->
      <div class="rectangulo-horizontal">
        <p>Característica 2</p>
      </div>
      <div class="rectangulo-horizontal">
        <p>Característica 3</p>
      </div>
      <div style="display: block; text-align: center;">
        <v-btn block rounded="xl" size="x-large" style="background-color: #d52b1e; color: white;">
          Contratar
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style>
.center-container {
  display: inline-block;
  min-width: 50%;
  align-items: center;
}

.contenedor-horizontal {
  display: flex;
  justify-content: center;
}

.rectangulo-vertical {
  margin-right: 10px;
  border-radius: 50px;
  text-align: center;
  min-height: 70%;
  min-width: 450px;
}

.rectangulo-vertical,
.rectangulo-horizontal {
  background-color: #0038a5;
  border-radius: 10px;
  padding: 2%;

}

.rectangulo-horizontal {
  background-color: rgb(170, 189, 197);
  color: black;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  line-height: 50px;
}
</style>
