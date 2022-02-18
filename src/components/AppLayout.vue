<template>
  <div class="layout-wrapper">
    <slot name="header" />
    <slot name="content" />
  </div>
</template>
<style lang="scss">
.layout-wrapper {
  min-height: 100vh;
  background-color: grey;
  display: grid;
  grid-template-rows: auto 1fr;
  align-content: start;
  & > *:last-child {
    background-color: rebeccapurple;
  }
  @media (min-width: breakpoint(medium)) {
    grid-template-columns: 4vw 1fr;
    grid-template-rows: auto 1fr 19fr;
    & > *:first-child {
      grid-row: 1;
      grid-column: 2 / span all;
    }
    & > *:last-child {
      grid-column: 2;
      grid-row: 3;
    }
  }

  @media (min-width: breakpoint(large)) {
    grid-template-columns: 4vw 7vw 1fr;
    grid-template-rows: 1fr auto 2fr 22fr;
    & > *:first-child {
      grid-row: 2;
    }
    & > *:last-child {
      grid-column: 3;
      grid-row: 4;
    }
  }
}
</style>
