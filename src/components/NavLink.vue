<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavLink",
  props: {
    to: {
      type: String,
    },
    pageNumber: {
      type: String,
    },
    pageTitle: {
      type: String,
    },
  },
});
</script>

<template>
  <router-link :to="to" class="navlink no-outline d-block">
    <span aria-hidden="true" class="navlink__number" v-text="pageNumber"></span>
    <span v-text="pageTitle"></span>
  </router-link>
</template>

<style scoped lang="scss">
.navlink {
  font-size: var(--fs-350);
  text-decoration: none;
  text-transform: uppercase;
  color: var(--color-primary);
  letter-spacing: 2.7px;
  position: relative;

  &__number {
    margin-right: 0.75rem;
    font-weight: bold;
  }
}

@media (max-width: breakpoint(medium)) {
  .navlink::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 0;
    width: 3px;
    background-color: hsl(var(--color-primary) / 0.6);
    transition: height 0.35s ease;
  }
  .navlink--active::after {
    height: 100%;
    background-color: hsl(var(--color-primary));
  }
  .navlink:hover::after,
  .navlink:focus::after {
    height: 100%;
  }
}

@media (min-width: breakpoint(medium)) and (max-width: breakpoint(large)) {
  .navlink {
    letter-spacing: 2.36px;
  }
  .navlink__number {
    display: none;
  }
}

@media (min-width: breakpoint(medium)) {
  .navlink {
    padding-block: 1.8rem;
  }
  .navlink::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 0;
    background-color: hsl(var(--color-primary) / 0.6);
    transition: width 0.35s ease;
  }
  .navlink--active::after {
    width: 100%;
    background-color: hsl(var(--color-primary));
  }
  .navlink:hover::after,
  .navlink:focus::after {
    width: 100%;
  }
}
</style>
