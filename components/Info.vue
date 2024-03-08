<template>
  <div class="bg-indigo-100 dark:bg-indigo-600 m-2 p-2 rounded shadow" :class="center ? 'text-center' : ''">
    <div class="flex items-center"><mdi-information-variant class="mr-1 text-3xl" /><span class="no-p-margin" :class="'text-' + size"><slot/></span></div>

  </div>
</template>

<script setup lang="ts">
  defineProps<{
  size: string
  center: bool
}>()
</script>
