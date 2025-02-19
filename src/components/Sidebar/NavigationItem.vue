<script setup>
import { useRouter } from "vue-router";
import { useSideBarStore } from "@/composables/sidebarstore";

const router = useRouter();
const sidebarStore = useSideBarStore();

const props = defineProps({
  data: Object,
});

const navigate = () => {
  if (!props.data.route) return;
  router.push({ name: props.data.route });
  sidebarStore.closeSideBar();
};
</script>

<template>
  <div class="flex gap-5 py-3" @click="navigate">
    <component
      :is="data.icon"
      class="w-6"
      :class="[data.isActive ? 'text-red-600' : 'text-gray-300']"
    />
    <div class="flex-1 font-medium">{{ data.title }}</div>
    <div
      v-if="data.badgeCount"
      class="rounded-full bg-yellow-500 px-1 w-5 h-5 flex justify-center items-center text-white text-xs"
    >
      {{ data.badgeCount }}
    </div>
  </div>
</template>
