<script setup lang="ts">
import { computed, defineProps } from 'vue'
import RandomImage from './RandomImage.vue'

const props = defineProps<{
  title?: string
  fullWidth?: boolean
}>()

const imageClass = computed(() => {
  return {
    'image-container': true,
    'full-width': props.fullWidth
  }
})
</script>

<template>
  <div :class="imageClass">
    <RandomImage isBanner isBackground :size="1000" />

    <h2 v-if="props.title" class="image-title">{{ props.title }}</h2>
  </div>
</template>

<style lang="scss">
.image-container {
  width: 100vw;
  padding-top: 53px;
  height: 400px;
  position: relative;
}

.full-width {
  width: 100%;
  padding-top: 0;
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
