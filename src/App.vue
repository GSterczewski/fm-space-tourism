<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import AppHeader from "@/components/AppHeader.vue";
import AppNavigation from "@/components/AppNavigation.vue";
import routes from "@/router/routes";
export default defineComponent({
  components: { AppHeader, AppNavigation },
  setup() {
    const backgroundImage = computed(() => {
      const route = useRoute();
      return `background--${String(route.name).toLowerCase()}`;
    });
    return {
      routes,
      backgroundImage,
    };
  },
});
</script>
<template>
  <div class="layout-wrapper" :class="backgroundImage">
    <app-header>
      <app-navigation :routes="routes" />
    </app-header>
    <router-view />
  </div>
</template>

<style>
@import "./style/global.css";
.layout-wrapper {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.background--home {
  background-image: url("./assets/home/background-home-mobile.jpg");
}
.background--destination {
  background-image: url("./assets/destination/background-destination-mobile.jpg");
}
.background--crew {
  background-image: url("./assets/crew/background-crew-mobile.jpg");
}

@media (min-width: 48em) {
  .background--home {
    background-image: url("./assets/home/background-home-tablet.jpg");
  }
  .background--destination {
    background-image: url("./assets/destination/background-destination-tablet.jpg");
  }
  .background--crew {
    background-image: url("./assets/crew/background-crew-tablet.jpg");
  }
  .background--technology {
    background-image: url("./assets/technology/background-technology-tablet.jpg");
  }
}
@media (min-width: 75em) {
  .background--home {
    background-image: url("./assets/home/background-home-desktop.jpg");
  }
  .background--destination {
    background-image: url("./assets/destination/background-destination-desktop.jpg");
  }
  .background--crew {
    background-image: url("./assets/crew/background-crew-desktop.jpg");
  }
  .background--technology {
    background-image: url("./assets/technology/background-technology-desktop.jpg");
  }
}
</style>
