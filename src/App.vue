<template>
  <div class="layout-wrapper">
    <div class="stub-header"></div>
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
.stub-header {
  height: 5rem;
  background-color: aqua;
}
</style>
