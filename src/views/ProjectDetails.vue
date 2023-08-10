// ProjectDetails.vue

<template>
  <div>
    <h1>{{ project.name }}</h1>
    <p>{{ project.description }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const project = ref({})

onMounted(async () => {
  const response = await axios.get(`/src/assets/projects/${$route.params.category}/${$route.params.id}.json`)
  project.value = response.data
})
</script>
