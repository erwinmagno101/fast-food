<script setup>
import { StarIcon } from "@heroicons/vue/24/solid";

defineProps({
  data: Object,
});
</script>

<template>
  <div
    class="h-78 w-full sm:w-[240px] max-w-[240px] rounded-2xl overflow-hidden bg-gray-200 py-5 px-3 flex flex-col gap-3"
  >
    <div class="h-[65%]"></div>
    <div class="">
      <div class="font-bold">{{ data.name }}</div>
      <div class="text-xs text-gray-700 font-thin">{{ data.category }}</div>
    </div>
    <div class="flex mt-auto justify-between">
      <div class="text-red-600 font-semibold text-md">P {{ data.price }}</div>
      <div class="flex gap-[1px]">
        <StarIcon class="w-3 text-yellow-400" v-for="i in 5" :key="i" />
      </div>
    </div>
  </div>
</template>
