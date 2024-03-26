<template>
  <div class="bg-red-300 dark:bg-red-600 mt-4 mb-4 p-2 rounded shadow" :class="center ? 'text-center' : ''">
    <div class="flex items-center"><mdi-head-question-outline class="flex-none mr-1 text-2xl" /><span class="no-p-margin" :class="'text-' + size"><slot/></span></div>

  </div>
</template>

<script setup lang="ts">
  defineProps<{
  size: string
  center: bool
}>()
</script>
