<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VTab",
  props: {
    isActive: {
      type: Boolean,
      default: () => false,
    },
    onClick: {
      type: Function,
      default: () => {
        console.warn("VTab : onClick not registered");
      },
    },
  },
});
</script>

<template>
  <button
    @click="() => onClick()"
    class="tab color-primary no-outline"
    :class="{ 'tab--active': isActive }"
  >
    <slot />
  </button>
</template>
<style scoped>
.tab {
  position: relative;
  cursor: pointer;
  border: none;
  background: none;
  padding-bottom: 0.5em;
}
.tab::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: hsl(var(--color-primary) / 0.5);
  transition: width 0.35s ease;
}
.tab:hover::after,
.tab:focus::after {
  width: 100%;
}
.tab--active::after {
  width: 100%;
  background-color: hsl(var(--color-primary));
}
</style>
