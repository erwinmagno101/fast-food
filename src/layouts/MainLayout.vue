<script setup>
import {} from "@ionic/vue";
import { IonMenu, IonContent, IonPage, IonRouterOutlet } from "@ionic/vue";
import SideBar from "@/components/sidebar/SideBar.vue";
import { ref, watch } from "vue";

const contentRef = ref(null);
</script>

<template>
  <ion-menu type="push" content-id="main-content">
    <ion-content class="ion-padding">
      <SideBar />
    </ion-content>
  </ion-menu>

  <ion-page id="main-content">
    <ion-content ref="contentRef">
      <ion-router-outlet />
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-content::part(scroll) {
  padding-top: var(--ion-safe-area-top, 0);
}
</style>
