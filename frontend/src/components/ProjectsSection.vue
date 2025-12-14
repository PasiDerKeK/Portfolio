<script setup>
const props = defineProps({
  projects: { type: Array, required: true }
});
</script>

<template>
  <section id="projects" style="margin-top:20px">
    <h3 class="section-title">Projekte</h3>
    <div
        style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;"
    >
      <article v-for="p in projects" :key="p.id" class="card">
        <header
            style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:6px"
        >
          <div>
            <h4 style="font-size:14px;font-weight:600">{{ p.title }}</h4>
            <p style="font-size:11px;color:var(--text-muted)">
              {{ p.stack.join(" · ") }}
            </p>
          </div>
          <span style="font-size:11px;color:var(--text-muted)">{{ p.type }}</span>
        </header>
        <p style="font-size:12px;color:var(--text-muted);margin-bottom:6px">
          {{ p.description }}
        </p>
        <footer
            style="display:flex;justify-content:space-between;align-items:center;font-size:11px;color:var(--text-muted)"
        >
          <span>🏷 {{ p.tag }}</span>
          <span style="display:flex;gap:6px">
            <a v-if="p.github" :href="p.github" target="_blank">GitHub</a>
            <a v-if="p.demo" :href="p.demo" target="_blank">Demo</a>
          </span>
        </footer>
      </article>
    </div>
  </section>
</template>
