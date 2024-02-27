<template>
  <div class="slidev-layout default">
    <slot name="header"/>
    <div class="grid h-stretch gap-4 w-full grid-cols-3">
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
withDefaults(
  defineProps<{
    colNames?: Map<string,number>;
  }>(),
  { colNames: {"left": 2, "right": 1}},
);

//const nCols = computed(() => {
//  return 'grid-cols-'+Object.values(colNames).reduce((a,b) => a + b, 0)
//})
</script>
