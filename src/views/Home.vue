<script lang="ts">
import { defineComponent } from "vue";
import HeroButton from "@/components/HeroButton.vue";
export default defineComponent({
  name: "Home",
  components: { HeroButton },
});
</script>
<template>
  <div class="home">
    <hero-button>explore</hero-button>
  </div>
</template>
<style scoped>
.home {
  background-color: black;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
