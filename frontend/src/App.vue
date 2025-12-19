<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<template>
  <header class="main-header card">
    <div class="brand">
      <div class="brand-logo">DEV</div>
      <div>
        <h1 class="brand-title">Mein Portfolio</h1>
        <p class="brand-subtitle">Softwareentwickler</p>
      </div>
    </div>

    <!-- Hamburger Button -->
    <button class="hamburger" @click="toggleMenu">
      ☰
    </button>

    <!-- Navigation -->
    <nav class="nav" :class="{ open: menuOpen }">
      <RouterLink to="/" class="nav-link" @click="menuOpen=false">Home</RouterLink>
      <RouterLink to="/projects" class="nav-link" @click="menuOpen=false">Projekte</RouterLink>
      <RouterLink to="/languages" class="nav-link" @click="menuOpen=false">Sprachen</RouterLink>
      <RouterLink to="/contact" class="nav-link" @click="menuOpen=false">Kontakt</RouterLink>
    </nav>
  </header>
</template>
