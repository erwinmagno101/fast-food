import { defineStore } from "pinia";
import { ref } from "vue";

export const useOrderStore = defineStore("orderstore", () => {
  const currentOrder = ref(null);
  const allOrders = ref([]);
  const currentOrderInfo = ref(null);

  const setCurrentOrder = (order) => {
    currentOrder.value = order;
  };

  const addToOrder = (order) => {
    allOrders.value.push(order);
  };

  const setCurrentOrderInfo = (value) => {
    currentOrderInfo.value = value;
  };

  return {
    currentOrder,
    allOrders,
    setCurrentOrder,
    addToOrder,
    currentOrderInfo,
    setCurrentOrderInfo,
  };
});
