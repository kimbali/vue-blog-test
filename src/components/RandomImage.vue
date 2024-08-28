<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import axios from 'axios'

const props = defineProps<{ isUser?: boolean }>()
const userImageUrl = ref<string | null>(null)

onMounted(async () => {
  try {
    if (props.isUser) {
      // Fetch from Random User API
      const response = await axios.get('https://randomuser.me/api')
      userImageUrl.value = response.data.results[0].picture.large
    } else {
      // Fetch from Lorem Picsum
      const response = await axios.get('https://picsum.photos/400', {
        responseType: 'arraybuffer'
      })
      const imageBlob = new Blob([response.data], { type: 'image/jpeg' })
      userImageUrl.value = URL.createObjectURL(imageBlob)
    }
  } catch (error) {
    console.error('Error fetching image:', error)
  }
})
</script>

<template>
  <div v-if="userImageUrl" :class="props.isUser ? 'user-image' : 'random-image'">
    <img :src="userImageUrl" :alt="props.isUser ? 'User image' : 'Random image'" />
  </div>
</template>

<style scoped lang="scss">
.random-image {
  img {
    height: auto;
    max-height: 200px;
    width: 100%;
  }
}

.user-image {
  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
}
</style>
