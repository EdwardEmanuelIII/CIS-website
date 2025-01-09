<script setup>
  import WelcomeSection from '../components/WelcomeSection.vue'
  import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div style="width:500px; padding: 5%; position: fixed">
    <img alt="Vue logo" class="logo" src="../assets/plaster.jpeg" width="400" height="266"/>

    <div class="wrapper">
      <WelcomeSection msg="CRIC Club" />
    </div>

  </div>
  <div style="width:500px; padding: 5%; margin-left: 100%">
    <TheWelcome />
  </div>
</template>

<style scoped>
</style>
