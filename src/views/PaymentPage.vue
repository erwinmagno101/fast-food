<script setup>
import { IonContent, IonPage } from "@ionic/vue";
import CustomHeader from "@/components/ui/CustomHeader.vue";
import {
  ChevronLeftIcon,
  EllipsisVerticalIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/vue/24/solid";
import SectionBlock from "@/components/ui/SectionBlock.vue";
import { useOrderStore } from "../composables/orderstore";
import { onMounted, ref } from "vue";
import PrimaryBtn from "@/components/ui/PrimaryBtn.vue";
import { useRouter } from "vue-router";

const orderstore = useOrderStore();
const router = useRouter();

const order = orderstore.currentOrderInfo;

const info = {
  name: "Chou Tzuyu",
  contact: "+ 63 912 345 6789",
  email: "chou.tzu-yu@email.com",
};

const total = ref(0);
const subTotal = ref(0);

const getTotal = () => {
  let addOnTotal = 0;
  order.addOn.items.forEach((item) => {
    if (item.data) {
      addOnTotal = addOnTotal + item.count * item.data.price;
    } else {
      addOnTotal = addOnTotal + item.price;
    }
  });

  subTotal.value = (order.item.data.price + addOnTotal) * order.item.count;
  total.value = subTotal.value + 59;
};

const placeOrder = () => {
  orderstore.addToOrder(order);
  router.push({ name: "success" });
};

onMounted(() => {
  getTotal();
});

const shippingAddresses = [
  {
    title: "My Home Address",
    address:
      "No. St. Augustin Street, Brgy. De Jose Delgado City 2234 Philippines",
  },
  {
    title: "Work/Office",
    address: "3rd flr Anyeong Bldg. Seareal St. Joaqin City 3456 Philippines",
  },
];
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="space-y-5 mb-18">
        <CustomHeader>
          <template #leading>
            <div @click="() => router.back()">
              <ChevronLeftIcon class="w-5 font-bold" />
            </div>
          </template>
          Order Summary
        </CustomHeader>

        <div class="space-y-2">
          <div class="flex">
            <div class="space-y-3 text-sm bg-gray-200 p-5 rounded-2xl flex-1">
              <div>
                <div class="font-bold">{{ info.name }}</div>
              </div>
              <div class="text-gray-500">
                <div>{{ info.contact }}</div>
                <div>{{ info.email }}</div>
              </div>
            </div>
            <EllipsisVerticalIcon class="w-7 text-yellow-500" />
          </div>

          <div
            class="flex"
            v-for="(address, index) in shippingAddresses"
            :key="address.title"
          >
            <div class="bg-gray-200 p-5 rounded-2xl flex items-start gap-5">
              <div class="space-y-3 text-sm flex-1">
                <div>
                  <div class="font-bold">{{ address.title }}</div>
                </div>
                <div class="text-gray-500">
                  <div>{{ address.address }}</div>
                </div>
              </div>
              <input type="radio" :checked="index === 0 ? true : false" />
            </div>
            <EllipsisVerticalIcon class="w-7 min-w-7 text-yellow-500" />
          </div>
        </div>

        <SectionBlock heading="Orders">
          <div class="flex w-full">
            <div class="bg-gray-200 p-5 rounded-2xl flex-1 space-y-3">
              <div class="flex items-center gap-5">
                <div class="w-16 h-16 bg-red-600"></div>
                <div>
                  <div class="font-bold text-sm mb-3">
                    {{ order.item.data.name }}
                  </div>
                  <div
                    class="text-sm"
                    v-for="data in order.addOn.items"
                    :key="data"
                  >
                    {{ data.count ? data.count : 1 }}x
                    {{ data.name ? data.name : data.data.name }}
                  </div>
                </div>
              </div>
              <hr class="h-3 w-full bg-gray-300" />
              <div class="flex text-red-600 font-bold gap-3 justify-between">
                <div>P {{ subTotal }}</div>

                <div class="flex gap-3 items-center">
                  <div class="p-2 bg-gray-300 w-fit rounded-xl">
                    <MinusIcon class="w-4 text-red-600" />
                  </div>
                  <div class="text-xs text-black">
                    {{ order.item.count }}
                  </div>
                  <div class="p-2 bg-gray-300 w-fit rounded-xl">
                    <PlusIcon class="w-4 text-red-600" />
                  </div>
                </div>
              </div>
            </div>
            <EllipsisVerticalIcon class="w-7 min-w-7 text-yellow-500" />
          </div>
        </SectionBlock>
        <SectionBlock heading="Payment Option">
          <div class="bg-gray-200 p-5 rounded-2xl flex items-start gap-5 mb-2">
            <div class="space-y-3 text-sm flex-1">
              <div>
                <div class="font-bold">Cash On Delivery</div>
              </div>
              <div class="text-gray-500">
                <div class="text-xs">Pay when you receive your order</div>
              </div>
            </div>
            <input type="radio" checked />
          </div>
          <div class="bg-gray-200 p-5 rounded-2xl flex items-start gap-5">
            <div class="space-y-3 text-sm flex-1">
              <div>
                <div class="font-bold">
                  Loyalty Points
                  <span class="text-red-600 ml-2">(0 points)</span>
                </div>
              </div>
              <div class="text-gray-500">
                <div class="text-xs">Pay using your earned loyalty points</div>
              </div>
            </div>
            <input type="radio" />
          </div>
        </SectionBlock>
        <div class="space-y-2">
          <div class="flex justify-between font-bold">
            <div>Subtotal</div>
            <div>P {{ subTotal }}</div>
          </div>

          <div class="flex justify-between font-bold">
            <div>Delivery Charge</div>
            <div>P 59</div>
          </div>
        </div>
        <div
          class="bg-gray-100 border font-thin border-gray-200 rounded-2xl p-3 px-5"
        >
          <div class="text-xs text-gray-500">Change for</div>
          <div class="text-gray-400 font-thin">e.g. 1,000</div>
        </div>
      </div>

      <div
        class="bg-white border-t-1 border-gray-200 fixed bottom-0 left-0 px-5 py-3 flex justify-between items-center w-full"
      >
        <div>
          <div class="text-xs text-gray-600">Grand Total</div>
          <div class="font-bold text-lg">P {{ total }}</div>
        </div>
        <PrimaryBtn class="text-sm px-18" @click="placeOrder">
          Place Order
        </PrimaryBtn>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-content::part(scroll) {
  padding-top: var(--ion-safe-area-top, 0);
}

input[type="radio"] {
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  cursor: pointer;
}

input[type="radio"]:checked {
  background-color: white;
}

input[type="radio"]:checked::before {
  content: "";
  width: 10px;
  height: 10px;
  background-color: yellow;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
