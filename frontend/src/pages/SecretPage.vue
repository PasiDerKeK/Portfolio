<script setup>
import { ref } from "vue";

const inputCode = ref("");
const error = ref("");
const showPopup = ref(false);

const validCodes = [
  "XMAS2025",
  "HOHOHO",
  "PASIDEV"
];

function checkCode() {
  error.value = "";

  if (validCodes.includes(inputCode.value.trim())) {
    showPopup.value = true;
    error.value = "";
  } else {
    error.value = "❌ Code nicht gültig";
  }
}
</script>

<template>
  <section class="card secret-box">
    <h2 class="section-title">🎁 Geheimes Feature</h2>
    <div class="secret-box">
      <input
          v-model="inputCode"
          placeholder="Code eingeben"
          @keyup.enter="checkCode"
          class="secret-input"
      />
      <button @click="checkCode" class="btn btn-primary">OK</button>

      <p v-if="error" class="secret-content">{{ error }}</p>
    </div>

    <!-- POPUP -->
    <div v-if="showPopup" class="popup">
      <div class="popup-inner">
        🎄 Ich wünsche dir Frohe Weihnachten 🎁
        <br>
        Und ein Frohes neues Jahr :^)
      </div>
      <button @click="showPopup = false" class="btn-popup" >Schließen</button>
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
