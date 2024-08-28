<script setup lang="ts">
import { ref, onMounted, defineProps, computed } from 'vue'
import axios from 'axios'

// Define the props interface
const props = defineProps<{ isUser?: boolean; isBackground?: boolean }>()
const userImageUrl = ref<string | null>(null)

// Fetch the image URL based on the props
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

// Compute class names based on props
const imageClass = computed(() => {
  return {
    'user-image': props.isUser,
    'background-image': props.isBackground
  }
})
</script>

<template>
  <div v-if="userImageUrl" :class="imageClass">
    <img
      v-if="!props.isBackground"
      :src="userImageUrl"
      :alt="props.isUser ? 'User image' : 'Random image'"
    />
    <div
      v-if="props.isBackground"
      :style="{ backgroundImage: 'url(' + userImageUrl + ')' }"
      class="background-image-div"
    ></div>
  </div>
</template>

<style scoped lang="scss">
.background-image-div {
  width: 100%;
  height: 200px; /* Adjust height as needed */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px; /* Optional: for rounded corners */
}

.user-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;

  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
}
</style>
