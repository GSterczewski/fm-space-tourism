<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeroButton",
});
</script>
<template>
  <router-link
    to="/destination"
    class="hero-button shadow no-outline color-dark bg-primary ff-serif"
  >
    <slot />
  </router-link>
</template>

<style scoped lang="scss">
.hero-button {
  display: grid;
  place-items: center;

  text-decoration: none;
  width: 9.375rem;
  aspect-ratio: 1;
  border-radius: 50%;
  font-size: 1.25rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: 0.25s ease-out;
  border: none;
  cursor: pointer;

  @media (min-width: breakpoint(medium)) {
    font-size: 2rem;
    width: 15.125rem;
  }
  @media (min-width: breakpoint(large)) {
    width: 17.125rem;
  }
}
.shadow {
  --shadow-color: hsl(var(--color-primary) / 0.2);
  --shadow-size: 2.5em;
  &:hover,
  &:focus {
    box-shadow: 0 0 0 var(--shadow-size) var(--shadow-color);
  }
}
</style>
