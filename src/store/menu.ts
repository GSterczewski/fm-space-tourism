import { ref, Ref } from "vue";

interface MenuStore {
  isExpanded: Ref<boolean>;
  collapse: () => void;
  expand: () => void;
  toggle: () => void;
}

const isExpanded = ref(false);

const toggle = () => {
  isExpanded.value = !isExpanded.value;
};

const expand = () => {
  isExpanded.value = true;
};
const collapse = () => {
  isExpanded.value = false;
};

export default (): MenuStore => ({
  isExpanded,
  expand,
  collapse,
  toggle,
});
