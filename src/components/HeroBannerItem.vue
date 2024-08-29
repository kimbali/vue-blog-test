<script setup lang="ts">
import { defineProps } from 'vue'
import RandomImage from './RandomImage.vue'

const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="image-container">
    <RandomImage isBanner isBackground :size="1000" />

    <h2 class="image-title">{{ props.title }}</h2>
  </div>
</template>

<style lang="scss">
.image-container {
  width: 100vw;
  padding-top: 53px;
  height: 400px;
  position: relative;
}

.image-title {
  position: absolute;
  bottom: 32px;
  left: 32px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
}
</style>
