<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import AppHeader from "@/components/AppHeader.vue";
import AppNavigation from "@/components/AppNavigation.vue";
import AppLayout from "./components/AppLayout.vue";
import routes from "@/router/routes";
export default defineComponent({
  components: { AppLayout, AppHeader, AppNavigation },
  setup() {
    const backgroundImage = computed(() => {
      const route = useRoute();
      return `background--${String(route.name).toLowerCase()}`;
    });
    return {
      routes,
      backgroundImage,
    };
  },
});
</script>
<template>
  <app-layout class="background" :class="backgroundImage">
    <template v-slot:header>
      <app-header>
        <app-navigation :routes="routes" />
      </app-header>
    </template>
    <template v-slot:content>
      <router-view />
    </template>
  </app-layout>
</template>

<style lang="scss">
@import "./style/global.scss";

.background {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
$backgrounds: ("home", "destination", "crew", "technology");
@each $background in $backgrounds {
  .background--#{$background} {
    background-image: url("./assets/#{$background}/background-#{$background}-mobile.jpg");
    @media (min-width: breakpoint("medium")) {
      background-image: url("./assets/#{$background}/background-#{$background}-tablet.jpg");
    }
    @media (min-width: breakpoint("large")) {
      background-image: url("./assets/#{$background}/background-#{$background}-desktop.jpg");
    }
  }
}
</style>
