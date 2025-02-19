<script setup>
import { ShoppingBagIcon, Bars2Icon } from "@heroicons/vue/24/solid";
import { useSideBarStore } from "@/composables/sidebarstore";
const sidebarStore = useSideBarStore();
</script>

<template>
  <header class="bg-white text-gray-900 h-12 flex px-3 items-center pt-3 gap-5">
    <div @click="sidebarStore.openSideBar">
      <Bars2Icon class="w-7 stroke-red-600 stroke-2 fill-red-600" />
    </div>
    <div class="flex-1 text-2xl font-medium">Our Foods</div>
    <div>
      <ShoppingBagIcon class="w-7 fill-red-600" />
    </div>
  </header>
</template>
