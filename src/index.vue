<template>
<div class="">
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
    <footer>
  <FooterComponent />
    </footer>
    </div>
</template>

<script setup>
import FooterComponent from "./components/FooterComponent.vue";
import Navbar from "./components/Navbar.vue";
</script>

<style scoped>

</style>