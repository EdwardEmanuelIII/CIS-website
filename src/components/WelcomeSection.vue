<script setup>
  defineProps({
    msg: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <div class="greetings">
    <h1 class="blue">{{ msg }}</h1>
    <h3>
      Mission Statement:
      The mission of the Computer Science Club at Missouri Southern State University is to foster a dynamic community of students passionate about technology, programming, and innovation. We aim to provide a collaborative environment for learning, skill-building, and networking, where members can explore the ever-evolving world of computer science. Through workshops, guest speakers, hackathons, and projects, we seek to empower students with the knowledge and experience to thrive in the tech industry and make meaningful contributions to the global digital landscape. Our goal is to inspire creativity, promote diversity, and cultivate leadership within the field of computer science.
    </h3>
  </div>
</template>

<style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
  }

  h3 {
    font-size: 1rem;
  }

  .greetings h1,
  .greetings h3 {
    text-align: center;
  }

  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
</style>
