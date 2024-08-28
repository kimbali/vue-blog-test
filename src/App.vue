<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div id="app">
    <NavBar />

    <div class="separtor" />

    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
main {
  max-width: 1200px;
  margin: 0 24px;

  @media ($desktop) {
    margin: 0 auto;
    padding: 0 24px;
  }
}

.separtor {
  margin-top: 102px;
}
</style>
