<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VText",
});
</script>
<template>
  <p class="fs-300 color-accent text">
    <slot />
  </p>
</template>
<style scoped>
.text {
  line-height: 1.6;
}
</style>
