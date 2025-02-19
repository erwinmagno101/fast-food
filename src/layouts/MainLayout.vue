<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { RouterView } from "vue-router";
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>MY App</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <router-view></router-view>
    </ion-content>
  </ion-page>
</template>
