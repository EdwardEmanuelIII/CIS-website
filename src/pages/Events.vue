<script setup>
  import eventData from '../assets/data.json'
</script>

<template>
  <div style="width:500px; padding: 5%;">
    <p v-for="event in eventData">
      <RouterLink class='h1' :to="'/events/' + event.id">{{ event.name }}</RouterLink>
      <br>
      <b>{{ event.description }}</b>
      <br>
      <i class="fa-regular fa-calendar-days"></i><b class="blue">{{ event.date }}</b>
      <b class="blue">{{ event.time }}</b>
      <br>
      <i class="fa-regular fa-compass"></i><b class="blue">{{ event.location }}</b>
      <br>
    </p>
  </div>
</template>

<style scoped>
  h1, .h1 {
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: var(--color-heading);
  }
</style>
