<template>
  <div class="bg-amber-100 dark:bg-amber-600 mt-4 mb-4 p-2 rounded shadow" :class="center ? 'text-center' : ''">
    <div class="flex items-center"><mdi-information-variant class="flex-none mr-1 text-2xl" /><span class="no-p-margin" :class="'text-' + size"><slot/></span></div>

  </div>
</template>

<script setup lang="ts">
  defineProps<{
  size: string
  center: bool
}>()
</script>
