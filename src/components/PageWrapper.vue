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
  padding-top: clamp(2rem, 8vh, 5rem);
  padding-bottom: 3rem;
  &__title {
    padding-inline: clamp(1.5rem, 5vw, 10rem);

    @media (min-width: breakpoint(large)) {
      padding-left: 10vw;
    }
  }
}
</style>
