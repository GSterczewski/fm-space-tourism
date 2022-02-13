<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HamburgerButton",
  props: {
    onClick: {
      type: Function,
      default: () => {
        console.warn("HamburgerButton: onClick handler not registered");
      },
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
<template>
  <button
    class="hamburger-button no-outline"
    :class="{ 'hamburger-button--open': isOpen }"
    @click="() => onClick()"
  >
    <svg
      v-if="isOpen"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
    >
      <g fill="currentColor" fill-rule="evenodd">
        <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
        <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
      </g>
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="21">
      <g fill="currentColor" fill-rule="evenodd">
        <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
      </g>
    </svg>
  </button>
</template>
<style scoped>
.hamburger-button {
  width: 1.5rem;
  height: 21px;
  border: none;
  cursor: pointer;
  background: none;
  color: hsl(var(--color-accent));
}
.hamburger-button:hover,
.hamburger-button:focus {
  color: hsl(var(--color-primary));
}
</style>
