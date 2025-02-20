<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="relative text-md font-medium">
    <MagnifyingGlassIcon
      class="w-6 text-red-600 absolute left-5 top-[50%] translate-y-[-50%]"
    />
    <input
      type="text"
      placeholder="try our new Steak Fries Veggies"
      class="p-5 pl-14 w-full border border-gray-300 rounded-2xl outline-none focus:border-red-600 focus:ring-2 focus:ring-red-200"
    />
  </div>
</template>
