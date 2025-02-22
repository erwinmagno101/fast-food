<script setup>
import { IonPage, IonContent } from "@ionic/vue";
import CustomHeader from "@/components/ui/CustomHeader.vue";
import {
  ShoppingBagIcon,
  ChevronLeftIcon,
  StarIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/vue/24/solid";
import { HeartIcon } from "@heroicons/vue/24/outline";
import { useOrderStore } from "../composables/orderstore";
import { onMounted, ref, watch } from "vue";
import SectionBlock from "@/components/ui/SectionBlock.vue";
import SelectBlock from "@/components/blocks/SelectBlock.vue";
import PrimaryBtn from "@/components/ui/PrimaryBtn.vue";
import FoodItemBlockHorizontal from "@/components/blocks/FoodItemBlockHorizontal.vue";

const orderstore = useOrderStore();

const item = ref(orderstore.currentOrder);

const count = ref(1);
const amount = ref(item.value.price);

const beverageCost = ref(0);

const sizes = ["Regular", "Large", "X-Large"];

watch(
  () => count.value,
  (newVal) => {
    amount.value = item.value.price * newVal;
    console.log(newVal);
  }
);

onMounted(() => {});
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="space-y-5 mb-24">
        <CustomHeader>
          <template #leading>
            <div>
              <ChevronLeftIcon class="w-5 font-bold" />
            </div>
          </template>
          <div class="text-xl">
            {{ item.name }}
          </div>
          <template #trailing>
            <ShoppingBagIcon class="w-8 text-red-600" />
          </template>
        </CustomHeader>

        <div class="w-full h-64 bg-gray-200 rounded-2xl relative">
          <div
            class="p-2 bg-white rounded-2xl w-fit shadow-md absolute right-0 bottom-0 translate-x-[-50%] translate-y-[50%]"
          >
            <HeartIcon class="w-6 text-red-600" />
          </div>
        </div>

        <div class="space-y-3">
          <div class="">{{ item.name }}</div>
          <div class="flex gap-[1px]">
            <StarIcon class="w-3 text-yellow-400" v-for="i in 5" :key="i" />
          </div>
          <div class="text-sm text-gray-500">{{ item.description }}</div>
        </div>

        <div class="flex items-center justify-between">
          <div class="text-red-600 font-semibold text-2xl">P {{ amount }}</div>
          <div class="flex gap-5 items-center">
            <div
              class="p-2 bg-gray-200 w-fit rounded-xl"
              @click="() => (count !== 1 ? (count = count - 1) : '')"
            >
              <MinusIcon class="w-4 text-red-600" />
            </div>
            <div class="text-xs">{{ count }}</div>
            <div
              class="p-2 bg-gray-200 w-fit rounded-xl"
              @click="count = count + 1"
            >
              <PlusIcon class="w-4 text-red-600" />
            </div>
          </div>
        </div>

        <SectionBlock heading="Beverages">
          <SelectBlock v-model="beverageCost" />
        </SectionBlock>

        <div class="flex gap-2 w-full">
          <div
            v-for="(val, index) in sizes"
            :key="index"
            class="rounded-2xl px-5 py-3 flex-1 text-center"
            :class="[
              index !== 0
                ? 'bg-gray-200 text-gray-500'
                : 'bg-red-600 text-white',
            ]"
          >
            {{ val }}
          </div>
        </div>

        <SectionBlock heading="Add-Ons" class="mt-5">
          <FoodItemBlockHorizontal />
        </SectionBlock>

        <div class="fixed bottom-5 left-[50%] translate-x-[-50%] w-full px-5">
          <PrimaryBtn class="py-5">Add to Bag</PrimaryBtn>
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
