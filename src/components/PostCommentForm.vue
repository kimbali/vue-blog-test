<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['submitComment'])
const comment = ref('')
const email = ref('')

const submitForm = () => {
  if (comment.value && email.value) {
    emit('submitComment', {
      email: email.value,
      body: comment.value
    })

    comment.value = ''
    email.value = ''
  }
}
</script>

<template>
  <div class="comment-form">
    <h3>Dejanos tu opinión</h3>
    <input v-model="email" placeholder="Email" />
    <textarea v-model="comment" placeholder="Deja tu comentario aqui"></textarea>
    <button @click="submitForm">Comentar</button>
  </div>
</template>

<style scoped lang="scss">
h3 {
  color: $primary;
}

.comment-form {
  margin-top: 20px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}
</style>
