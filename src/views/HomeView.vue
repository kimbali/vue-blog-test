<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import PostCard from '../components/PostCard.vue'
import LoaderSpinner from '../components/LoaderSpinner.vue'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const posts = ref<Post[]>([])
const isLoading = ref(true)
const currentPage = ref(1)
const postsPerPage = 8

onMounted(async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    posts.value = response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
  } finally {
    isLoading.value = false
  }
})

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  const end = start + postsPerPage
  return posts.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(posts.value.length / postsPerPage)
})

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
</script>

<template>
  <div>
    <LoaderSpinner v-if="isLoading" />

    <div v-else class="grid">
      <PostCard v-for="post in paginatedPosts" :key="post.id" :post="post" />
    </div>

    <div class="pagination">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1"><</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">></button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media ($desktop) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 46px;

  span {
    margin: 0 16px;
    color: $primary;
  }
}
</style>
