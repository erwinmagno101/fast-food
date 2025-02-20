<script setup>
import {} from "@ionic/vue";
import { RouterView } from "vue-router";
import { IonMenu, IonContent, IonPage } from "@ionic/vue";
import SideBar from "@/components/Sidebar/SideBar.vue";
</script>

<template>
  <ion-menu type="push" content-id="main-content">
    <ion-content class="ion-padding">
      <SideBar />
    </ion-content>
  </ion-menu>

  <ion-page id="main-content">
    <ion-content class="ion-padding">
      <router-view></router-view>
    </ion-content>
  </ion-page>
</template>
