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
<style scoped>
.app-header {
  --header-padding-left: 2em;
  background-color: black;
  display: flex;
  justify-content: space-between;
  padding-left: var(--header-padding-left);
}
.app-logo {
  aspect-ratio: 1;
  width: 3rem;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("../assets/shared/logo.svg");
}
.line {
  display: none;
}
.button-container {
  display: none;
}
@media (max-width: 48em) {
  .app-header {
    padding-block: 1em;
  }
  .navigation-container {
    position: fixed;
    right: -15em;
    width: 15em;
    height: 100vh;
    padding-top: 10em;
    padding-left: 2em;
    transition: all 0.35 ease;
  }
  .navigation-container--visible {
    right: 0;
  }
  .button-container {
    position: absolute;
    right: 2em;
    height: 3rem;
    z-index: 2;
    display: flex;
    align-items: center;
  }
}
@media (min-width: 48em) {
  .navigation-container {
    --navigation-padding-inline: 2em;
    width: 60%;
    padding-right: var(--navigation-padding-inline);
    padding-left: var(--navigation-padding-inline);
  }
  .header-line {
    position: relative;
    flex-grow: 1;
  }
}
@media (min-width: 75em) {
  .app-header {
    --header-padding-left: 5em;
  }
  .navigation-container {
    --navigation-padding-inline: 5em;
  }
  .line {
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
