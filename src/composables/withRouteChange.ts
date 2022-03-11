import { onBeforeRouteLeave } from "vue-router";
import menuStore from "@/store/menu";

const { collapse } = menuStore();

export default (): void => {
  onBeforeRouteLeave(() => {
    collapse();
  });
};
