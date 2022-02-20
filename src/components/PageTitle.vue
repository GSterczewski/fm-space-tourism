<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageTile",
  props: {
    pageNumber: {
      type: String,
    },
    pageTitle: {
      type: String,
    },
  },
});
</script>

<template>
  <h1 class="heading page-title fs-500">
    <span class="color-gray">{{ pageNumber }}</span>
    <span>{{ pageTitle }}</span>
  </h1>
</template>
<style scoped lang="scss">
.page-title {
  display: flex;
  gap: 1rem;
  letter-spacing: var(--ls-250);
  justify-content: center;

  @media (min-width: breakpoint(medium)) {
    justify-content: start;
    letter-spacing: var(--ls-300);
    padding-left: 4vw;
  }
  @media (min-width: breakpoint(large)) {
    letter-spacing: var(--ls-400);
    padding-left: 0;
    gap: 2rem;
  }
}
</style>
