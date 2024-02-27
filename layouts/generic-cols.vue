<template>
  <div class="slidev-layout default">
    <slot name="header"/>
    <div class="grid h-stretch gap-4 w-full" :class="'grid-cols-'+nCols">
      <div v-for="(value, key) in colNames" :class="'col-span-'+value">
        <slot :name="key"/>
      </div>
    </div>
    <div>
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

withDefaults(
  defineProps<{
    colNames?: Map<string,number>;
    nCols?: number
  }>(),
  { colNames: {"left": 2, "right": 1},
  nCols: 3},
);

//const nCols = computed(() => {
//  return 'grid-cols-'+Object.values(colNames).reduce((a,b) => a + b, 0)
//})
</script>
