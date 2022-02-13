import { ref, computed, ComputedRef, Ref } from "vue";

interface Carousel<T> {
  selectedItem: ComputedRef<T>;
  selectedItemIndex: Ref<number>;
  changeItem: (index: number) => void;
}
function useCarousel<T>(items: Array<T>): Carousel<T> {
  const selectedItemIndex = ref(0);
  const selectedItem = computed(() => items[selectedItemIndex.value]);
  const changeItem = (newIndex: number) => {
    selectedItemIndex.value = newIndex;
  };
  return {
    selectedItem,
    selectedItemIndex,
    changeItem,
  };
}

export default useCarousel;
