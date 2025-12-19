<script setup>
import { ref, onMounted } from "vue";
import { fetchProjects } from "../services/api.js";

const projects = ref([]);
const loading = ref(true);
const error = ref("");

// Fallback-Projekte (wenn Backend leer ist)
const fallbackProjects = [
  { }
];

onMounted(async () => {
  try {
    const data = await fetchProjects();

    // Wenn Backend leer ist -> Fallback anzeigen
    projects.value = Array.isArray(data) && data.length ? data : fallbackProjects;
  } catch (e) {
    console.error(e);
    error.value = "Projekte konnten nicht geladen werden.";
    projects.value = fallbackProjects;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <section>
    <h2 class="section-title">Projekte</h2>

    <p v-if="loading" class="p">Lade Projekte…</p>
    <p v-else-if="error" class="p" style="color:#ef4444">{{ error }}</p>

    <div v-else class="projects-grid">
      <article v-for="p in projects" :key="p.id" class="project-card">
        <!-- Bild / Preview oben -->
        <div class="project-img">
          <template v-if="p.image">
            <img :src="p.image" :alt="p.title" />
          </template>
          <template v-else>
            <span>Vorschaubild</span>
          </template>
        </div>

        <div class="project-body">
          <div class="project-meta">
            <h3 class="project-title">{{ p.title }}</h3>
            <span class="project-type">{{ p.type }}</span>
          </div>

          <p class="project-desc">{{ p.description }}</p>

          <div class="chip-row" style="margin-top:10px">
            <span v-for="s in p.stack" :key="s" class="chip">{{ s }}</span>
          </div>

          <div class="project-actions">
            <a v-if="p.github" class="btn" :href="p.github" target="_blank">🐙 GitHub</a>
            <a v-if="p.demo" class="btn btn-primary" :href="p.demo" target="_blank">🔗 Demo</a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
/* Nur Projects-Page Styling – ändert nichts an Home */

</style>
