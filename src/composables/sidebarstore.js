import { defineStore } from "pinia";
import { ref } from "vue";

export const useSideBarStore = defineStore("sidebar", () => {
  const navOpenTitle = ref("Home");

  const setNavOpenTitle = (title) => {};

  return { navOpenTitle, setNavOpenTitle };
});
