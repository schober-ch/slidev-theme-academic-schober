<template>
  <div class="bg-orange-100 dark:bg-orange-600 mb-2 mt-2 p-2 rounded shadow" :class="center ? 'text-center' : ''">
    <h3 v-if="title"><mdi-alert-box class="mr-1" />{{ title }}</h3>
    <mdi-alert-box v-else class="mr-1" /><span class="no-p-margin" :class="'text-' + size"><slot /></span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  size: string;
  center: bool;
  title?: string;
}>();
</script>
