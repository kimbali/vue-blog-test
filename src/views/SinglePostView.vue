<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import LoaderSpinner from '../components/LoaderSpinner.vue'
import PostComment from '../components/PostComment.vue'
import PostCommentForm from '../components/PostCommentForm.vue'
import HeroBannerItem from '@/components/HeroBannerItem.vue'
import { fetchPost, fetchComments, addComment } from '@/api'
import type { Post, Comment } from '../types/interfaces'

const route = useRoute()
const post = ref<Post | null>(null)
const comments = ref<Comment[]>([])
const isLoading = ref(true)

onMounted(async () => {
  let postId = route.params.id

  if (Array.isArray(postId)) {
    postId = postId[0]
  }

  try {
    const postResponse = await fetchPost(postId)
    post.value = postResponse.data

    const commentsResponse = await fetchComments(postId)
    comments.value = commentsResponse.data
  } catch (error) {
    console.error('Error fetching post or comments:', error)
  } finally {
    isLoading.value = false
  }
})

const handleCommentSubmit = async (commentData: { email: string; body: string }) => {
  let postId = route.params.id

  if (Array.isArray(postId)) {
    postId = postId[0]
  }

  try {
    const newCommentResponse = await addComment(postId, commentData)

    comments.value.push(newCommentResponse.data)
  } catch (error) {
    console.error('Error adding new comment:', error)
  }
}
</script>

<template>
  <div>
    <LoaderSpinner v-if="isLoading" />
    <div v-else-if="post">
      <HeroBannerItem v-show="true" :fullWidth="true" />

      <div class="separator"></div>

      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>

      <div class="separator"></div>

      <h3>Commentarios</h3>
      <div v-if="comments.length > 0">
        <PostComment v-for="comment in comments" :key="comment.id" :comment="comment" />
      </div>
      <div v-else>
        <p>This post has no comments yet.</p>
      </div>

      <PostCommentForm @submitComment="handleCommentSubmit" />
    </div>
    <div v-else>
      <p>Post not found</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  color: $primary;
  margin-bottom: 20px;
}

h3 {
  color: $primary;
}

.separator {
  margin-bottom: 46px;
}
</style>
