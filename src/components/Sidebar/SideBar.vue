<script setup>
import ProfileSection from "./ProfileSection.vue";
import NavigationSection from "./NavigationSection.vue";
import PrimaryBtn from "../PrimaryBtn.vue";
import { useSideBarStore } from "@/composables/sidebarstore";

const sidebarStore = useSideBarStore();
</script>

<template>
  <div
    class="absolute top-0 left-0 translate-x-[-100%] w-[80%] h-full z-10 flex transition-all duration-400 ease-in-out"
    :class="[sidebarStore.isOpen ? 'translate-x-[0%]' : 'translate-x-[-100%]']"
  >
    <nav class="w-full max-w-[384px] h-full z-10 p-5 flex flex-col bg-white">
      <div class="flex flex-col h-full">
        <ProfileSection />
        <NavigationSection />
        <div class="mt-auto w-[60%]">
          <PrimaryBtn> Logout </PrimaryBtn>
        </div>
      </div>
    </nav>
  </div>
</template>
