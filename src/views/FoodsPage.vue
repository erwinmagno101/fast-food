<script setup>
import CustomHeader from "@/components/ui/CustomHeader.vue";
import SearchBar from "@/components/ui/SearchBar.vue";
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
  IonPage,
  IonContent,
} from "@ionic/vue";
import {
  AdjustmentsHorizontalIcon,
  ShoppingBagIcon,
} from "@heroicons/vue/24/solid";
import { useFoodStore } from "../composables/foodstore";
import { onMounted, ref, watch } from "vue";
import FoodItemBlock from "@/components/blocks/FoodItemBlock.vue";
import { vAutoAnimate } from "@formkit/auto-animate";

const foodStore = useFoodStore();

const allFoods = foodStore.foods;
const categories = foodStore.categories;

const activeTab = ref("All");
const activeFoods = ref([]);

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

onMounted(() => {
  setActiveItems(activeTab.value);
});
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="space-y-10">
        <CustomHeader>
          <template #leading>
            <ion-menu-button class="text-red-600"></ion-menu-button>
          </template>

          Our foods

          <template #trailing>
            <ShoppingBagIcon class="w-8 text-red-600" />
          </template>
        </CustomHeader>

        <div class="space-y-5">
          <SearchBar placeholder="Try our new Beef Bibimbowl">
            <template #trailing>
              <AdjustmentsHorizontalIcon />
            </template>
          </SearchBar>

          <div class="space-y-5">
            <ion-segment
              v-model="activeTab"
              :scrollable="true"
              class="remove-scrollbar gap-3"
              :swipeGesture="false"
            >
              <ion-segment-button
                v-for="(value, index) in categories"
                :key="index"
                :value="value"
                class="py-0 border-full"
              >
                <ion-label>
                  <div>{{ value === "Meat" ? "Breakfast" : value }}</div>
                </ion-label>
              </ion-segment-button>
            </ion-segment>

            <div v-for="(value, index) in categories" :key="index">
              <div v-if="activeTab === value">
                <ion-grid>
                  <ion-row v-auto-animate>
                    <ion-col
                      size="6"
                      size-sm="auto"
                      v-for="food in activeFoods"
                      :key="food.id"
                    >
                      <div class="p-1">
                        <FoodItemBlock :data="food" />
                      </div>
                    </ion-col>
                  </ion-row>
                </ion-grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
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

ion-content::part(scroll) {
  padding-top: var(--ion-safe-area-top, 0);
}
</style>
