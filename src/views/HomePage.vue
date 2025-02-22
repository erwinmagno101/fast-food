<script setup>
import CategoryBlock from "@/components/blocks/CategoryBlock.vue";
import PrimaryBtn from "@/components/ui/PrimaryBtn.vue";
import SearchBar from "@/components/ui/SearchBar.vue";
import SectionBlock from "@/components/ui/SectionBlock.vue";
import VoucherBlock from "@/components/blocks/VoucherBlock.vue";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import {
  IonGrid,
  IonCol,
  IonMenuButton,
  IonRow,
  IonPage,
  IonContent,
} from "@ionic/vue";
import CustomHeader from "@/components/ui/CustomHeader.vue";
import ProfileAvatar from "@/components/ui/ProfileAvatar.vue";
import RoyaltyPoint from "@/components/sidebar/RoyaltyPoint.vue";
import { useFoodStore } from "@/composables/foodstore";
import FoodItemBlock from "@/components/blocks/FoodItemBlock.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const foodstore = useFoodStore();
const router = useRouter();

const allfoods = foodstore.foods;
const displayedFoods = ref(null);

const setDisplayedFoods = () => {
  const filtered = allfoods.filter((item, index) => index < 4);
  displayedFoods.value = filtered;
};

const navigate = (route) => {
  router.push({ name: route });
};

onMounted(() => {
  setDisplayedFoods();
});
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="space-y-10 mb-24">
        <CustomHeader>
          <template #leading>
            <ion-menu-button class="text-red-600"></ion-menu-button>
          </template>

          <RoyaltyPoint />

          <template #trailing>
            <ProfileAvatar class="w-10 h-10" />
          </template>
        </CustomHeader>
        <div class="flex gap-3 justify-center items-center">
          <div class="w-28">
            <img src="../assets/images/logo.webp" />
          </div>
          <div>
            <div>Anneoyong, Chou!</div>
            <div class="text-3xl font-bold">What do you want to eat?</div>
          </div>
        </div>

        <SearchBar placeholder="try our new Steak Fries Veggies" />

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
          <div class="max-w-[480px] h-56 bg-red-600 rounded-2xl"></div>
        </SectionBlock>

        <SectionBlock heading="Most Popular">
          <ion-grid>
            <ion-row>
              <ion-col
                size="6"
                size-sm="auto"
                v-for="food in displayedFoods"
                :key="food.id"
              >
                <div class="p-1">
                  <FoodItemBlock :key="food.id" :data="food" />
                </div>
              </ion-col>
            </ion-row>
          </ion-grid>
        </SectionBlock>
        <div class="fixed bottom-10 right-5">
          <PrimaryBtn
            class="py-5 px-12 w-fit shadow-lg"
            @click="navigate('foods')"
          >
            Order Now!
          </PrimaryBtn>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-content::part(scroll) {
  padding-top: var(--ion-safe-area-top, 0);
}
</style>
