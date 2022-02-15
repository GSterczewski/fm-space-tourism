<script lang="ts">
import { defineComponent } from "vue";
import useContent from "@/composables/useContent";
import useCarousel from "@/composables/useCarousel";
import PageTitle from "@/components/PageTitle.vue";
export default defineComponent({
  name: "Destination",
  components: { PageTitle },
  setup() {
    const { destinations } = useContent();
    const { changeItem, selectedItem } = useCarousel(destinations);
    return {
      destinations,
      changeItem,
      selectedItem,
    };
  },
});
</script>
<template>
  <main>
    <page-title pageTitle="pick your destination" pageNumber="01" />
    <article class="destination">
      <img :src="require(`@/assets/destination/${selectedItem.image}.webp`)" />
      <section>
        <h2 class="heading ff-serif fs-800">{{ selectedItem.name }}</h2>
        <p class="color-accent">{{ selectedItem.brief }}</p>
      </section>
      <hr />
      <section>
        <h3 class="heading ls-200">avg. distance</h3>
        <p>{{ selectedItem.distance }}</p>
        <h3 class="heading">est. travel time</h3>
        <p>{{ selectedItem.travelTime }}</p>
      </section>
    </article>
  </main>
</template>
<style scoped></style>
