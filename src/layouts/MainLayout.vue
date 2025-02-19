<script setup>
import HeaderNav from "@/components/HeaderNav.vue";
import SideBar from "@/components/Sidebar/SideBar.vue";
import { IonPage, IonContent } from "@ionic/vue";
import { ref } from "vue";
import { RouterView } from "vue-router";

const isNavOpen = ref(false);
</script>

<template>
  <ion-page
    class="max-w-[420px] max-h-auto sm:max-h-[850px] mx-auto mt-0 sm:mt-14 relative overflow-hidden text-black"
  >
    <div
      class="bg-black w-full h-full absolute z-10 transition-all duration-400 ease-in-out"
      :class="[
        isNavOpen
          ? 'translate-x-[80%] opacity-40 pointer-events-auto'
          : 'translate-x-[0%] opacity-0 pointer-events-none',
      ]"
      @click="isNavOpen = !isNavOpen"
    ></div>
    <SideBar v-model="isNavOpen" />
    <HeaderNav
      v-model="isNavOpen"
      class="transition-transform duration-400 ease-in-out"
      :class="[isNavOpen ? 'translate-x-[80%]' : 'translate-x-[0%]']"
    />

    <ion-content
      class="transition-transform duration-400 ease-in-out"
      :class="[isNavOpen ? 'translate-x-[80%]' : 'translate-x-[0%]']"
    >
      <div class="px-3 pb-5 pt-2">
        <router-view></router-view>
      </div>
    </ion-content>
  </ion-page>
</template>
