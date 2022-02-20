<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "./PageTitle.vue";
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
  <div class="page-wrapper">
    <page-title
      :pageTitle="pageTitle"
      :pageNumber="pageNumber"
      class="page-wrapper__title"
    ></page-title>
    <main>
      <slot />
    </main>
  </div>
</template>
<style scoped lang="scss">
.page-wrapper {
  text-align: center;
  --title-margin-bottom: max(2rem, 3.7vh);
  & > *:first-child {
    margin-bottom: var(--title-margin-bottom);
  }

  @media (min-width: breakpoint(medium)) {
    --title-margin-bottom: max(3.75rem, 5vh);
    & > *:not(:first-child) {
      text-align: start;
    }
  }
  @media (min-width: breakpoint(large)) {
    --title-margin-bottom: 0;
    text-align: start;
  }
}
</style>
