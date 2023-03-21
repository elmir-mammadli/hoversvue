<template>
<div class="bg-[#f7f7f7]">
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