<script setup lang="ts">
import { defineProps } from 'vue'

interface Post {
  id: number
  title: string
  body: string
}

const props = defineProps<{ post: Post }>()
</script>

<template>
  <router-link :to="{ name: 'SinglePost', params: { id: post.id } }">
    <div class="post-card">
      <div>
        <h2>{{ post.title }}</h2>
        <p>{{ post.body.substring(0, 100) }}...</p>
      </div>

      <div>Ver post</div>
    </div>
  </router-link>
</template>

<style scoped lang="scss">
.post-card {
  border: thin solid $secondary;
  padding: 24px;
  border-radius: 16px;
  background-color: $content-bg;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin: 0 0 16px;
    color: $secondary;
    text-align: center;
    font-size: 16px;
  }

  p {
    margin: 0 0 24px;
    color: $font-color;
  }
}
</style>
