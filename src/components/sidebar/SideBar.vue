<script setup>
import NavigationSection from "../sidebar/NavigationSection.vue";
import PrimaryBtn from "../ui/PrimaryBtn.vue";
import ProfileSection from "../sidebar/ProfileSection.vue";
</script>

<template>
  <div class="h-full display flex flex-col gap-5 pt-3">
    <ProfileSection />

    <NavigationSection />
    <div class="mt-auto w-[60%]">
      <PrimaryBtn> Logout </PrimaryBtn>
    </div>
  </div>
</template>
