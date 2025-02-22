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
import AddOnBlock from "@/components/blocks/AddOnBlock.vue";
import PopUp from "@/components/ui/PopUp.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const orderstore = useOrderStore();
const modalIsOpen = ref(false);

const item = ref(orderstore.currentOrder);

const count = ref(1);

const amount = ref(item.value?.price);

const beverageOrder = ref({});
const addOnOrder = ref([]);

const sizes = ["Regular", "Large", "X-Large"];

const setOrderInfo = () => {
  orderstore.setCurrentOrderInfo(null);
  addOnOrder.value.push(beverageOrder.value);
  const orderInfo = {
    item: {
      count: count.value,
      data: item.value,
    },

    addOn: {
      items: addOnOrder.value,
    },
  };

  orderstore.setCurrentOrderInfo(orderInfo);
};

const confirmOrder = () => {
  setOrderInfo();
  modalIsOpen.value = true;
};

const gotoCheckout = () => {
  modalIsOpen.value = false;
  router.push({ name: "payment" });
};

watch(
  () => count.value,
  (newVal) => {
    amount.value = item.value.price * newVal;
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
            <div @click="() => router.back()">
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
          <SelectBlock v-model="beverageOrder" />
        </SectionBlock>

        <div class="flex gap-2 w-full">
          <div
            v-for="(val, index) in sizes"
            :key="index"
            class="rounded-2xl px-5 py-3 flex-1 text-center"
            :class="[
              index !== 0
                ? 'bg-gray-200 text-gray-500'
                : 'bg-yellow-500 text-white',
            ]"
          >
            {{ val }}
          </div>
        </div>

        <PopUp v-model="modalIsOpen">
          <div
            class="flex flex-col justify-center items-center text-black gap-3"
          >
            <div class="relative w-fit mb-5">
              <div
                class="absolute rounded-full h-16 w-16 bg-yellow-500 top-[50%] left-[50%] translate-y-[-20%] translate-x-[-60%]"
              ></div>
              <div class="-rotate-30 flex items-center">
                <div class="w-7 h-8 bg-red-700 -mb-[25px] rounded-l-xl"></div>
                <div class="w-3 h-8 bg-red-900 -mr-[15px] -mb-[25px]"></div>
                <svg
                  width="64px"
                  height="64px"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--emojione"
                  preserveAspectRatio="xMidYMid meet"
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
                      d="M31.8 27.1s-4.4.9-.8-6.6c2.6-5.4 2.3-11.7 0-15C27.2.2 19.9 1.9 20.7 5c2.6 10.5-3.3 13.7-6.3 20.3c-3.1 6.7-2.8 16.3-1.4 24.8c.9 5.3 3.2 11.9 11.5 11.9H36l-4.2-34.9"
                      fill="#ffe1bd"
                    ></path>
                    <path
                      d="M25.8 60.5c-8.3 0-10.1-6.6-11-11.9c-1.4-8.5-1.6-15.3 1.1-22.2c3-7.5 6.1-7.7 6.1-22.5c0-.7.4-1.2.8-1.6c-1.4.5-2.2 1.3-2.2 2.5c0 11.1-3.1 13.8-6.1 20.5c-3.2 6.7-2.9 16.3-1.5 24.8c.9 5.3 3.2 11.9 11.5 11.9H36v-1.5H25.8"
                      fill="#e6b796"
                    ></path>
                    <path
                      d="M46 35.8H31.8c-5 0-5-8.7 0-8.7H46c5 0 5 8.7 0 8.7"
                      fill="#ffe1bd"
                    ></path>
                    <path
                      d="M47.1 34.4H32.9c-3.4 0-4.4-4-3.3-6.5c-2.7 2.1-1.9 8 2.1 8H46c1.6 0 2.7-.9 3.3-2.2c-.6.4-1.3.7-2.2.7"
                      fill="#e6b796"
                    ></path>
                    <path
                      d="M47.5 44.6h-17c-6 0-6-8.7 0-8.7h17.1c5.9 0 5.9 8.7-.1 8.7"
                      fill="#ffe1bd"
                    ></path>
                    <path
                      d="M48.9 43.1H31.8c-4 0-5.3-4-3.9-6.5c-3.2 2.1-2.3 8 2.6 8h17.1c1.9 0 3.2-.9 3.9-2.2c-.7.4-1.6.7-2.6.7"
                      fill="#e6b796"
                    ></path>
                    <path
                      d="M45.9 53.3H31.5c-5 0-5-8.7 0-8.7h14.4c5.1 0 5.1 8.7 0 8.7"
                      fill="#ffe1bd"
                    ></path>
                    <path
                      d="M47.1 51.8H32.6c-3.4 0-4.5-4-3.3-6.6c-2.7 2.1-2 8 2.2 8h14.4c1.6 0 2.7-.9 3.3-2.2c-.5.6-1.3.8-2.1.8"
                      fill="#e6b796"
                    ></path>
                    <path
                      d="M44.4 62h-9.3c-5.4 0-5.4-8.7 0-8.7h9.3c5.4 0 5.4 8.7 0 8.7"
                      fill="#ffe1bd"
                    ></path>
                    <path
                      d="M45.6 60.6h-9.3c-3.6 0-4.8-4-3.5-6.6c-2.9 2.1-2.1 8 2.3 8h9.3c1.8 0 2.9-.9 3.5-2.2c-.6.5-1.4.8-2.3.8"
                      fill="#e6b796"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>

            <div class="font-bold">Successfully Added</div>
            <div class="text-sm text-gray-500 font-thin mb-3">
              What do you want to do now?
            </div>
            <PrimaryBtn class="px-10 text-sm" @click="gotoCheckout">
              Proceed to Checkout
            </PrimaryBtn>
            <div class="text-sm text-red-600">Add More</div>
          </div>
        </PopUp>

        <SectionBlock heading="Add-Ons" class="mt-5">
          <div class="space-y-3">
            <AddOnBlock
              :data="{ name: 'Tomato Sauce', category: 'Sauce', price: 49 }"
              v-model="addOnOrder"
            />
            <AddOnBlock
              :data="{ name: 'White Rice', category: 'Rice', price: 25 }"
              v-model="addOnOrder"
            />
          </div>
        </SectionBlock>

        <div
          class="fixed bottom-5 left-[50%] translate-x-[-50%] w-full px-5"
          @click="confirmOrder"
        >
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
