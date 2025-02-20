<template>
  <div class="flex gap-5 mb-5 items-center">
    <div>
      <slot name="leading" />
    </div>
    <div class="flex-1">
      <slot />
    </div>
    <div>
      <slot name="trailing" />
    </div>
  </div>
</template>
