<script lang="ts">
import { defineComponent, ref } from "vue";
import HamburgerButton from "./HamburgerButton.vue";
export default defineComponent({
  name: "AppHeader",
  components: { HamburgerButton },
  setup() {
    const isMenuOpen = ref(false);
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };
    return {
      isMenuOpen,
      toggleMenu,
    };
  },
});
</script>

<template>
  <header class="app-header">
    <div class="app-logo"></div>
    <div class="header-line">
      <hr class="line" />
    </div>
    <div
      class="navigation-container"
      :class="{ 'navigation-container--visible': isMenuOpen }"
    >
      <slot />
    </div>
    <div class="button-container">
      <HamburgerButton :isOpen="isMenuOpen" :onClick="toggleMenu" />
    </div>
  </header>
</template>
<style scoped lang="scss">
.app-header {
  --padding-left: 2rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: breakpoint(medium)) {
    padding-block: 1rem;
    padding-left: var(--padding-left);
  }
}
.app-logo {
  aspect-ratio: 1;
  width: 3rem;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("../assets/shared/logo.svg");
}
.navigation-container {
  background-color: hsl(var(--color-dark) / 0.75);
  transition: all 0.35 ease;

  @supports (backdrop-filter: blur(0.1rem)) {
    background-color: hsl(var(--color-primary) / 0.15);
    backdrop-filter: blur(0.3rem);
  }
  @media (max-width: breakpoint(medium)) {
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(100%);
    width: 15em;
    height: 100vh;
    padding-top: 10em;
    padding-left: 2em;
  }
  @media (min-width: breakpoint(medium)) {
    --navigation-padding-inline: 2em;
    width: 60%;
    padding-right: var(--navigation-padding-inline);
    padding-left: var(--navigation-padding-inline);
  }
  @media (min-width: breakpoint(large)) {
    --navigation-padding-inline: 5em;
  }

  &--visible {
    transform: translateX(0);
  }
}

.line {
  display: none;
}
.button-container {
  display: none;
  @media (max-width: breakpoint(medium)) {
    position: absolute;
    right: var(--padding-left);
    height: 3rem;
    z-index: 2;
    display: flex;
    align-items: center;
  }
}

.header-line {
  @media (min-width: breakpoint(medium)) {
    position: relative;
    flex-grow: 1;
  }
}
.line {
  @media (min-width: breakpoint(large)) {
    display: block;
    position: absolute;
    left: 2em;
    top: 50%;
    border-bottom: 1px solid hsl(var(--color-primary));
    opacity: 0.25;
    width: 100%;
  }
}
</style>
