<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import LoaderSpinner from '../components/LoaderSpinner.vue'
import PostComment from '../components/PostComment.vue'
import type { Post, Comment } from '../types/interfaces'

const route = useRoute()
const post = ref<Post | null>(null)
const comments = ref<Comment[]>([])
const isLoading = ref(true)

onMounted(async () => {
  const postId = route.params.id
  try {
    const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    post.value = postResponse.data

    const commentsResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    )
    comments.value = commentsResponse.data
  } catch (error) {
    console.error('Error fetching post or comments:', error)
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

      <div class="separator"></div>

      <div v-if="comments.length > 0">
        <PostComment v-for="comment in comments" :key="comment.id" :comment="comment" />
      </div>
      <div v-else>
        <p>Este post aun no tiene comentarios</p>
      </div>
    </div>
    <div v-else>
      <p>Post no encontrado</p>
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
