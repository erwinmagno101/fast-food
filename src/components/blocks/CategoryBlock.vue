<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
});
</script>

<template>
  <div class="relative rounded-2xl min-w-60 h-80 overflow-hidden">
    <div class="bg-red-600 h-full w-full">
      <img
        src="../../assets/images/Category.webp"
        alt=""
        class="absolute top-0 left-0 z-0 w-full h-full"
      />
    </div>
    <div class="absolute bottom-7 left-5 text-white">
      <div class="font-bold">{{ title }}</div>
      <div class="text-xs">{{ subtitle }}</div>
    </div>
  </div>
</template>
