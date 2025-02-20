<script setup>
import ProfileAvatar from "../ProfileAvatar.vue";
import RoyaltyPoint from "./RoyaltyPoint.vue";
</script>

<template>
  <div>
    <div class="flex gap-5 mb-2">
      <ProfileAvatar class="w-18 h-18" />
      <RoyaltyPoint />
    </div>
    <div>
      <div class="text-3xl font-medium">Chou Tzuyu</div>
      <div class="text-gray-400">+63 912 345 6789</div>
    </div>
  </div>
</template>
