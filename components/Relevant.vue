<template>
  <div :title="hint" class="m-0 mt-2 mb-2 rounded dark:border-blue-600 border-blue-300 border-1" :class="center ? 'text-center' : ''">
    <span class="no-p-margin no-katex-margin" :class="'text-' + size"><slot /></span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  size: string;
  center: bool;
  hint: string;
}>();
</script>

<style>
.no-katex-margin > p > .katex-display {
  margin: 4px 0 !important;
}

.no-katex-margin > .slidev-katex-wrapper > p > .katex-display {
  margin: 4px 0 !important;
}
</style>
