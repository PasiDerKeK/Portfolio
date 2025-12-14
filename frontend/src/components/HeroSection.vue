<script setup>
const props = defineProps({
  profile: { type: Object, required: true }
});
</script>

<template>
  <section id="about">
    <div class="card">
      <p style="font-size:11px;color:var(--text-muted);margin-bottom:6px">
        🔥 {{ profile.status }}
      </p>
      <h2 style="font-size:24px;margin-bottom:6px">
        Hallo, ich bin
        <span style="color:var(--accent);font-weight:600">{{ profile.name }}</span>
      </h2>
      <p style="font-size:14px;margin-bottom:10px">
        {{ profile.about }}
      </p>
      <p style="font-size:13px;color:var(--text-muted)">
        Standort: {{ profile.location }}
      </p>
    </div>
  </section>
</template>
