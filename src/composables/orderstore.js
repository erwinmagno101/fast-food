import { defineStore } from "pinia";
import { ref } from "vue";

export const useOrderStore = defineStore("orderstore", () => {
  const currentOrder = ref(null);
  const allOrders = ref([]);

  const setCurrentOrder = (order) => {
    currentOrder.value = order;
  };

  const addToOrder = (order) => {
    allOrders.value.push(order);
  };

  return { currentOrder, allOrders, setCurrentOrder, addToOrder };
});
