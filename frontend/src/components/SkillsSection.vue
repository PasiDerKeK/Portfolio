<script setup>
const props = defineProps({
  skills: { type: Object, required: true }
});
</script>

<template>
  <section id="skills" style="margin-top:20px">
    <h3 class="section-title">Skills</h3>
    <div class="card" style="display:grid;gap:14px">
      <div>
        <h4 style="font-size:13px;margin-bottom:4px">Sprachen & Plattformen</h4>
        <div class="chip-row">
          <span v-for="s in skills.languages" :key="s" class="chip">{{ s }}</span>
        </div>
      </div>

      <div>
        <h4 style="font-size:13px;margin-bottom:4px">Frontend</h4>
        <div class="chip-row">
          <span v-for="s in skills.frontend" :key="s" class="chip">{{ s }}</span>
        </div>
      </div>

      <div>
        <h4 style="font-size:13px;margin-bottom:4px">Backend</h4>
        <div class="chip-row">
          <span v-for="s in skills.backend" :key="s" class="chip">{{ s }}</span>
        </div>
      </div>

      <div>
        <h4 style="font-size:13px;margin-bottom:4px">Tools & Arbeitsweise</h4>
        <div class="chip-row">
          <span v-for="s in skills.tools" :key="s" class="chip">{{ s }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.chip {
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(148, 163, 184, 0.4);
  color: var(--text-muted);
}
</style>
