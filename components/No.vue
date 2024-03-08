<template>
  <div class="bg-amber-100 dark:bg-amber-600 mt-2 mb-2 p-2 rounded shadow" :class="center ? 'text-center' : ''">
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
