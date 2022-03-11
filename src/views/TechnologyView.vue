<script lang="ts">
import { defineComponent } from "vue";
import { getTechnology } from "@/store/content";
import useCarousel from "@/composables/useCarousel";
import withRouteChange from "@/composables/withRouteChange";
import NumberedIndicator from "@/components/NumberedIndicator.vue";

export default defineComponent({
  name: "TechnologyView",
  components: { NumberedIndicator },
  setup() {
    const technology = getTechnology();
    const { selectedItem, changeItem } = useCarousel(technology);
    withRouteChange();
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
      <transition name="fade" mode="out-in">
        <div
          :key="selectedItem.image"
          class="technology__image"
          :class="selectedItem.image"
        ></div>
      </transition>
      <div class="indicators">
        <numbered-indicator
          v-for="(tech, index) in technology"
          :key="tech.name"
          :onClick="() => changeItem(index)"
          :isActive="tech.name === selectedItem.name"
          :aria-current="tech.name === selectedItem.name"
          :aria-label="`select technology ${index + 1}`"
          >{{ index + 1 }}</numbered-indicator
        >
      </div>
      <article :title="selectedItem.name">
        <h2 class="heading ff-serif">
          <transition name="fade-and-drop-3" mode="out-in">
            <span class="d-block fs-250 color-gray" :key="selectedItem.name"
              >the terminology...</span
            >
          </transition>
          <transition name="fade-and-drop-2" mode="out-in">
            <span class="d-block fs-700" :key="selectedItem.name">{{
              selectedItem.name
            }}</span>
          </transition>
        </h2>
        <transition name="fade-and-drop-1" mode="out-in">
          <p class="fs-300 color-accent" :key="selectedItem.definition">
            {{ selectedItem.definition }}
          </p>
        </transition>
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
/************* TRANSITIONS **************/

$stagger-delays: (1, 2, 3, 4);
$fade-and-drop-timing-out: ease-in;
$fade-and-drop-timing-in: ease-out;
$fade-and-drop-duration-in: 250;
$fade-and-drop-duration-out: 150;
$fade-and-drop-delay: 250;

.fade-leave-active {
  transition: opacity 550ms ease-in;
}
.fade-enter-active {
  transition: opacity 550ms ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@mixin fade-and-drop($duration, $timing, $delay) {
  transition: opacity #{$duration}ms #{$delay}ms $timing,
    transform #{$duration}ms #{$delay}ms $timing;
}

@each $delay in $stagger-delays {
  .fade-and-drop-#{$delay}-enter-from {
    opacity: 0;
    transform: translateY(-100px);
  }
  .fade-and-drop-#{$delay}-leave-to {
    opacity: 0;
    transform: translateY(100px);
  }
  .fade-and-drop-#{$delay}-enter-active {
    @include fade-and-drop(
      $fade-and-drop-duration-in,
      $fade-and-drop-timing-in,
      $fade-and-drop-delay
    );
  }
  .fade-and-drop-#{$delay}-leave-active {
    @include fade-and-drop(
      $fade-and-drop-duration-out,
      $fade-and-drop-timing-out,
      #{$delay * 150}
    );
  }
}
</style>
