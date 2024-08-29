<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineProps } from 'vue'
import mapboxgl from 'mapbox-gl'

// Define props for lat and lng
const props = defineProps<{
  lat: string
  lng: string
}>()

const mapContainer = ref<HTMLDivElement | null>(null)
const map = ref<mapboxgl.Map | null>(null)

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

onMounted(() => {
  if (mapContainer.value) {
    map.value = new mapboxgl.Map({
      container: mapContainer.value,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [parseFloat(props.lng), parseFloat(props.lat)],
      zoom: 4
    })

    // Add a marker at the provided lat and lng
    new mapboxgl.Marker().setLngLat([parseFloat(props.lng), parseFloat(props.lat)]).addTo(map.value)
  }
})

onUnmounted(() => {
  if (map.value) {
    map.value.remove()
    map.value = null
  }
})
</script>

<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<style>
.map-container {
  flex: 1;
  height: 100%;
}
</style>
