<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<template>
  <div class="page">
    <header class="main-header card">
      <div class="brand">
        <div class="brand-logo">DEV</div>
        <div>
          <h1 class="brand-title">Mein Portfolio</h1>
          <p class="brand-subtitle">Softwareentwickler – Python · C# · Java · Node.js · Vue</p>
        </div>
      </div>

      <!-- Hamburger Button -->
      <button class="hamburger" @click="toggleMenu">
        ☰
      </button>

      <nav class="nav" :class="{open: menuOpen}">
        <RouterLink to="/" class="nav-link" active-class="nav-link--active" exact>Home</RouterLink>
        <RouterLink to="/projects" class="nav-link" active-class="nav-link--active">Projekte</RouterLink>
        <RouterLink to="/languages" class="nav-link" active-class="nav-link--active">Sprachen</RouterLink>
        <RouterLink to="/contact" class="nav-link" active-class="nav-link--active">Kontakt</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>
