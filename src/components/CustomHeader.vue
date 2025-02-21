<template>
  <div class="flex gap-5 mb-5 items-center py-2">
    <div>
      <slot name="leading" />
    </div>
    <div class="flex-1 text-3xl">
      <slot />
    </div>
    <div>
      <slot name="trailing" />
    </div>
  </div>
</template>
