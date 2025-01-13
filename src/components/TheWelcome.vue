<script setup>
import WelcomeItem from './WelcomeItem.vue'
import CalendarIcon from './icons/IconCalendar.vue'
import EventIcon from './icons/IconEvent.vue'
import BriefcaseIcon from './icons/IconBriefcase.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import HeartIcon from './icons/IconHeart.vue'
import PeopleIcon from './icons/IconPeople.vue'
</script>

<template >
  <RouterLink to="/events">
    <WelcomeItem class="rightAlign">
      <template #icon>
        <EventIcon />
      </template>
      <template #heading><p class="title">Meetings and Activities</p></template>
      <p class="font-color">
        Click here for the full list of upcoming events and meetings!
      </p>
    </WelcomeItem>
  </RouterLink>

  <RouterLink to="/resources">
    <WelcomeItem class="rightAlign">
      <template #icon>
        <BriefcaseIcon />
      </template>
      <template #heading><p class="title">Career Resources Page</p></template>
      <p class="font-color">
        Looking to improve your marketablility to potential employers?  Check out our collection of useful career building resources!
      </p>
    </WelcomeItem>
  </RouterLink>

  <RouterLink to="/listings">
    <WelcomeItem class="rightAlign">
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading><p class="title">Job and Internship Listings</p></template>
      <p class="font-color">
        Looking for jobs or internships in the Joplin area?  Take a look at our list!
      </p>
    </WelcomeItem>
  </RouterLink>

  <RouterLink to="/alumni">
    <WelcomeItem class="rightAlign">
      <template #icon>
        <HeartIcon />
      </template>
      <template #heading><p class="title">Alumni Success Stories</p></template>
      <p class="font-color">
        Wanna hear some success stories of past CIS majors from Missouri Southern State University?
      </p>
    </WelcomeItem>
  </RouterLink>

  <RouterLink to="/aboutus">
    <WelcomeItem class="rightAlign">
      <template #icon>
        <PeopleIcon />
      </template>
      <template #heading><p class="title">About Us</p></template>
      <p class="font-color">
        Want to get more involved with campus and computer science? Join the CRIC club!
      </p>
    </WelcomeItem>
  </RouterLink>
</template>

<style scoped>
.h3 {
  font-size: 1.5rem;
  font-weight: 500;
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

.title {
  font-size: 1.7rem;
}

.font-color {
  color: black;
}

.rightAlign {
  background-color: #e0bb27c9;
  color: rgba(235, 235, 235, 0.64);
}

.rightAlign:hover {
  background-color: #344966;
  border: 2px solid #dddddd;
}
</style>