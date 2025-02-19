<script setup>
import { watch } from "vue";
import ProfileSection from "./ProfileSection.vue";

const isOpen = defineModel({});

watch(
  () => isOpen,
  (newVal) => {
    console.log(newVal);
  }
);
</script>

<template>
  <div
    class="absolute top-0 left-0 translate-x-[-100%] w-[80%] h-full z-10 flex transition-all duration-400 ease-in-out"
    :class="[isOpen ? 'translate-x-[0%]' : 'translate-x-[-100%]']"
  >
    <nav class="w-full max-w-[384px] h-full z-10 p-5 flex flex-col bg-white">
      <div>
        <ProfileSection />
      </div>
    </nav>
  </div>
</template>
