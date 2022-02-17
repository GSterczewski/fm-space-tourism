<script lang="ts">
import { defineComponent } from "vue";
import useContent from "@/composables/useContent";
import useCarousel from "@/composables/useCarousel";
import CircleIndicator from "@/components/CircleIndicator.vue";
import PageWrapper from "@/components/PageWrapper.vue";
export default defineComponent({
  name: "Crew",
  components: { PageWrapper, CircleIndicator },
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
    <div class="crew">
      <img :src="require(`@/assets/crew/${selectedItem.image}.webp`)" />
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
  </page-wrapper>
</template>
<style scoped lang="scss">
.crew {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-inline: 1.5rem;
  padding-top: clamp(2rem, 5vh, 6rem);
  padding-bottom: 4rem;
  & > article > p {
    max-width: 65ch;
  }
  @media (min-width: breakpoint(medium)) {
    flex-direction: column-reverse;
    justify-content: center;
    min-height: 40vh;
  }
  @media (min-width: breakpoint(large)) {
    min-height: 70vh;
    padding-left: 10vw;
    text-align: start;
    align-items: flex-start;
    justify-content: space-around;
  }
  & > img {
    max-width: 80%;
    @media (min-width: breakpoint(medium)) {
      max-height: 40vh;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
    }
    @media (min-height: 1000px) {
      max-height: 50vh;
    }
    @media (min-width: breakpoint(large)) {
      max-height: 70vh;
      transform: translate(0);
      left: 65%;
    }
  }
}
.indicators {
  display: flex;
  gap: 1rem;
}
</style>
