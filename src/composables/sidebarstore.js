import { defineStore } from "pinia";
import { ref } from "vue";

export const useSideBarStore = defineStore("sidebar", () => {
  const isOpen = ref(false);

  const closeSideBar = () => {
    isOpen.value = false;
  };

  const openSideBar = () => {
    isOpen.value = true;
  };

  return { isOpen, closeSideBar, openSideBar };
});
