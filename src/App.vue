<template>
  <app-layout :background="background">
    <router-view v-slot="{ Component }">
      <transition name="page-switch" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </app-layout>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
const background = computed(() => useRoute().name);
</script>
<style lang="scss">
@import "./style/global.scss";
.page-switch-enter-active {
  transition: opacity 0.35s ease-out, transform 0.35s ease-out;
}
.page-switch-leave-active {
  transition: opacity 0.35s ease-in, transform 0.35s ease-in;
}

.page-switch-enter-from {
  opacity: 0;
  transform: translateX(-500px);
}
.page-switch-leave-to {
  opacity: 0;
  transform: translateX(500px);
}
</style>
