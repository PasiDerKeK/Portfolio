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
          v-model="code"
          placeholder="Code eingeben"
          @keyup.enter="checkCode"
      />
      <button @click="checkCode">OK</button>

      <p v-if="error">{{ error }}</p>
    </div>

    <!-- POPUP -->
    <div v-if="showPopup" class="popup">
      <div class="popup-inner">
        🎄 XMAS FEATURE FREIGESCHALTET 🎁
        <button @click="showPopup = false">Schließen</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.secret-box{
  max-width: 420px;
  margin: 60px auto;
  text-align: center;
}

</style>
