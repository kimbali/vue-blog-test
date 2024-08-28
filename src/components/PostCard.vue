<script setup lang="ts">
import { defineProps } from 'vue'
import RandomImage from './RandomImage.vue'
import type { Post } from '@/types/interfaces'

defineProps<{ post: Post }>()
</script>

<template>
  <router-link :to="{ name: 'SinglePost', params: { id: post.id } }">
    <div class="post-card">
      <RandomImage :id="post.id" />

      <div class="post-card-content">
        <div>
          <h2>{{ post.title }}</h2>

          <p>{{ post.body.substring(0, 100) }}...</p>
        </div>

        <div>Ver post</div>
      </div>
    </div>
  </router-link>
</template>

<style scoped lang="scss">
.post-card {
  border: thin solid $secondary;
  border-radius: $radius;
  background-color: $content-bg;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  &-content {
    padding: 24px;
  }

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
