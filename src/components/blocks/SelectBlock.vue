<script setup>
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
import { onMounted, onUnmounted, ref, watch } from "vue";
const componentRef = ref(null);
import { defineModel } from "vue";

const itemSelected = defineModel();
const price = ref(0);

const items = [
  { name: "Coke", price: 25 },
  { name: "Iced Tea", price: 30 },
];

const selected = ref(0);

const isOpen = ref(false);

watch(
  () => selected.value,
  (newVal) => {
    price.value = items[newVal].price;
    itemSelected.value = items[newVal];
  }
);

const handleClickOutside = (e) => {
  if (!componentRef.value.contains(e.target) && isOpen.value) {
    isOpen.value = false;
  }
};

watch(
  () => isOpen.value,
  (newVal) => {
    if (newVal) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
  }
);

onMounted(() => {
  itemSelected.value = items[0];
  price.value = items[selected.value].price;
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div
    ref="componentRef"
    class="px-4 py-3 rounded-2xl bg-gray-100 border border-gray-300"
    @click="isOpen = !isOpen"
  >
    <div class="flex justify-between items-center">
      <div>
        <div class="text-xs text-gray-500">Choose Beverages</div>
        <div class="texat-sm">{{ items[selected].name }}</div>
      </div>
      <ChevronDownIcon class="w-5 text-red-600" />
    </div>
    <div
      class="absolute bottom-0 left-0 w-full translate-y-[100%] bg-gray-100 p-2 px-3 space-y-2 border border-gray-300 rounded-2xl shadow-xl"
      v-if="isOpen"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        @click="selected = index"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
