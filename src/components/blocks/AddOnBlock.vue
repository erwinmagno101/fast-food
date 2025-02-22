<script setup>
import { PlusIcon, MinusIcon } from "@heroicons/vue/24/solid";
import { watch, ref } from "vue";

const props = defineProps({
  data: Object,
});

const items = defineModel();
const checked = ref(false);
const price = ref(0);

price.value = props.data.price;
const count = ref(1);

watch(
  () => checked.value,
  (newVal) => {
    if (newVal) {
      items.value.push({ data: props.data, count: count.value });
    } else {
      const temp = items.value.filter((item) => item.data === props.data);
      items.value = temp;
    }
  }
);

watch(
  () => count.value,
  (newVal) => {
    price.value = props.data.price * newVal;
  }
);
</script>
<template>
  <div class="flex bg-gray-200 rounded-2xl gap-5 px-5 py-3">
    <div class="w-24 h-20 bg-red-500"></div>
    <div class="flex flex-col w-full">
      <div class="flex justify-bewteen items-start w-full">
        <div class="flex-1">
          <div class="font-semibold">{{ data.name }}</div>
          <div class="text-xs text-gray-500 mb-3">{{ data.category }}</div>
        </div>
        <input type="checkbox" v-model="checked" class="custom-checkbox" />
      </div>
      <div class="flex text-red-600 font-bold gap-3 justify-between mt-auto">
        <div>P {{ price }}</div>

        <div class="flex gap-3 items-center">
          <div
            class="p-2 bg-gray-300 w-fit rounded-xl"
            @click="() => (count !== 1 ? (count = count - 1) : '')"
          >
            <MinusIcon class="w-4 text-red-600" />
          </div>
          <div class="text-xs text-black">{{ count }}</div>
          <div
            class="p-2 bg-gray-300 w-fit rounded-xl"
            @click="count = count + 1"
          >
            <PlusIcon class="w-4 text-red-600" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-checkbox {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(128, 128, 128, 0.226);
  border-radius: 4px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
}

.custom-checkbox:checked {
  background-color: white;
  border-color: white;
}

.custom-checkbox:checked::after {
  content: "✓";
  color: yellow;
  font-size: 14px;
  font-weight: bold;
  display: block;
  text-align: center;
}
</style>
