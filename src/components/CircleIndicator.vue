<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CircleIndicator",
  props: {
    onClick: {
      type: Function,
      default: () => {
        console.warn("CircleIndicator: onClick not registered");
      },
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<template>
  <button
    class="circle-indicator no-outline"
    :class="{ 'circle-indicator--active': isActive }"
    @click="() => onClick()"
  ></button>
</template>

<style scoped lang="scss">
.circle-indicator {
  --size: 0.875rem;
  border: none;
  background-color: hsl(var(--color-primary) / 0.2);
  width: var(--size);
  aspect-ratio: 1;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.35s ease-in;

  &--active {
    background-color: hsl(var(--color-primary));
  }
  @media (min-width: breakpoint(large)) {
    --size: 1rem;
  }
}
.circle-indicator:not(.circle-indicator--active):hover,
.circle-indicator:not(.circle-indicator--active):focus {
  background-color: hsl(var(--color-primary) / 0.5);
}
</style>
