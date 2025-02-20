<script setup>
import NavigationItem from "./NavigationItem.vue";
import {
  HomeIcon,
  GiftTopIcon,
  BellIcon,
  BuildingStorefrontIcon,
  QuestionMarkCircleIcon,
  EnvelopeIcon,
  UserIcon,
  HeartIcon,
  MapPinIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/vue/24/solid";

const navAppData = [
  {
    title: "Home",
    icon: HomeIcon,
    route: "home",
    badgeCount: null,
    isActive: true,
  },
  {
    title: "Order Now!",
    icon: GiftTopIcon,
    route: "foods",
    badgeCount: null,
    isActive: false,
  },
  {
    title: "Notifications",
    icon: BellIcon,
    route: "",
    badgeCount: 4,
    isActive: false,
  },
  {
    title: "Store Locator",
    icon: BuildingStorefrontIcon,
    route: "",
    badgeCount: null,
    isActive: false,
  },
  {
    title: "FAQ's",
    icon: QuestionMarkCircleIcon,
    route: "",
    badgeCount: null,
    isActive: false,
  },
];

const navProfileData = [
  {
    title: "My Orders",
    icon: EnvelopeIcon,
    route: "",
    badgeCount: 2,
    isActive: false,
  },
  {
    title: "My Account",
    icon: UserIcon,
    route: "",
    badgeCount: null,
    isActive: false,
  },
  {
    title: "My Favorites",
    icon: HeartIcon,
    route: "",
    badgeCount: null,
    isActive: false,
  },
  {
    title: "Order Tracker",
    icon: MapPinIcon,
    route: "",
    badgeCount: null,
    isActive: false,
  },
  {
    title: "Order History",
    icon: ArrowUturnLeftIcon,
    route: "",
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
