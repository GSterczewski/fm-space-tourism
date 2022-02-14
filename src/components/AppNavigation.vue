<script lang="ts">
import { defineComponent } from "vue";
import NavLink from "./NavLink.vue";
type Route = {
  to: string;
  pageTitle: string;
  pageNumber: string;
};

export default defineComponent({
  name: "AppNavigation",
  components: { NavLink },
  props: {
    routes: {
      type: Array as () => Route[],
    },
  },
});
</script>
<template>
  <nav class="app-navigation">
    <ul>
      <li v-for="route in routes" :key="route.pageTitle">
        <nav-link
          :to="route.to"
          :pageTitle="route.pageTitle"
          :pageNumber="route.pageNumber"
        />
      </li>
    </ul>
  </nav>
</template>
<style scoped>
.app-navigation > ul {
  display: flex;
  list-style: none;
  justify-content: space-between;
}
@media (max-width: 48em) {
  .app-navigation > ul {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
