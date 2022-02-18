<script lang="ts">
import { defineComponent } from "vue";
import useContent from "@/composables/useContent";
import useCarousel from "@/composables/useCarousel";
import VTab from "@/components/VTab.vue";
// import PageWrapper from "@/components/PageWrapper.vue";
import DestinationStats from "@/components/DestinationStats.vue";
import DestinationInfo from "@/components/DestinationInfo.vue";
import PageTitle from "@/components/PageTitle.vue";
export default defineComponent({
  name: "Destination",
  components: { PageTitle, VTab, DestinationStats, DestinationInfo },
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
  <div class="page-wrapper destination-page">
    <page-title pageTitle="pick your destination" pageNumber="01" />
    <article class="destination">
      <img :src="require(`@/assets/destination/${selectedItem.image}.webp`)" />
      <div class="destination__content">
        <div class="tabs">
          <v-tab
            v-for="(destination, index) in destinations"
            :key="destination.name"
            :isActive="destination.name === selectedItem.name"
            :onClick="() => changeItem(index)"
            >{{ destination.name }}</v-tab
          >
        </div>
        <section>
          <destination-info
            :name="selectedItem.name"
            :brief="selectedItem.brief"
          />
        </section>

        <section class="destination__stats">
          <destination-stats
            :distance="selectedItem.distance"
            :travelTime="selectedItem.travelTime"
          />
        </section>
      </div>
    </article>
  </div>
</template>
<style scoped lang="scss">
.destination-page {
  --vertical-flow: 2rem;
  display: grid;
  row-gap: var(--vertical-flow);
  @media (min-width: breakpoint(large)) {
    grid-template-rows: auto minmax(66px, 10vh) 50vh 1fr;
    row-gap: 0;
  }
}
.destination {
  padding-inline: 1.5rem;
  padding-bottom: 3rem;
  display: grid;
  row-gap: var(--vertical-flow);
  justify-items: center;
  & > img {
    aspect-ratio: 1;
    width: 40vw;
    max-width: 24rem;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (min-width: breakpoint(large)) {
    grid-row: 3;
    grid-template-columns: 5% 34% 12% 34% 1fr;
    row-gap: 0;
    align-items: center;
    padding-inline: 0;
    padding-bottom: 0;

    & > img {
      grid-column: 2;
      width: 25vw;
    }

    &__content {
      grid-column: 4;
    }
  }
}
.tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  @media (min-width: breakpoint(large)) {
    justify-content: start;
  }
}
</style>
