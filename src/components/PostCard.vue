<script setup lang="ts">
import { defineProps } from 'vue'
import RandomImage from './RandomImage.vue'
import type { Post } from '@/types/interfaces'

defineProps<{ post: Post }>()
</script>

<template>
  <router-link :to="{ name: 'SinglePost', params: { id: post.id } }">
    <div class="post-card">
      <RandomImage :id="post.id" isBackground />

      <div class="post-card-content">
        <div>
          <h2>{{ post.title }}</h2>
          <p>{{ post.body.substring(0, 100) }}...</p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped lang="scss">
.post-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 12px;
  border-radius: $radius-element;

  &:hover {
    box-shadow: $shadow;
  }

  &-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin-top: 16px;
  }

  h2 {
    margin: 0 0 8px;
    color: $title-color;
    font-size: 14px;
  }

  p {
    color: $font-color;
    margin-bottom: 0;
    text-transform: lowercase;

    &::first-letter {
      text-transform: uppercase;
    }
  }
}
</style>
