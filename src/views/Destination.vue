<script lang="ts">
import { defineComponent } from "vue";
import useContent from "@/composables/useContent";
import useCarousel from "@/composables/useCarousel";
import PageTitle from "@/components/PageTitle.vue";
import VTab from "@/components/VTab.vue";
export default defineComponent({
  name: "Destination",
  components: { PageTitle, VTab },
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
  <main class="page">
    <page-title pageTitle="pick your destination" pageNumber="01" />
    <article class="destination">
      <div class="destination__image-container">
        <img
          class="destination__image"
          :src="require(`@/assets/destination/${selectedItem.image}.webp`)"
        />
      </div>
      <div class="destination__tabs">
        <v-tab
          v-for="(destination, index) in destinations"
          :key="destination.name"
          :isActive="destination.name === selectedItem.name"
          :onClick="() => changeItem(index)"
          >{{ destination.name }}</v-tab
        >
      </div>
      <section class="destination__info">
        <h2 class="heading ff-serif fs-800">{{ selectedItem.name }}</h2>
        <p class="color-accent">{{ selectedItem.brief }}</p>
      </section>
      <hr />
      <section class="destination__stats">
        <div>
          <h3 class="heading ls-200 color-accent fs-200">avg. distance</h3>
          <p class="heading fs-650 ff-serif">{{ selectedItem.distance }}</p>
        </div>
        <div>
          <h3 class="heading ls-200 color-accent fs-200">est. travel time</h3>
          <p class="heading fs-650 ff-serif">{{ selectedItem.travelTime }}</p>
        </div>
      </section>
    </article>
  </main>
</template>
<style scoped>
.page {
  padding-top: 10vh;
  padding-bottom: 2em;
  padding-inline: 8vw;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
@media (min-width: 48em) {
  .page {
    gap: 4em;
  }
}
@media (min-width: 75em) {
  .page {
    padding-top: 0;
    justify-content: center;
  }
}
.destination {
  --image-size: 10.625rem;
  --vertical-flow: 2rem;
  display: grid;
  row-gap: var(--vertical-flow);
  justify-items: center;
  text-align: center;
}
.destination > hr {
  width: 100%;
  height: 1px;
  max-width: 64ch;
  opacity: 0.3;
}
.destination__image {
  width: var(--image-size);
  aspect-ratio: 1;
}
.destination__tabs {
  display: flex;
  gap: 1rem;
}
.destination__info {
  max-width: 64ch;
}
.destination__info > h2 {
  margin-top: -1rem;
}
.destination__stats {
  width: 100%;
  max-width: 48em;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 48em) {
  .destination {
    --image-size: 18.75rem;
    --vertical-flow: 3rem;
  }

  .destination__stats {
    flex-direction: row;
    justify-content: center;
    gap: 5em;
  }
}
@media (min-width: 75em) {
  .destination {
    --image-size: 100%;
    --vertical-flow: 2rem;
    grid-template-columns: 10% 35% 10% 35% 10%;
    grid-template-rows: auto auto 2px auto;
    text-align: start;
    justify-items: start;
  }
  .destination > hr {
    grid-column: 4;
  }
  .destination__image-container {
    grid-column: 2;
    grid-row: 1/5;
    display: flex;
    align-items: flex-end;
  }
  .destination__tabs {
    grid-column: 4;
    grid-row: 1;
  }
  .destination__info {
    grid-column: 4;
    grid-row: 2;
  }
  .destination__stats {
    grid-column: 4;
    justify-content: start;
  }
}
</style>
