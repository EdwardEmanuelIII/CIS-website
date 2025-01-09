<script setup>
  import eventData from '../assets/data.json'
  import { useRoute } from 'vue-router'

  const route = useRoute()

  function event() {
    return eventData[route.params.eventid - 1]
  }
</script>

<template>
  <div style="width:500px; padding: 5%;">
    <p>
      <h1>{{ event().name }}</h1>

      <b>{{ event().description }}</b>
      <br>
      <i class="fa-regular fa-calendar-days"></i><b class="blue">{{ event().date }}</b>
      <b class="blue">{{ event().time }}</b>
      <br>
      <i class="fa-regular fa-compass"></i><b class="blue">{{ event().location }}</b>
    </p>
  </div>
</template>

<style scoped>
  h1 {
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: var(--color-heading);
  }
</style>
