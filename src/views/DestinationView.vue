<script lang="ts">
import { defineComponent } from "vue";
import useContent from "@/composables/useContent";
import useCarousel from "@/composables/useCarousel";
import VTab from "@/components/VTab.vue";
import DestinationStats from "@/components/DestinationStats.vue";
import DestinationInfo from "@/components/DestinationInfo.vue";
import PageWrapper from "@/components/PageWrapper.vue";
export default defineComponent({
  name: "DestinationView",
  components: {
    PageWrapper,
    VTab,
    DestinationStats,
    DestinationInfo,
  },
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
    <article class="destination destination-grid" :title="selectedItem.name">
      <transition name="slide-right" mode="out-in">
        <img
          :src="require(`@/assets/destination/${selectedItem.image}.webp`)"
          :key="selectedItem.image"
          :alt="selectedItem.name"
        />
      </transition>
      <div class="destination__content destination-grid__content">
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
          <transition name="slide-right" mode="out-in">
            <destination-info
              :key="selectedItem.name"
              :name="selectedItem.name"
              :brief="selectedItem.brief"
            />
          </transition>
        </section>

        <section class="destination__stats">
          <transition name="slide-left" mode="out-in">
            <destination-stats
              :key="selectedItem.name"
              :distance="selectedItem.distance"
              :travelTime="selectedItem.travelTime"
            />
          </transition>
        </section>
      </div>
    </article>
  </page-wrapper>
</template>
<style scoped lang="scss">
.destination {
  --row-gap: clamp(2rem, 5vh, 4rem);
  height: 100%;
  padding-inline: 1.5rem;
  padding-top: var(--row-gap);
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
  @media (min-width: breakpoint(medium)) {
    padding-top: 0;
  }
  @media (min-width: breakpoint(large)) {
    padding-inline: 0;

    & > img {
      width: 25vw;
    }
  }
}
.destination-grid {
  display: grid;
  justify-items: center;
  gap: var(--row-gap);
  align-items: center;
  @media (min-width: breakpoint(medium)) {
    gap: var(--row-gap);
    grid-template-rows: 1fr auto auto 1fr;
    & > img {
      grid-row: 2;
    }
    &__content {
      grid-row: 3;
    }
  }
  @media (min-width: breakpoint(large)) {
    gap: 0;
    grid-template-columns: 1% 34% 12% 34% 1fr;
    grid-template-rows: 12% 72% 16%;
    & > img {
      grid-column: 2;
      grid-row: 2;
    }

    &__content {
      grid-column: 4;
      grid-row: 2;
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
$slider-timing-in: cubic-bezier(0.44, -0.06, 0.18, 2);
$slider-timing-out: cubic-bezier(0.58, -0.94, 0.46, 0.97);

@mixin slide($x) {
  opacity: 0;
  transform: translateX(#{$x});
}
@mixin slide-transition($timing) {
  transition: transform 350ms $timing, opacity 350ms $timing;
}
.slide-left-enter-active {
  @include slide-transition($slider-timing-in);
}
.slide-left-leave-active {
  @include slide-transition($slider-timing-out);
}
.slide-left-enter-from {
  @include slide(-250px);
}
.slide-left-leave-to {
  @include slide(250px);
}
.slide-right-enter-active {
  @include slide-transition($slider-timing-in);
}
.slide-right-leave-active {
  @include slide-transition($slider-timing-out);
}
.slide-right-enter-from {
  @include slide(250px);
}
.slide-right-leave-to {
  @include slide(-250px);
}
</style>
