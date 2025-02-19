<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { RouterView } from "vue-router"; // Import RouterView
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>My App</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <router-view></router-view>
      <!-- This is required to render HomePage -->
    </ion-content>
  </ion-page>
</template>
