<script setup>
import { ref } from "vue";

const inputCode = ref("");
const error = ref("");
const unlocked = ref(false);

const validCodes = [
  "XMAS2025",
  "HOHOHO",
  "PASIDEV"
];

function checkCode() {
  error.value = "";
  unlocked.value = false;

  if (validCodes.includes(inputCode.value.trim())) {
    unlocked.value = true;
  } else {
    error.value = "❌ Code nicht gültig";
  }
}
</script>

<template>
  <section class="card secret-box">
    <h2 class="section-title">🎁 Geheimes Feature</h2>

    <input
        v-model="inputCode"
        type="text"
        placeholder="Code eingeben"
        class="secret-input"
    />

    <button class="btn btn-primary" @click="checkCode">
      OK
    </button>

    <p v-if="error" class="error-text">{{ error }}</p>

    <!-- 🔓 FREIGESCHALTET -->
    <div v-if="unlocked" class="secret-content">
      🎄 Glückwunsch!
      <br />
      Du hast das geheime Weihnachts-Feature freigeschaltet 😄
    </div>
  </section>
</template>

<style scoped>
.secret-box{
  max-width: 420px;
  margin: 60px auto;
  text-align: center;
}

.secret-input{
  width: 100%;
  padding: 10px 14px;
  margin: 14px 0;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
}

.secret-content{
  margin-top: 16px;
  font-weight: 700;
  color: var(--accent);
}
</style>
