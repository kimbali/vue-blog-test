<script setup lang="ts">
import { ref, onMounted, defineProps, computed } from 'vue'
import axios from 'axios'

const props = defineProps<{
  isUser?: boolean
  isBackground?: boolean
  size?: number
  isBanner?: boolean
}>()
const userImageUrl = ref<string | null>(null)

onMounted(async () => {
  try {
    if (props.isUser) {
      const response = await axios.get('https://randomuser.me/api')
      userImageUrl.value = response.data.results[0].picture.large
    } else {
      const response = await axios.get(`https://picsum.photos/${props.size || '400'}`, {
        responseType: 'arraybuffer'
      })
      const imageBlob = new Blob([response.data], { type: 'image/jpeg' })
      userImageUrl.value = URL.createObjectURL(imageBlob)
    }
  } catch (error) {
    console.error('Error fetching image:', error)
  }
})

const imageClass = computed(() => {
  return {
    'banner-image': props.isBanner,
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
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
}

.banner-image {
  height: 400px;

  div {
    border-radius: 0;
    width: 100vw;
    height: 400px;
  }
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
