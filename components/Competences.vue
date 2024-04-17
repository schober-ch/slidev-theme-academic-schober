<template>
  <h1>Competences</h1>
  <div class="shadow mt-4 mb-4 rounded">
    <div class="p-2 bg-blue-400 dark:bg-blue-800 rounded-t" :class="center ? 'text-center' : ''">
      <span class="text-2xl"><mdi-school class="mr-3" />You should have acquired the following competencies:</span>
    </div>
    <div class="no-p-margin p-2 bg-blue-100 dark:bg-blue-600 rounded-b" :class="center ? 'text-center' : ''">
      <template v-if="animate">
        <v-clicks>
          <slot />
        </v-clicks>
      </template>
      <template v-else>
        <slot />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  center: { type: Boolean, default: false },
  animate: { type: Boolean, default: true },
});
</script>
