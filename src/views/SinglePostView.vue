<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import LoaderSpinner from '../components/LoaderSpinner.vue'

interface Post {
  id: number
  title: string
  body: string
}

const route = useRoute()
const post = ref<Post | null>(null)
const isLoading = ref(true)

onMounted(async () => {
  const postId = route.params.id
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    post.value = response.data
  } catch (error) {
    console.error('Error fetching post:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div>
    <LoaderSpinner v-if="isLoading" />
    <div v-else-if="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
    <div v-else>
      <p>Post not found.</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  color: $primary;
  margin-bottom: 20px;
}
</style>
