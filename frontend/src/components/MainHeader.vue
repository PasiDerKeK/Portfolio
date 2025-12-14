<script setup>
const props = defineProps({
  profile: { type: Object, required: true }
});
</script>

<template>
  <header
      class="card"
      style="display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:18px"
  >
    <div>
      <h1 style="font-size:20px;font-weight:600">{{ profile.name }}</h1>
      <p style="font-size:13px;color:var(--text-muted)">{{ profile.role }}</p>
    </div>
    <nav style="display:flex;gap:10px;font-size:13px;flex-wrap:wrap">
      <a href="#about">Über mich</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projekte</a>
      <a href="#contact">Kontakt</a>
    </nav>
  </header>
</template>
