<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/AppHeader.vue";
export default defineComponent({
  name: "AppLayout",
  components: { AppHeader },
  props: {
    background: {
      type: String,
    },
  },
});
</script>
<template>
  <div class="layout-wrapper layout-grid" :class="`background--${background}`">
    <div class="header-container">
      <app-header />
    </div>
    <div class="content-container">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
$backgrounds: ("home", "destination", "crew", "technology");
@each $background in $backgrounds {
  .background--#{$background} {
    background-image: url("../assets/#{$background}/background-#{$background}-mobile.jpg");
    @media (min-width: breakpoint("medium")) {
      background-image: url("../assets/#{$background}/background-#{$background}-tablet.jpg");
    }
    @media (min-width: breakpoint("large")) {
      background-image: url("../assets/#{$background}/background-#{$background}-desktop.jpg");
    }
  }
}
.layout-wrapper {
  min-height: 100vh;
  padding-bottom: 2rem;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  @media (min-width: breakpoint(medium)) {
    padding-bottom: 0;
  }
  @media (min-width: breakpoint(large)) {
    text-align: start;
  }
}
.layout-grid {
  display: grid;
  grid-template-columns: 1.5rem 1fr 1.5rem;
  grid-template-rows: auto 1fr;

  @media (min-width: breakpoint(large)) {
    grid-template-columns: 4vw 7vw 1fr;
    grid-template-rows: 4vh auto 1fr;
  }
}
.header-container {
  grid-column: 2 / span all;
  @media (min-width: breakpoint(large)) {
    grid-row: 2;
  }
}
.content-container {
  grid-column: 1 / span all;
  @media (min-width: breakpoint(large)) {
    grid-column: 3;
    grid-row: 3;
  }
}
</style>
