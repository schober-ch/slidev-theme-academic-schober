<template>
  <div class="shadow mt-2 mb-2 rounded">
    <div class="p-2 bg-true-gray-300 dark:bg-true-gray-700 rounded-t" :class="center ? 'text-center' : ''">
      <span class="text-2xl"><mdi-book-open-page-variant-outline class="mr-3" />{{ for }}</span>
    </div>
    <div class="no-p-margin p-2 bg-true-gray-100 dark:bg-true-gray-600 rounded-b" :class="center ? 'text-center' : ''">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  center: bool;
  for: string;
}>();
</script>
