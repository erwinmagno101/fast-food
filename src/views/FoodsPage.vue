<script setup>
import CustomHeader from "@/components/CustomHeader.vue";
import ProfileAvatar from "@/components/ProfileAvatar.vue";
import SearchBar from "@/components/SearchBar.vue";
import RoyaltyPoint from "@/components/Sidebar/RoyaltyPoint.vue";
import {
  IonMenuButton,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonSegmentView,
  IonSegmentContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { AdjustmentsHorizontalIcon } from "@heroicons/vue/24/solid";
import { useFoodStore } from "../composables/foodstore";
import { onMounted, ref, watch } from "vue";
import FoodItemBlock from "@/components/FoodItemBlock.vue";

const foodStore = useFoodStore();

const allFoods = foodStore.foods;
const categories = foodStore.categories;

const activeTab = ref("All");
const activeFoods = ref([]);

const setActiveTab = (value) => {
  activeTab.value = value;
};

const setActiveItems = (value) => {
  activeFoods.value = null;
  if (value === "All") {
    activeFoods.value = allFoods;
    return;
  }
  const filtered = allFoods.filter((food) => food.category === value);
  activeFoods.value = filtered;
};

watch(
  () => activeTab.value,
  (newVal) => {
    setActiveItems(newVal);
  }
);

const onSegmentChange = (e) => {
  console.log("gg");
};

onMounted(() => {
  setActiveItems(activeTab.value);
});
</script>

<template>
  <div class="font-bold space-y-10 mb-24">
    <CustomHeader>
      <template #leading>
        <ion-menu-button class="text-red-600"></ion-menu-button>
      </template>

      Our foods

      <template #trailing>
        <ProfileAvatar class="w-7 h-7" />
      </template>
    </CustomHeader>

    <div class="space-y-5">
      <SearchBar placeholder="try our new Beef Bibimbowl">
        <template #trailing>
          <AdjustmentsHorizontalIcon />
        </template>
      </SearchBar>

      <div class="space-y-5">
        <ion-segment
          v-model="activeTab"
          :scrollable="true"
          class="remove-scrollbar gap-3"
          @ionChange="onSegmentChange"
          :swipeGesture="false"
        >
          <ion-segment-button
            class="py-0 border-full"
            v-for="(value, index) in categories"
            :key="index"
            :value="value"
          >
            <ion-label>
              <div>{{ value === "Meat" ? "Breakfast" : value }}</div>
            </ion-label>
          </ion-segment-button>
        </ion-segment>

        <ion-segment-view>
          <ion-segment-content
            v-for="(value, index) in categories"
            :key="index"
            :id="value"
          >
            <ion-grid v-if="activeFoods.length !== 0">
              <ion-row>
                <ion-col size="6" v-for="food in activeFoods" :key="food.id">
                  <div class="p-1">
                    <FoodItemBlock :data="food" />
                  </div>
                </ion-col>
              </ion-row>
            </ion-grid>
            <div v-else class="flex justify-center items-center">
              No Food Avalilable
            </div>
          </ion-segment-content>
        </ion-segment-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
ion-segment-button::part(indicator) {
  background-color: #e7000b;
  height: 100%;
}

ion-segment-button::part(indicator-background) {
  background-color: #e7000b;
}

ion-segment-button::part(native) {
  font-size: 12px;
  font-weight: 700;
}

ion-segment-button {
  --background: #dee2e6;
  --color-checked: white;
  --color: gray;
  --border-radius: 15px;
  overflow: hidden;
}

ion-segment {
  --background: transparent;
  --border-radius: 0;
  --border: none;
  --box-shadow: none;
}

ion-segment-view {
  touch-action: none;
  pointer-events: none;
}

.remove-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
