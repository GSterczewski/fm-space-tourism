<script lang="ts">
import { defineComponent } from "vue";
import useContent from "@/composables/useContent";
import useCarousel from "@/composables/useCarousel";
import NumberedIndicator from "@/components/NumberedIndicator.vue";
import PageWrapper from "@/components/PageWrapper.vue";
export default defineComponent({
  name: "Technology",
  components: { PageWrapper, NumberedIndicator },
  setup() {
    const { technology } = useContent();
    const { selectedItem, changeItem } = useCarousel(technology);
    return {
      selectedItem,
      changeItem,
      technology,
    };
  },
});
</script>
<template>
  <page-wrapper pageTitle="space launch 101" pageNumber="03">
    <div class="technology">
      <div class="technology__image" :class="selectedItem.image"></div>
      <div class="indicators">
        <numbered-indicator
          v-for="(tech, index) in technology"
          :key="tech.name"
          :onClick="() => changeItem(index)"
          :isActive="tech.name === selectedItem.name"
          >{{ index + 1 }}</numbered-indicator
        >
      </div>
      <article>
        <h2 class="heading ff-serif">
          <span class="d-block fs-250 color-gray">the terminology...</span>
          <span class="fs-700">{{ selectedItem.name }}</span>
        </h2>
        <p class="fs-300 color-accent">
          {{ selectedItem.definition }}
        </p>
      </article>
    </div>
  </page-wrapper>
</template>
<style scoped lang="scss">
$images: ("launch-vehicle", "spaceport", "space-capsule");
@each $image in $images {
  .image-#{$image} {
    background-image: url("../assets/technology/image-#{$image}-landscape.jpg");
    @media (min-width: breakpoint(large)) {
      background-image: url("../assets/technology/image-#{$image}-portrait.jpg");
    }
  }
}

.technology {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(3rem, 6vh, 8rem);
  padding-top: clamp(2rem, 6vh, 6rem);
  text-align: center;

  & > article {
    max-width: 30rem;
    padding-inline: 1.5rem;

    & > p {
      margin-top: 1rem;
    }
  }
  &__image {
    width: 100%;
    aspect-ratio: 5/2;
    background-size: cover;
    background-position: center;
  }

  @media (min-width: breakpoint(large)) {
    display: grid;
    grid-template-columns: 5rem auto 1fr;
    grid-template-rows: 25% 50% 25%;
    align-items: start;
    gap: 0;
    padding-top: 0;
    text-align: start;
    padding-left: 10vw;

    &__image {
      grid-column: 3;
      grid-row: 1/4;
      aspect-ratio: 9/10;
      height: 515px;
      width: auto;
      justify-self: end;
    }

    & > article {
      grid-column: 2;
      grid-row: 2/3;
      max-width: 40rem;
    }
  }
}

.indicators {
  display: flex;
  gap: 1rem;
  @media (min-width: breakpoint(large)) {
    grid-column: 1;
    grid-row: 2/3;
    height: 100%;
    flex-direction: column;
    gap: 0;
    justify-content: space-evenly;
  }
}
</style>
