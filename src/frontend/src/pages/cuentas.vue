<template>
    <div class="contenedor-horizontal">
      <!-- Primer rectángulo vertical -->
      <div class="rectangulo-vertical">
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
      </div>
  
      <!-- Segundo rectángulo vertical -->
      <div class="rectangulo-vertical">
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
      </div>
      <!-- Segundo rectángulo vertical -->
      <div class="rectangulo-vertical">
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
      </div>
    </div>
  </template>
  
  <style>
  .contenedor-horizontal {
    display: flex;
  }
  
  .rectangulo-vertical {
    margin-right: 10px; /* Espaciado entre rectángulos verticales */
    border-radius: 25px;
  }
  
  .rectangulo-vertical,
  .rectangulo-horizontal {
    width: 500px; /* Ancho de cada rectángulo */
    height: auto;
    background-color: blue;
    height: 1000px;
   

  }
  
  .rectangulo-horizontal {
    height: 100px;
    background-color: rgb(170, 189, 197);
    margin-top: 125px;
    margin-bottom: 100px;
    width:250px;
    margin-left: 125px;
    text-align: center;
    line-height: 50px;
    
  }
  </style>