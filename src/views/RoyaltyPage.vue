<script setup>
import { IonMenuButton, IonPage, IonContent } from "@ionic/vue";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";

import CustomHeader from "@/components/ui/CustomHeader.vue";
import SectionBlock from "@/components/ui/SectionBlock.vue";
import FoodItemBlockHorizontal from "@/components/blocks/FoodItemBlockHorizontal.vue";
import { useOrderStore } from "../composables/orderstore";

const orderstore = useOrderStore();

const tier = ["All", "Beginner", "Intermediate", "Loyal"];
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="space-y-10">
        <CustomHeader>
          <template #leading>
            <ion-menu-button class="text-red-600"></ion-menu-button>
          </template>
          Loyalty Points
        </CustomHeader>

        <div class="space-y-5">
          <div class="flex items-center gap-5">
            <svg
              height="48px"
              width="48px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xml:space="preserve"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  style="fill: #ffea8a"
                  d="M512,120.242c0-17.11-13.92-31.03-31.03-31.03c-17.11,0-31.03,13.92-31.03,31.03 c0,8.555,3.48,16.313,9.098,21.931l-94.431,94.433l-90.909-90.909c8.048-5.612,13.334-14.921,13.334-25.454 c0-17.11-13.92-31.03-31.03-31.03s-31.03,13.92-31.03,31.03c0,10.533,5.286,19.842,13.334,25.454l-90.909,90.909l-94.431-94.433 c5.618-5.618,9.098-13.376,9.098-21.931c0-17.11-13.92-31.03-31.03-31.03S0,103.132,0,120.242c0,14.428,9.911,26.551,23.273,30.009 v272.536h465.455V150.252C502.089,146.794,512,134.67,512,120.242z"
                ></path>
                <path
                  style="fill: #ffdb2d"
                  d="M480.97,89.212c-17.11,0-31.03,13.92-31.03,31.03c0,8.555,3.48,16.313,9.098,21.931l-94.431,94.433 l-90.909-90.909c8.048-5.612,13.334-14.921,13.334-25.454c0-17.11-13.92-31.03-31.03-31.03v333.576h232.727V150.252 C502.089,146.794,512,134.67,512,120.242C512,103.132,498.08,89.212,480.97,89.212z"
                ></path>
              </g>
            </svg>
            <div class="text-xl font-semibold">Beginner Tier</div>
            <div class="text-red-600 flex gap-2 items-center ml-auto">
              <div class="font-bold">View All</div>
              <ChevronRightIcon class="w-4" />
            </div>
          </div>
          <div class="text-gray-400">
            Earn poinst by purchasing from our side of the store Vistibulum ente
            ipsum primis in faucisbio ircu loctus et.
          </div>
        </div>

        <div
          class="w-52 h-52 bg-red-200 flex justify-center items-center rounded-full p-5 mx-auto"
        >
          <div
            class="shadow-xl rounded-full w-full h-full flex justify-center items-center bg-white"
          >
            <div class="text-3xl font-bold">0 / 160</div>
          </div>
        </div>
        <SectionBlock heading="Special Offers!">
          <template #options>
            <div class="flex gap-2 text-red-600">
              <div class="font-semibold">View All</div>
              <ChevronRightIcon class="w-4" />
            </div>
          </template>

          <div class="flex gap-2 mb-5 overflow-scroll remove-scrollbar">
            <div
              v-for="(val, index) in tier"
              :key="index"
              class="rounded-2xl px-5 py-3"
              :class="[
                index !== 0
                  ? 'bg-gray-200 text-gray-500'
                  : 'bg-red-600 text-white',
              ]"
            >
              {{ val }}
            </div>
          </div>
          <div class="space-y-3">
            <FoodItemBlockHorizontal
              v-for="data in orderstore.allOrders"
              :data="data"
              :key="data"
            />
          </div>
        </SectionBlock>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-content::part(scroll) {
  padding-top: var(--ion-safe-area-top, 0);
}

.remove-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
