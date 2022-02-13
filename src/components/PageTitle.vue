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
<style scoped>
.page-title {
  display: flex;
  gap: 1rem;
  letter-spacing: var(--ls-1);
}

@media (min-width: 50em) {
  .page-title {
    letter-spacing: var(--ls-2);
  }
}
@media (min-width: 75em) {
  .page-title {
    letter-spacing: var(--ls-3);
    gap: 2rem;
  }
}
</style>
