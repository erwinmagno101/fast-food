<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";

defineProps({
  placeholder: String,
});
</script>

<template>
  <div class="relative text-md font-medium">
    <MagnifyingGlassIcon
      class="w-6 text-red-600 absolute left-5 top-[50%] translate-y-[-50%]"
    />
    <input
      type="text"
      :placeholder="placeholder"
      class="p-5 px-14 w-full border border-gray-300 rounded-2xl outline-none focus:border-red-600 focus:ring-2 focus:ring-red-200"
    />
    <div class="w-6 text-red-600 absolute right-5 top-[50%] translate-y-[-50%]">
      <slot name="trailing"> </slot>
    </div>
  </div>
</template>
