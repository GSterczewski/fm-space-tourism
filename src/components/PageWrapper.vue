<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/components/PageTitle.vue";
export default defineComponent({
  name: "PageWrapper",
  components: { PageTitle },
  props: {
    pageTitle: {
      type: String,
    },
    pageNumber: {
      type: String,
    },
  },
});
</script>
<template>
  <div class="page-wrapper page-wrapper-grid">
    <page-title :pageTitle="pageTitle" :pageNumber="pageNumber"></page-title>
    <div>
      <slot />
    </div>
  </div>
</template>
<style scoped lang="scss">
.page-wrapper {
  height: 100%;
}
.page-wrapper-grid {
  --top-row: 4vh;
  display: grid;
  grid-template-rows: var(--top-row) auto 1fr;
  & > *:first-child {
    grid-row: 2;
  }
  & > *:last-child {
    grid-row: 3;
  }
  @media (min-width: breakpoint(large)) {
    --top-row: 8vh;
  }
}
</style>
