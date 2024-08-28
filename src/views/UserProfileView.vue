<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import LoaderSpinner from '../components/LoaderSpinner.vue'
import type { User } from '../types/interfaces'
import RandomImage from '@/components/RandomImage.vue'

const route = useRoute()
const user = ref<User | null>(null)
const isLoading = ref(true)

onMounted(async () => {
  const userId = route.params.id
  try {
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    user.value = userResponse.data
  } catch (error) {
    console.error('Error fetching user:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div>
    <LoaderSpinner v-if="isLoading" />
    <div v-else-if="user">
      <RandomImage isUser />
      <p>{{ user.name }}</p>

      <div class="separator"></div>
    </div>
    <div v-else>
      <p>user no encontrado</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  color: $primary;
  margin-bottom: 20px;
}

.separator {
  margin-bottom: 46px;
}
</style>
