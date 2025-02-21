<script setup>
import {} from "@ionic/vue";
import { RouterView } from "vue-router";
import { IonMenu, IonContent, IonPage } from "@ionic/vue";
import SideBar from "@/components/Sidebar/SideBar.vue";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const contentRef = ref(null);

const route = useRouter();

watch(
  () => route,
  () => {
    if (contentRef.value) {
      contentRef.value.scrollToTop(0);
    }
  }
);
</script>

<template>
  <ion-menu type="push" content-id="main-content">
    <ion-content class="ion-padding">
      <SideBar />
    </ion-content>
  </ion-menu>

  <ion-page id="main-content">
    <ion-content class="ion-padding" ref="contentRef">
      <router-view></router-view>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-content::part(scroll) {
  padding-top: var(--ion-safe-area-top, 0);
}
</style>
