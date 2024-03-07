<template>
  <h1>Competences</h1>
  <div class="shadow m-2 rounded">
    <div class="p-2 bg-blue-400 dark:bg-blue-800 rounded-t" :class="center ? 'text-center' : ''">
      <h3 class=""><mdi-school class="mr-3" />You should have acquired the following competencies:</h3>
    </div>
    <div class="p-2 bg-blue-100 dark:bg-blue-600 rounded-b" :class="center ? 'text-center' : ''">
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
  center: { type: Boolean },
  animate: { type: Boolean, default: true },
});
</script>
