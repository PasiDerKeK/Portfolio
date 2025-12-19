<script setup>
import { ref, onMounted } from "vue";
import { fetchSkills } from "../services/api.js";

const skills = ref(null);
const loading = ref(true);
const error = ref("");

// Deine echten Sprachen
const humanLanguages = [
  { name: "Deutsch", level: "Erstsprache" },
  { name: "Polnisch", level: "Zweitsprache" },
  { name: "Englisch", level: "Schulisch erlernte Fremdsprache" }
];

// Icon-Map (Devicon CDN)
const iconMap = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  Vue: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
};

// Helper: liefert Icon-URL oder null
function iconFor(label) {
  return iconMap[label] || null;
}

onMounted(async () => {
  try {
    skills.value = await fetchSkills();
  } catch (e) {
    console.error(e);
    error.value = "Skills konnten nicht geladen werden.";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <section class="lang-page">
    <h2 class="lang-title">Sprachen</h2>

    <div class="card">
      <p v-if="loading">Lade Sprachen…</p>
      <p v-else-if="error" class="error-text">{{ error }}</p>

      <template v-else>
        <div class="lang-grid">
          <!-- Human languages -->
          <div>
            <h3 class="lang-sub">Eigene Sprachen</h3>
            <ul class="lang-list">
              <li v-for="l in humanLanguages" :key="l.name">
                <strong>{{ l.name }}</strong> – {{ l.level }}
              </li>
            </ul>
          </div>

          <!-- Programming languages -->
          <div>
            <h3 class="lang-sub">Programmiersprachen & Tech</h3>
            <div class="chip-row">
              <span
                  v-for="s in skills.languages"
                  :key="s"
                  class="chip chip--icon"
              >
                <img v-if="iconFor(s)" class="chip-icon" :src="iconFor(s)" :alt="s" />
                <span>{{ s }}</span>
              </span>
            </div>
          </div>
        </div>

        <div class="lang-more">
          <h3 class="lang-sub">Weitere Bereiche</h3>
          <div class="chip-row">
            <span
                v-for="s in skills.backend"
                :key="'b-' + s"
                class="chip chip--icon"
            >
              <img v-if="iconFor(s)" class="chip-icon" :src="iconFor(s)" :alt="s" />
              <span>{{ s }}</span>
            </span>

            <span
                v-for="s in skills.frontend"
                :key="'f-' + s"
                class="chip chip--icon"
            >
              <img v-if="iconFor(s)" class="chip-icon" :src="iconFor(s)" :alt="s" />
              <span>{{ s }}</span>
            </span>

            <span
                v-for="s in skills.tools"
                :key="'t-' + s"
                class="chip chip--icon"
            >
              <img v-if="iconFor(s)" class="chip-icon" :src="iconFor(s)" :alt="s" />
              <span>{{ s }}</span>
            </span>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
/* nur LanguagesPage */
.lang-title{
  font-size: 22px;
  font-weight: 800;
  margin: 6px 0 12px;
}
.lang-grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.lang-sub{
  font-size: 14px;
  font-weight: 800;
  margin-bottom: 8px;
}
.lang-list{
  padding-left: 18px;
  line-height: 1.6;
}
.lang-more{
  margin-top: 16px;
}

/* Chip Layout mit Icon */
.chip--icon{
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.chip-icon{
  width: 16px;
  height: 16px;
  object-fit: contain;
  display: inline-block;
}

@media (max-width: 820px){
  .lang-grid{ grid-template-columns: 1fr; }
}
</style>
