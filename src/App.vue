<template>
  <div class="layout-wrapper">
    <router-view />
  </div>
</template>

<style>
@import "./style/global.css";
.layout-wrapper {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
