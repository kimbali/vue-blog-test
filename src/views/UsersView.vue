<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const userNumber = ref<string>('')
const inputError = ref<string>('')

const router = useRouter()

// Regular expression to validate numbers between 1 and 10
const numberRegex = /^(10|[1-9])$/

function validateInput() {
  inputError.value = ''
  // Remove non-digit characters
  if (typeof userNumber.value === 'string') {
    userNumber.value = userNumber.value.replace(/\D/g, '')
  }

  if (!numberRegex.test(userNumber.value)) {
    inputError.value = 'Invalid ID'
  }
}

function handleSubmit() {
  if (userNumber.value) {
    router.push(`/user/${userNumber.value}`)
  }
}
</script>

<template>
  <div>
    <div class="separator"></div>
    <h1 class="title">Localizador de usuarios</h1>

    <div class="form-container">
      <form @submit.prevent="handleSubmit">
        <label for="userNumber">UserId</label>
        <input
          type="number"
          id="userNumber"
          v-model="userNumber"
          required
          min="1"
          max="10"
          @input="validateInput"
        />
        <p class="sublabel">Debe ser un ID válido (1-10)</p>
        <button type="submit" :disabled="!!inputError">Submit</button>

        <p class="error" v-if="inputError">{{ inputError }}</p>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.separator {
  height: 64px;
}
.title {
  text-align: center;
}

.form-container {
  max-width: 252px;
  margin: 46px auto;
  padding: 20px;
  box-shadow: $shadow;
  border-radius: $radius-element;
}

.sublabel {
  color: $primary-dec;
  font-size: 12px;
  margin: 4px 0 24px;
}

button {
  width: 100%;
}

.error {
  color: red;
  font-size: 12px;
  text-align: center;
}
</style>
