<template>
  <div class="bg-blue-100 dark:bg-blue-600 mb-4 mt-4 p-2 rounded shadow" :class="center ? 'text-center' : ''">
    <div class="flex items-center"><mdi-school-outline class="flex-none mr-1 text-2xl" />
    <h3 v-if=title>{{ title }}</h3>
    <span  class="no-p-margin" :class="'text-' + size"><slot /></span>
</div></div>
</template>

<script setup lang="ts">
  defineProps<{
  size: string
  center: bool
  title?: string
}>()


</script>
