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
<style lang="scss" scoped>
.app-navigation {
  & > ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    text-align: start;
    @media (max-width: breakpoint(medium)) {
      flex-direction: column;
      gap: 2rem;
    }
  }
}
</style>
