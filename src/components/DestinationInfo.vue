<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DestinationInfo",
  props: {
    name: {
      type: String,
    },
    brief: {
      type: String,
    },
  },
});
</script>

<template>
  <div class="info">
    <h2 class="heading ff-serif fs-800">{{ name }}</h2>
    <p class="color-accent">{{ brief }}</p>
  </div>
</template>
<style scoped lang="scss">
.info {
  & > h2 {
    line-height: 1.1;
  }
  & > p {
    max-width: 65ch;
    line-height: 1.8;
  }
}
</style>
