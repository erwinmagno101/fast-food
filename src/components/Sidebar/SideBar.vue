<script setup>
import ProfileSection from "./ProfileSection.vue";
import NavigationSection from "./NavigationSection.vue";
import PrimaryBtn from "../PrimaryBtn.vue";
</script>

<template>
  <div class="h-full display flex flex-col gap-5">
    <ProfileSection />
    <NavigationSection />
    <div class="mt-auto w-[60%]">
      <PrimaryBtn> Logout </PrimaryBtn>
    </div>
  </div>
</template>
