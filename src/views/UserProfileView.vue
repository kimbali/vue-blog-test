<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import LoaderSpinner from '../components/LoaderSpinner.vue'
import type { User } from '../types/interfaces'
import RandomImage from '@/components/RandomImage.vue'
import MapBox from '@/components/MapBox.vue'

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
    <div v-else-if="user" class="user-profile">
      <div class="user-details">
        <div class="image">
          <RandomImage isUser />
          <h1>{{ user.name }}</h1>
        </div>
        <div class="map">
          <MapBox :lat="user.address?.geo?.lat" :lng="user?.address?.geo?.lat" />
        </div>
      </div>
    </div>
    <div v-else>
      <p>Usuario no encontrado</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-profile {
  margin-top: 122px;
  .image {
    width: 112px;
  }

  .user-details {
    display: flex;
    flex-direction: column;
    column-gap: 100px;
    row-gap: 24px;

    @media ($desktop) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .map {
    height: 300px;
    flex-grow: 1;
    border-radius: $radius;
    overflow: hidden;

    @media ($desktop) {
      height: 500px;
    }
  }
}
</style>
