<script lang="ts">
import { defineComponent } from "vue";
import useContent from "@/composables/useContent";
import useCarousel from "@/composables/useCarousel";
import VTab from "@/components/VTab.vue";
import PageWrapper from "@/components/PageWrapper.vue";
import DestinationStats from "@/components/DestinationStats.vue";
import DestinationInfo from "@/components/DestinationInfo.vue";
export default defineComponent({
  name: "Destination",
  components: { PageWrapper, VTab, DestinationStats, DestinationInfo },
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
  <page-wrapper pageTitle="pick your destination" pageNumber="01">
    <article class="destination">
      <div class="destination__image">
        <img
          :src="require(`@/assets/destination/${selectedItem.image}.webp`)"
        />
      </div>
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
  </page-wrapper>
</template>
<style scoped lang="scss">
.destination {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-inline: 1.5rem;
  padding-top: 5vh;
  @media (min-width: breakpoint(large)) {
    min-height: 65h;
    padding-top: 0;
    padding-inline: 10vw;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 3rem 3rem auto;
    gap: 0;
    column-gap: 3rem;
  }
  @media (orientation: landscape) and (min-height: 1000px) {
    padding-top: 8vh;
  }
  @media (orientation: portrait) and (min-height: 1300px) {
    padding-top: 10vh;
  }

  &__image {
    display: flex;
    justify-content: flex-start;
    padding-left: 5vw;
    align-items: flex-start;

    & > img {
      aspect-ratio: 1/1;
      height: auto;
      width: 90%;
      max-width: 25rem;
    }
    @media (min-width: breakpoint(large)) {
      grid-column: 1;
      grid-row: 3;

      & > img {
        width: 50vh;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    @media (min-width: breakpoint(large)) {
      text-align: start;
      grid-row: 2/4;
      grid-column: 2;
      justify-content: center;
    }
  }
  &__stats {
    max-width: 30rem;
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
