<script lang="ts">
import { defineComponent } from "vue";
// import PageTitle from "@/components/PageTitle.vue";
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
<style scoped>
.indicators {
  display: flex;
  gap: 1rem;
}
.crew {
  --vertical-flow: max(2rem, 5vh);
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: var(--vertical-flow);
  gap: var(--vertical-flow);
}
.crew > img {
  max-width: 60%;
}
.crew > article > p {
  margin-top: calc(var(--vertical-flow) / 2);
  max-width: 64ch;
}
@media (min-width: 48em) {
  .crew {
    flex-direction: column-reverse;
  }
  .crew > img {
    max-width: 80%;
  }
}
@media (min-width: 48em) and (min-height: 68em) {
  .crew {
    min-height: 75rem;
  }
  .crew > img {
    justify-self: flex-end;
  }
}
</style>
