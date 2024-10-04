<template>
  <div class="shadow mt-4 mb-4 rounded">
    <div class="p-2 bg-light-blue-300 dark:bg-light-blue-900 rounded-t" :class="center ? 'text-center' : ''">
    <span class="text-2xl"><mdi-dumbbell class="mr-3"/>Exercise "{{ title }}"</span>
    </div>
    <div class="p-2 bg-light-blue-100 dark:bg-light-blue-700 rounded-b no-p-margin" :class="center ? 'text-center': ''">
      <slot/>
  </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
  center?: bool
  title: string
}>()


</script>
