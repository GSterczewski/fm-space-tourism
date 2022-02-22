import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DestinationView from "../views/DestinationView.vue";
import CrewView from "../views/CrewView.vue";
import TechnologyView from "../views/TechnologyView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/destination",
    name: "Destination",
    component: DestinationView,
  },
  {
    path: "/crew",
    name: "Crew",
    component: CrewView,
  },
  {
    path: "/technology",
    name: "Technology",
    component: TechnologyView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: "navlink--active",
  routes,
});

export default router;
