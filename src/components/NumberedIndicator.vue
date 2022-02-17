<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NumberedIndicator",
  props: {
    onClick: {
      type: Function,
      default: () => {
        console.warn("NumberedIndicator: onClick not registered");
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
    class="numbered-indicator no-outline fs-600"
    :class="{ 'numbered-indicator--active': isActive }"
    @click="() => onClick()"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.numbered-indicator {
  --size: 2.5rem;
  width: var(--size);
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid hsl(var(--color-primary) / 0.5);
  border-radius: 50%;
  color: hsl(var(--color-primary));
  cursor: pointer;
  transition: background-color 0.35s ease-in, border-color 0.35s ease-in;
}
.numbered-indicator:not(.numbered-indicator--active):hover,
.numbered-indicator:not(.numbered-indicator--active):focus {
  border-color: hsl(var(--color-primary));
}
.numbered-indicator--active {
  background-color: hsl(var(--color-primary));
  color: hsl(var(--color-dark));
}
@media (min-width: breakpoint(large)) {
  .numbered-indicator {
    --size: 3.5rem;
  }
}
</style>
