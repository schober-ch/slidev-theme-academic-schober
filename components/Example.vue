<template>
  <div class="shadow mt-4 mb-4 rounded">
    <div class="p-2 bg-emerald-300 dark:bg-emerald-900 rounded-t" :class="center ? 'text-center' : ''">
    <h3><mdi-hammer-wrench class="mr-3"/>Example: {{ for }}</h3>
    </div>
    <div class="p-2 bg-emerald-100 dark:bg-emerald-700 rounded-b no-p-margin" :class="center ? 'text-center': ''">
      <slot/>
  </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
  center: bool
  for: string
}>()


</script>
