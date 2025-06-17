<template>
  <body class="background">
    <div class="background">
    <div class="header">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        |
        <RouterLink to="/resources">Resources</RouterLink>
        |
        <RouterLink to="/highlights">Highlights</RouterLink>
        |
        <RouterLink to="/events">Events</RouterLink>
        |
        <RouterLink to="/leadership">Leadership</RouterLink>
        |
        <RouterLink to="/aboutus">About Us</RouterLink>
      </nav>
    </div>
    <main>
      <RouterView />
    </main>
  </div>
  </body>
</template>

<style scoped>
  .header {
    padding: 15px;
    width: 1024px;
    text-align: center;
    background: #056021;
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