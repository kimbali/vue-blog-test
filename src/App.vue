<script setup lang="ts">
import HeroBanner from './components/HeroBanner.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div id="app">
    <NavBar />

    <HeroBanner />

    <div class="separtor" />

    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
main {
  max-width: 1200px;
  margin: 0 24px 64px;

  @media ($desktop) {
    margin: 0 auto 64px;
    padding: 0 24px;
  }
}

.separtor {
  margin-top: 64px;
}
</style>
