<script lang="ts">
import { defineComponent } from "vue";
import useContent from "@/composables/useContent";
import useCarousel from "@/composables/useCarousel";
import CircleIndicator from "@/components/CircleIndicator.vue";
import PageWrapper from "@/components/PageWrapper.vue";
export default defineComponent({
  name: "CrewView",
  components: { CircleIndicator, PageWrapper },
  setup() {
    const { crew } = useContent();
    const { selectedItem, changeItem } = useCarousel(crew);
    return {
      selectedItem,
      changeItem,
      crew,
    };
  },
});
</script>
<template>
  <page-wrapper pageTitle="meet your crew" pageNumber="02">
    <div class="crew crew-grid">
      <div class="crew__img-container">
        <transition name="fade" mode="out-in">
          <img
            :key="selectedItem.image"
            :src="require(`@/assets/crew/${selectedItem.image}.webp`)"
          />
        </transition>
      </div>
      <div class="indicators">
        <circle-indicator
          v-for="(member, index) in crew"
          :key="member.name"
          :onClick="() => changeItem(index)"
          :isActive="member.name === selectedItem.name"
        />
      </div>
      <transition name="fade" mode="out-in">
        <article :key="selectedItem.name">
          <h2 class="heading ff-serif">
            <span class="d-block fs-600 color-gray">{{
              selectedItem.role
            }}</span>
            <span class="fs-700">{{ selectedItem.name }}</span>
          </h2>
          <p class="fs-300 color-accent">
            {{ selectedItem.brief }}
          </p>
        </article>
      </transition>
    </div>
  </page-wrapper>
</template>
<style scoped lang="scss">
.crew {
  height: 100%;
  padding-inline: 1.5rem;
  padding-top: 6vh;

  &__img-container {
    width: 100%;
    display: grid;
    place-items: center;
    overflow: hidden;
    & > img {
      height: 100%;
    }
  }
  & > article > p {
    max-width: 64ch;
    margin-top: 1rem;
  }

  @media (min-width: breakpoint(large)) {
    padding-inline: 0;
    padding-top: 0;

    &__img-container {
      align-items: end;
      justify-items: start;
      & > img {
        max-height: 70vh;
      }
    }
  }
}
.crew-grid {
  display: grid;
  grid-template-rows: 31vh auto 1fr;
  justify-items: center;
  row-gap: 6vh;

  @media (min-width: breakpoint(medium)) {
    grid-template-rows: auto auto 45vh;

    & > article {
      grid-row: 1;
    }

    & > .indicators {
      grid-row: 2;
      align-self: center;
    }

    & > .crew__img-container {
      grid-row: 3;
    }
  }
  @media (min-width: breakpoint(large)) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 20% 50% 30%;
    justify-items: start;
    gap: 0;

    & > .crew__img-container {
      grid-column: 2;
      grid-row: 1 / span all;
    }

    & > article {
      grid-column: 1;
      grid-row: 2;
    }

    & > .indicators {
      grid-column: 1;
      grid-row: 3;
    }
  }
}
.indicators {
  display: flex;
  gap: 1rem;
}
</style>
