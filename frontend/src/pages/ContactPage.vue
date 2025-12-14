<script setup>
import { ref, onMounted } from "vue";
import { fetchProfile } from "../services/api.js";

const profile = ref(null);
const loading = ref(true);
const error = ref("");

onMounted(async () => {
  try {
    profile.value = await fetchProfile();
  } catch (e) {
    console.error(e);
    error.value = "Kontaktinformationen konnten nicht geladen werden.";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <section>
    <h2 class="section-title">Kontakt</h2>

    <div class="card">
      <p v-if="loading">Lade Kontakt…</p>
      <p v-else-if="error" class="error-text">{{ error }}</p>

      <template v-else>
        <p class="lead-text">
          Du möchtest mich für eine Stelle oder ein Projekt kontaktieren?
          Am besten erreichst du mich per E-Mail:
        </p>

        <p class="contact-mail">
          📧 <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        </p>

        <p class="muted">
          Standort: {{ profile.location }}
        </p>

        <div class="chip-row" style="margin-top:10px">
          <a v-if="profile.github" :href="profile.github" target="_blank" class="chip">
            🐙 GitHub
          </a>
          <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank" class="chip">
            💼 LinkedIn
          </a>
        </div>
      </template>
    </div>
  </section>
</template>
