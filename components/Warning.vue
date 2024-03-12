<template>
  <div class="bg-orange-100 dark:bg-orange-600 mb-2 mt-2 p-2 rounded shadow" :class="center ? 'text-center' : ''">
    <h3 v-if="title">{{ title }}</h3>
    <div class="flex items-center"><mdi-alert-box class="flex-none mr-1 text-2xl" /><span class="no-p-margin" :class="'text-' + size"><slot /></span></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  size: string;
  center: bool;
  title?: string;
}>();
</script>
