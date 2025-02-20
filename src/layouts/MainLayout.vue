<script setup>
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonMenu,
  IonMenuButton,
  IonButtons,
} from "@ionic/vue";
import { RouterView } from "vue-router";
import ProfileSection from "@/components/Sidebar/ProfileSection.vue";
import NavigationSection from "@/components/Sidebar/NavigationSection.vue";
import PrimaryBtn from "@/components/PrimaryBtn.vue";
</script>

<template>
  <ion-menu type="push" content-id="main-content">
    <ion-header class="ion-padding">
      <ion-toolbar>
        <ProfileSection />
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="h-full display flex flex-col">
        <NavigationSection />
        <div class="mt-auto w-[60%]">
          <PrimaryBtn> Logout </PrimaryBtn>
        </div>
      </div>
    </ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ProfileSection location="header" class="px-5" />
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"> <router-view></router-view> </ion-content>
  </ion-page>
</template>
