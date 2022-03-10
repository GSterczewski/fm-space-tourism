<template>
  <app-layout :background="background">
    <router-view v-slot="{ Component }">
      <transition name="page-fade" mode="out-in">
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

$page-transition-duration--out: 0.35s;
$page-transition-duration--in: 0.35s;
$page-transition-timing--out: cubic-bezier(0.58, -0.94, 0.35, 1.5);
$page-transition-timing--in: cubic-bezier(0.03, 0.76, 0.88, 2.5);

.page-fade-enter-active {
  transition: transform $page-transition-duration--in
      $page-transition-timing--in,
    opacity $page-transition-duration--in $page-transition-timing--in;
}

.page-fade-leave-active {
  transition: transform $page-transition-duration--out
      $page-transition-timing--out,
    opacity $page-transition-duration--out $page-transition-timing--out;
}
.page-fade-enter-from {
  opacity: 0.5;
  transform: scale(0.5);
}
.page-fade-leave-to {
  opacity: 0;
  transform: scale(1.5);
}
</style>
