<script lang="ts">
import { defineComponent } from "vue";
import HeroButton from "@/components/HeroButton.vue";
export default defineComponent({
  name: "Home",
  components: { HeroButton },
});
</script>
<template>
  <div class="home">
    <div class="home__content">
      <h1 class="heading">
        <span class="d-block fs-500 color-accent"
          >so, you want to travel to</span
        >
        <span class="d-block fs-900 ff-serif ls-1">space</span>
      </h1>
      <p class="color-accent">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
    <div class="home__button-container">
      <hero-button>explore</hero-button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.home {
  display: grid;
  text-align: center;
  padding-inline: 1.5em;
  align-items: center;
  justify-content: center;
  @media (min-width: breakpoint(large)) {
    grid-template-columns: 1fr 1fr 10vw;
    justify-content: center;
    text-align: start;
  }

  &__content {
    max-width: 65ch;
    @media (min-width: breakpoint(large)) {
      max-width: 62ch;
      grid-column: 1;
    }
  }

  &__button-container {
    @media (min-width: breakpoint(large)) {
      justify-self: end;
    }
  }
}
</style>
