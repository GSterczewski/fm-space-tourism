<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DestinationStats",
  props: {
    distance: {
      type: String,
    },
    travelTime: {
      type: String,
    },
  },
});
</script>

<template>
  <div class="stats">
    <div>
      <h3 class="heading ls-200 color-accent fs-200">avg. distance</h3>
      <p class="heading fs-650 ff-serif">{{ distance }}</p>
    </div>
    <div>
      <h3 class="heading ls-200 color-accent fs-200">est. travel time</h3>
      <p class="heading fs-650 ff-serif">{{ travelTime }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stats {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1.6rem;
  border-top: 1px solid;
  @media (min-width: breakpoint(medium)) {
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
  }
  @media (min-width: breakpoint(large)) {
    justify-content: start;
  }
}
</style>
