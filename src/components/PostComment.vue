<script setup lang="ts">
import { defineProps } from 'vue'
import type { Comment } from '@/types/interfaces'

const props = defineProps<{ comment: Comment }>()
</script>

<template>
  <div class="comment">
    <p class="email">{{ comment.email }}</p>
    <p>{{ comment.body }}</p>
  </div>
</template>

<style scoped lang="scss">
.comment {
  margin-bottom: 32px;
}

h3 {
  margin-top: 0;
  color: $primary;
}

.email {
  color: $secondary;
  text-transform: lowercase;
  font-weight: bold;

  &::first-letter {
    text-transform: lowercase;
  }
}
</style>
