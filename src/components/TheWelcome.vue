<script setup>
import WelcomeItem from './WelcomeItem.vue'
import CalendarIcon from './icons/IconCalendar.vue'
import EventIcon from './icons/IconEvent.vue'
import BriefcaseIcon from './icons/IconBriefcase.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import HeartIcon from './icons/IconHeart.vue'
import PeopleIcon from './icons/IconPeople.vue'

import eventData from '../assets/data.json'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')

function lastFive() {
  console.log(eventData)
  var keys = eventData.slice(eventData.length - 4)

  return keys
}
</script>

<template>
  <WelcomeItem class="rightAlign">
    <template #icon>
      <EventIcon />
    </template>
    <template #heading><RouterLink to="/events" class="h3">Meetings and Activities</RouterLink></template>
      Here is a list of some of our upcoming events and meetings!
      <RouterLink to="/events">Click here for the full list!</RouterLink>

        <p v-for="event in lastFive()" :key="event.name" style="padding: 5px 0px 15px 10px; text-transform: capitalize;">

          <RouterLink class='h1' :to="'/events/' + event.id" style="font-size:1.2rem; color:white;">
          <i class="fa-regular fa-calendar-days"></i> {{ event.name }}</RouterLink>
          <hr>
          <b>{{ event.description }}</b>
          <br>
          <b class="blue">{{ event.date }}</b>
          <b class="blue">{{ event.time }}</b>
        </p>

  </WelcomeItem>

  <WelcomeItem class="rightAlign">
    <template #icon>
      <BriefcaseIcon />
    </template>
    <template #heading><RouterLink to="/resources" class="h3">Career Resources Page</RouterLink></template>

    Looking to improve your marketablility to potential employers?  Check out our collection of useful <RouterLink to="/resources">career building resources!</RouterLink>
  </WelcomeItem>

  <WelcomeItem class="rightAlign">
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading><RouterLink to="/listings" class="h3">Job and Internship Listings</RouterLink></template>
    Looking for jobs or internships in the Joplin area?  Take a look at <RouterLink to="/listings">our list!</RouterLink>
  </WelcomeItem>

  <WelcomeItem class="rightAlign">
    <template #icon>
      <HeartIcon />
    </template>
    <template #heading><RouterLink to="/alumni" class="h3">Alumni Success Stories</RouterLink></template>
    Wanna hear some success stories of past CIS majors from Missouri Southern State University?  <RouterLink to="/alumni">We got you!</RouterLink>
  </WelcomeItem>
  <WelcomeItem class="rightAlign">
    <template #icon>
      <PeopleIcon />
    </template>
    <template #heading><RouterLink to="/aboutus" class="h3">About Us</RouterLink></template>

    Interested in joining the CRIC club? <RouterLink to="/aboutus">Click here!</RouterLink>
  </WelcomeItem>
</template>

<style scoped>
.h3 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

td, th {
border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  font-size: 0.85rem;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>