<script setup>
const props = defineProps({
  heading: String,
});
</script>

<template>
  <section class="space-y-3">
    <div class="flex flex-row justify-between items-end">
      <div class="text-2xl font-semibold">{{ heading }}</div>
      <div>
        <slot name="options"></slot>
      </div>
    </div>
    <div class="overflow-x-auto remove-scrollbar">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.remove-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
