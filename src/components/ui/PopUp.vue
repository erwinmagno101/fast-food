<script setup>
const isOpen = defineModel();
</script>

<template>
  <Teleport to="body">
    <Transition>
      <div v-if="isOpen">
        <div
          class="bg-white shadow-xl rounded-2xl p-10 fixed z-[999] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-78"
        >
          <slot />
        </div>
        <div class="absolute w-full h-full bg-black z-[998] opacity-20"></div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
