<script setup xmlns="http://www.w3.org/1999/html">
import { ref, onMounted, computed } from "vue";
import { fetchProfile } from "../services/api.js";
import { useRouter } from "vue-router";

const router = useRouter();

const profile = ref(null);
const loading = ref(true);
const error = ref("");

onMounted(async () => {
  try {
    profile.value = await fetchProfile();
  } catch (e) {
    console.error(e);
    error.value = "Profil konnte nicht geladen werden.";
  } finally {
    loading.value = false;
  }
});

const quickChips = computed(() => ([
  "Python", "C#", "Java", "Node.js", "Vue", "HTML", "CSS", "JavaScript", "SQL", "Git/GitHub"
]));
</script>

<template>
  <section class="home">
    <p v-if="loading" class="p">Lade Profil…</p>
    <p v-else-if="error" class="p" style="color:#ef4444">{{ error }}</p>

    <template v-else>
      <!-- HERO -->
      <div class="card">
        <p class="chip" style="display:inline-flex; margin-bottom: 10px;">
          {{ profile.status || "Offen für neue Projekte / Stellen" }}
        </p>

        <div class="grid-2" style="align-items:start;">
          <div>
            <h1 class="h1">
              Hallo, ich bin <span style="color: var(--accent)">{{ profile.name }}</span>
            </h1>
            <p class="p" style="margin-top:10px;">
              {{ profile.about }}
            </p>

            <div class="btn-row">
              <button class="btn btn-primary" @click="router.push('/projects')">
                🚀 Projekte ansehen
              </button>
              <button class="btn" @click="router.push('/contact')">
                ✉️ Kontakt
              </button>
            </div>

            <div class="chips">
              <span v-for="c in quickChips" :key="c" class="chip">{{ c }}</span>
            </div>
          </div>

          <!-- INFO BOX -->
          <div class="card" style="box-shadow:none; background: rgba(15,23,42,0.02);">
            <p class="section-title">Kurzprofil</p>
            <p style="font-weight:700; margin-bottom:6px;">{{ profile.role }}</p>
            <p class="p" style="margin-bottom:10px;">📍 {{ profile.location }}</p>

            <div class="grid-2" style="gap:10px;">
              <div class="chip">✅ Clean Code</div>
              <div class="chip">🧪 Unit Tests</div>
              <div class="chip">🧩 REST APIs</div>
              <div class="chip">🔧 Docker / CI</div>
            </div>

            <div class="btn-row" style="margin-top:14px;">
              <a v-if="profile.github" class="btn" :href="profile.github" target="_blank">🐙 GitHub</a>
              <a v-if="profile.linkedin" class="btn" :href="profile.linkedin" target="_blank">💼 LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <!-- HIGHLIGHTS -->
      <div style="margin-top: 14px;">
        <p class="section-title">Schwerpunkte</p>

        <div class="grid-4">
          <div class="card">
            <p style="font-weight:800; margin-bottom:6px;">Backend</p>
            <p class="p">Node.js / Python / C# / Java – APIs, Services, Logik.</p>
          </div>

          <div class="card">
            <p style="font-weight:800; margin-bottom:6px;">Frontend</p>
            <p class="p">Vue SPA, UI-Komponenten, Responsive Design.</p>
          </div>

          <div class="card">
            <p style="font-weight:800; margin-bottom:6px;">Datenbanken</p>
            <p class="p">SQL, relationale Modelle, Abfragen, CRUD.</p>
          </div>

          <div class="card">
            <p style="font-weight:800; margin-bottom:6px;">Tooling</p>
            <p class="p">Git & GitHub, Docker, Testing, CI/CD Basics.</p>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>
