<script setup>
const props = defineProps({
  profile: { type: Object, required: true }
});
</script>

<template>
  <section id="contact" style="margin-top:20px">
    <h3 class="section-title">Kontakt</h3>
    <div class="card">
      <p style="font-size:13px;margin-bottom:8px">
        Du möchtest mit mir zusammenarbeiten oder hast Fragen? Schreib mir gern:
      </p>
      <p style="font-size:14px;margin-bottom:4px">
        📧 <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
      </p>
      <p style="font-size:13px;color:var(--text-muted);margin-bottom:8px">
        Standort: {{ profile.location }}
      </p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;font-size:13px;">
        <a v-if="profile.github" :href="profile.github" target="_blank">🐙 GitHub</a>
        <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank">💼 LinkedIn</a>
      </div>
    </div>
  </section>
</template>
