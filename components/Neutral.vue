<template>
  <div class="bg-sky-100 dark:bg-sky-600 mt-4 mb-4 p-2 rounded shadow" :class="center ? 'text-center' : ''">
    <h3 v-if="title">{{ title }}</h3>
    <span  class="no-p-margin" :class="'text-' + size"><slot /></span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  size: string;
  center: bool;
  title?: string;
}>();
</script>
