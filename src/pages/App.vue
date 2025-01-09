<template>
  <body>
  <div class="header">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      |
      <RouterLink to="/resources">Resources</RouterLink>
      |
      <RouterLink to="/listings">Listings</RouterLink>
      |
      <RouterLink to="/events">Events</RouterLink>
      |
      <RouterLink to="/alumni">Alumni Stories</RouterLink>
      |
      <RouterLink to="/aboutus">About Us</RouterLink>
    </nav>
  </div>
  <main>
    <RouterView />
  </main>
</body>
</template>

<style scoped>
  .header {
    padding: 15px;
    width: 1024px;
    text-align: center;
    background: #162d4e;
    color: white;
    font-size: 30px;
    position: fixed;
    z-index:100;

  }

  main {
    float: left;
    padding: 10% 0 0 0
  }
</style>