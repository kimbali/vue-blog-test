<script setup lang="ts">
import { ref } from 'vue'
import HeroBannerItem from '@/components/HeroBannerItem.vue'
import PrevArrow from '@/assets/icons/PrevArrow.vue'
import NextArrow from '@/assets/icons/NextArrow.vue'

const items = [
  { title: 'Orígenes de Lorem Ipsum' },
  { title: 'Lorem Ipsum en los años 1960' },
  { title: 'Lorem Ipsum Hoy' },
  { title: 'Texto original de Lorem Ipsum' }
]

const currentIndex = ref(0)

function nextSlide() {
  if (currentIndex.value < items.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

function prevSlide() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = items.length - 1
  }
}
</script>

<template>
  <div class="gallery-container">
    <HeroBannerItem
      v-for="(item, index) in items"
      :key="index"
      :title="item.title"
      v-show="index === currentIndex"
    />

    <button @click="prevSlide" class="prev-button"><PrevArrow /></button>
    <button @click="nextSlide" class="next-button"><NextArrow /></button>
  </div>
</template>

<style scoped lang="scss">
.gallery-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  padding: 8px;

  &:hover {
    background-color: transparent;
  }

  &.prev-button {
    left: 10px;
  }

  &.next-button {
    right: 10px;
  }
}
</style>
