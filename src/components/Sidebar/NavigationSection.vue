<script setup lang="ts">
import NavigationItem from "./NavigationItem.vue";
import {
  HomeIcon,
  GiftTopIcon,
  BellIcon,
  BuildingStorefrontIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/vue/24/solid";

const navAppData = [
  {
    title: "Home",
    icon: HomeIcon,
    route: "/",
    badgeCount: null,
    isActive: true,
  },
  {
    title: "Order Now!",
    icon: GiftTopIcon,
    route: "/food",
    badgeCount: null,
    isActive: false,
  },
  {
    title: "Notifications",
    icon: BellIcon,
    route: "/",
    badgeCount: 4,
    isActive: false,
  },
  {
    title: "Store Locator",
    icon: BuildingStorefrontIcon,
    route: "/",
    badgeCount: null,
    isActive: false,
  },
  {
    title: "FAQ's",
    icon: QuestionMarkCircleIcon,
    route: "/",
    badgeCount: null,
    isActive: false,
  },
];

const navProfileData = [
  {
    title: "Home",
    icon: HomeIcon,
    route: "/",
    badgeCount: null,
    isActive: true,
  },
  {
    title: "Order Now!",
    icon: GiftTopIcon,
    route: "/food",
    badgeCount: null,
    isActive: false,
  },
  {
    title: "Notifications",
    icon: BellIcon,
    route: "/",
    badgeCount: 4,
    isActive: false,
  },
  {
    title: "Store Locator",
    icon: BuildingStorefrontIcon,
    route: "/",
    badgeCount: null,
    isActive: false,
  },
  {
    title: "FAQ's",
    icon: QuestionMarkCircleIcon,
    route: "/",
    badgeCount: null,
    isActive: false,
  },
];
</script>

<template>
  <div class="flex flex-col gap-5 py-3">
    <div>
      <NavigationItem
        v-for="data in navAppData"
        :key="data.title"
        :data="data"
      />
    </div>
    <hr class="w-full h-2 bg-gray-300" />
    <div>
      <NavigationItem
        v-for="data in navProfileData"
        :key="data.title"
        :data="data"
      />
    </div>
  </div>
</template>
