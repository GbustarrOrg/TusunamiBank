<script setup>
    import IndexModalLogin from '../components/index/indexModalLogin.vue';
</script>

<template>
  <v-app>
    <v-app-bar>
        <header>
            <button class="p-button-rounded p-button-secondary button" @click="$router.push('/')">X</button> 
        </header>
    </v-app-bar>
    <v-main class="login">
        <IndexModalLogin></IndexModalLogin>
    </v-main>
  </v-app>
</template>

<style>
    .login{
        background-color: #f5f5f5;
        align-items: center;
        justify-content: center;
        width: 80vmax;
    }
    .button {
        border-radius: 100%;
        width: 23px;
        margin-left: 10px;
        display: block;
        background-color: blue;
        color: white;
    }
    .button:hover {
        background-color: #0f45ab;
    }

</style>
