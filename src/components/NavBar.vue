<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <RouterLink to="/" class="navbar-brand">LOREM BLOG</RouterLink>

      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/users" class="nav-link" :class="{ active: route.name === 'Home' }"
            >Encuentra usuarios
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: white;
  padding: 12px 24px;
  box-shadow: $shadow;
  z-index: 1000;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  font-size: 24px;
  color: $primary;
  text-decoration: none;
}

.navbar-nav {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin-left: 24px;
}

.nav-link {
  &.active {
    font-weight: bold;
    color: $primary;
  }
}
</style>
