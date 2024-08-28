<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface ImageData {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

const image = ref<ImageData | null>(null)
const props = defineProps<{ id: number }>()

onMounted(async () => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${props.id}`)
    image.value = response.data
  } catch (error) {
    console.error('Error fetching image:', error)
  }
})
</script>

<template>
  <div v-if="image" class="random-image">
    <img :src="image.url" :alt="image.title" class="image" />
  </div>
</template>

<style scoped lang="scss">
.image {
  width: 100%;
  height: auto;
  object-fit: cover;
  height: 200px;
}
</style>
