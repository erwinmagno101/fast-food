<script setup>
defineProps({
  data: Object,
});
</script>
<template>
  <div class="flex bg-gray-200 rounded-2xl gap-5 px-5 py-3">
    <div class="w-24 flex justify-center items-center h-20">
      <img src="../../assets/images/Food.webp" alt="" />
    </div>
    <div class="flex flex-col h-20">
      <div class="font-semibold">{{ data.item.data.name }}</div>
      <div class="text-xs text-gray-500 mb-3">
        {{ data.item.data.category }}
      </div>
      <div class="flex text-red-600 font-bold gap-3 items-end mt-auto">
        <svg
          height="24px"
          width="24px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xml:space="preserve"
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
              style="fill: #ffea8a"
              d="M512,120.242c0-17.11-13.92-31.03-31.03-31.03c-17.11,0-31.03,13.92-31.03,31.03 c0,8.555,3.48,16.313,9.098,21.931l-94.431,94.433l-90.909-90.909c8.048-5.612,13.334-14.921,13.334-25.454 c0-17.11-13.92-31.03-31.03-31.03s-31.03,13.92-31.03,31.03c0,10.533,5.286,19.842,13.334,25.454l-90.909,90.909l-94.431-94.433 c5.618-5.618,9.098-13.376,9.098-21.931c0-17.11-13.92-31.03-31.03-31.03S0,103.132,0,120.242c0,14.428,9.911,26.551,23.273,30.009 v272.536h465.455V150.252C502.089,146.794,512,134.67,512,120.242z"
            ></path>
            <path
              style="fill: #ffdb2d"
              d="M480.97,89.212c-17.11,0-31.03,13.92-31.03,31.03c0,8.555,3.48,16.313,9.098,21.931l-94.431,94.433 l-90.909-90.909c8.048-5.612,13.334-14.921,13.334-25.454c0-17.11-13.92-31.03-31.03-31.03v333.576h232.727V150.252 C502.089,146.794,512,134.67,512,120.242C512,103.132,498.08,89.212,480.97,89.212z"
            ></path>
          </g>
        </svg>
        <div>{{ data.item.data.points }} points</div>
      </div>
    </div>
  </div>
</template>
