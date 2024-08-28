<script setup lang="ts">
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
</script>

<template>
  <div class="loader">
    <PulseLoader :loading="true" color="#42b983" size="15px" />
  </div>
</template>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
</style>
