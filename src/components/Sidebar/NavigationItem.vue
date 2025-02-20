<script setup>
import { useRouter } from "vue-router";
import { menuController } from "@ionic/vue";
import { useSideBarStore } from "@/composables/sidebarstore";

const sidebarstore = useSideBarStore();

const router = useRouter();

const props = defineProps({
  data: Object,
});

const navigate = () => {
  if (!props.data.route) return;
  router.push({ name: props.data.route });
  sidebarstore.setNavOpenTitle(props.data.title);
  menuController.close();
};
</script>

<template>
  <div class="flex gap-5 py-3" @click="navigate">
    <component
      :is="data.icon"
      class="w-6"
      :class="[
        sidebarstore.navOpenTitle === data.title
          ? 'text-red-600'
          : 'text-gray-300',
      ]"
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
