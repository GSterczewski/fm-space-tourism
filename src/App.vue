<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import AppHeader from "@/components/AppHeader.vue";
import AppNavigation from "@/components/AppNavigation.vue";
import routes from "@/router/routes";
export default defineComponent({
  components: { AppHeader, AppNavigation },
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
  <div class="layout-wrapper" :class="backgroundImage">
    <app-header>
      <app-navigation :routes="routes" />
    </app-header>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./style/global.scss";
.layout-wrapper {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
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
