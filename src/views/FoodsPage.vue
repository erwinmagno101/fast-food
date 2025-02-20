<script setup>
import CustomHeader from "@/components/CustomHeader.vue";
import ProfileAvatar from "@/components/ProfileAvatar.vue";
import RoyaltyPoint from "@/components/Sidebar/RoyaltyPoint.vue";
import { IonMenuButton } from "@ionic/vue";
</script>

<template>
  <div class="font-bold space-y-10 mb-24">
    <CustomHeader>
      <template #leading>
        <ion-menu-button></ion-menu-button>
      </template>

      <RoyaltyPoint />

      <template #trailing>
        <ProfileAvatar class="w-7 h-7" />
      </template>
    </CustomHeader>
    foods
  </div>
</template>
