<template>
  <div class="bg-lime-100 dark:bg-lime-600 m-2 p-2 rounded shadow" :class="center ? 'text-center' : ''">
    <h3 v-if="title">{{ title }}</h3>
    <span class="no-p-margin" :class="'text-' + size"><slot /></span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  size: string;
  center: bool;
  title?: string;
}>();
</script>
