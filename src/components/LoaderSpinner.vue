<script setup lang="ts">
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
</script>

<template>
  <div class="loader">
    <PulseLoader :loading="true" color="#8686BF" size="8px" />
  </div>
</template>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-top: 46px;
}
</style>
