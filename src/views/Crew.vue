<script lang="ts">
import { defineComponent } from "vue";
import useContent from "@/composables/useContent";
import useCarousel from "@/composables/useCarousel";
import CircleIndicator from "@/components/CircleIndicator.vue";
import PageTitle from "@/components/PageTitle.vue";
export default defineComponent({
  name: "Crew",
  components: { PageTitle, CircleIndicator },
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
  <div class="page-wrapper page-wrapper--crew">
    <page-title pageTitle="meet your crew" pageNumber="02" />
    <div class="crew">
      <div class="crew__img-container">
        <img :src="require(`@/assets/crew/${selectedItem.image}.webp`)" />
      </div>
      <div class="indicators">
        <circle-indicator
          v-for="(member, index) in crew"
          :key="member.name"
          :onClick="() => changeItem(index)"
          :isActive="member.name === selectedItem.name"
        />
      </div>
      <article>
        <h2 class="heading ff-serif">
          <span class="d-block fs-600 color-gray">{{ selectedItem.role }}</span>
          <span class="fs-700">{{ selectedItem.name }}</span>
        </h2>
        <p class="fs-300 color-accent">
          {{ selectedItem.brief }}
        </p>
      </article>
    </div>
  </div>
</template>
<style scoped lang="scss">
.page-wrapper--crew {
  --vertical-flow: max(2rem, 6vh);
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: var(--vertical-flow);
  padding-inline: 1.5rem;
  padding-bottom: 3rem;
  @media (min-width: breakpoint(medium)) {
    padding-bottom: 0;
  }
  @media (min-width: breakpoint(large)) {
    padding-inline: 0;
    row-gap: 0;
  }
}
.crew {
  display: grid;
  grid-template-rows: 31vh auto 1fr;
  row-gap: var(--vertical-flow);
  justify-items: center;
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

  @media (min-width: breakpoint(medium)) {
    grid-template-rows: auto auto 45vh;

    & > article {
      grid-row: 1;
    }

    & > .indicators {
      grid-row: 2;
      align-self: center;
    }

    &__img-container {
      grid-row: 3;
    }
  }
  @media (min-width: breakpoint(large)) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 20% 50% 30%;
    justify-items: start;
    gap: 0;

    &__img-container {
      grid-column: 2;
      grid-row: 1 / span all;
      align-items: end;
      justify-items: start;
      & > img {
        max-height: 70vh;
      }
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
