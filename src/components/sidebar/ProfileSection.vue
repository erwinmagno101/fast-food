<script setup>
import ProfileAvatar from "../ui/ProfileAvatar.vue";
import RoyaltyPoint from "./RoyaltyPoint.vue";
import { IonMenuToggle } from "@ionic/vue";
</script>

<template>
  <div>
    <div class="flex gap-5 mb-2 items-center">
      <ProfileAvatar class="w-18 h-18" />
      <div class="flex-1">
        <ion-menu-toggle>
          <RoyaltyPoint />
        </ion-menu-toggle>
      </div>
    </div>
    <div>
      <div class="text-3xl font-medium">Chou Tzuyu</div>
      <div class="text-gray-400">+63 912 345 6789</div>
    </div>
  </div>
</template>
