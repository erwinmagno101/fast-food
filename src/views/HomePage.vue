<script setup>
import CategoryBlock from "@/components/CategoryBlock.vue";
import FoodItemBlock from "@/components/FoodItemBlock.vue";
import PrimaryBtn from "@/components/PrimaryBtn.vue";
import SearchBar from "@/components/SearchBar.vue";
import SectionBlock from "@/components/SectionBlock.vue";
import VoucherBlock from "@/components/VoucherBlock.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import { IonGrid, IonCol, IonMenuButton, IonRow } from "@ionic/vue";
import CustomHeader from "@/components/CustomHeader.vue";
import ProfileAvatar from "@/components/ProfileAvatar.vue";
import RoyaltyPoint from "@/components/Sidebar/RoyaltyPoint.vue";

defineOptions({ layout: MainLayout });
</script>

<template>
  <div class="mb-24">
    <CustomHeader>
      <template #leading>
        <ion-menu-button></ion-menu-button>
      </template>

      <RoyaltyPoint />

      <template #trailing>
        <ProfileAvatar class="w-10 h-10" />
      </template>
    </CustomHeader>
    <div class="space-y-10">
      <div class="flex gap-3 justify-center items-center">
        <div class="w-28">
          <img src="../assets/images/logo.webp" />
        </div>
        <div>
          <div>Anneoyong, Chou!</div>
          <div class="text-3xl font-bold">What do you want to eat?</div>
        </div>
      </div>

      <SearchBar />

      <SectionBlock heading="Special Offers!">
        <template #options>
          <div class="flex gap-2 text-red-600">
            <div class="font-semibold">View All</div>
            <ChevronRightIcon class="w-4" />
          </div>
        </template>
        <div class="flex gap-3">
          <VoucherBlock v-for="i in 3" :key="i" />
        </div>
      </SectionBlock>

      <SectionBlock heading="Category">
        <div class="flex gap-3">
          <CategoryBlock
            v-for="i in 5"
            :key="i"
            :title="i + ' Title Here'"
            :subtitle="i + 5 + ' Recipies'"
          />
        </div>
      </SectionBlock>

      <SectionBlock heading="What's New?">
        <div class="w-full h-56 bg-red-600 rounded-2xl"></div>
      </SectionBlock>

      <SectionBlock heading="Most Popular">
        <ion-grid>
          <ion-row>
            <ion-col size="6" v-for="i in 4" :key="i">
              <div class="p-1">
                <FoodItemBlock />
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </SectionBlock>
      <div class="fixed bottom-10 right-5">
        <PrimaryBtn class="py-5 px-12 w-fit shadow-lg"> Order Now! </PrimaryBtn>
      </div>
    </div>
  </div>
</template>
