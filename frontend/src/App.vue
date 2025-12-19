<script setup>
import { ref, onMounted } from "vue";

const menuOpen = ref(false);
const isDark = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function toggleDark() {
  isDark.value = !isDark.value;
  updateTheme();
}

function updateTheme() {
  document.documentElement.classList.toggle("dark", isDark.value);
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
}

onMounted(() => {
  const saved = localStorage.getItem("theme");
  isDark.value = saved === "dark";
  updateTheme();
});

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

      <button class="theme-toggle" @click="toggleDark">
        {{ isDark ? "☀️" : "🌙" }}
      </button>

      <button class="hamburger" @click="toggleMenu">
        ☰
      </button>

      <nav class="nav" :class="{ open: menuOpen }">
        <RouterLink
            to="/"
            class="nav-link"
            active-class="nav-link--active"
            exact
            @click="menuOpen = false"
        >
          Home
        </RouterLink>

        <RouterLink
            to="/projects"
            class="nav-link"
            active-class="nav-link--active"
            @click="menuOpen = false"
        >
          Projekte
        </RouterLink>

        <RouterLink
            to="/languages"
            class="nav-link"
            active-class="nav-link--active"
            @click="menuOpen = false"
        >
          Sprachen
        </RouterLink>

        <RouterLink
            to="/contact"
            class="nav-link"
            active-class="nav-link--active"
            @click="menuOpen = false"
        >
          Kontakt
        </RouterLink>

        <RouterLink
            to="/contact"
            class="nav-link"
            active-class="nav-link--active"
            @click="menuOpen = false"
        >
          🎁
        </RouterLink>

      </nav>

    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>
