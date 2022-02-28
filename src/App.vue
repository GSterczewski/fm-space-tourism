<template>
  <router-view v-slot="{ Component }">
    <transition name="page-switch" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
@import "./style/global.scss";
.page-switch-enter-active {
  transition: opacity 0.25s ease-in;
}
.page-switch-leave-active {
  transition: opacity 0.25s ease-out;
}
.page-switch-enter-from,
.page-switch-leave-to {
  opacity: 0;
}
</style>
