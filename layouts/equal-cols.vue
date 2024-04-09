<template>
  <div class="slidev-layout default">
        <slot name="header" />
    <div class="flex h-fit">
      <div v-for="item in colNames" class="flex-1 mr-8 last:mr-0">
        <template v-if="animateSlots"
          ><div v-click><slot :name="item" /></div
        ></template>
        <template v-else><slot :name="item" /></template>
      </div>
    </div>
    <div class="h-fit">
      <template v-if="animateSlots"><div v-click><slot name="footer" /></div> </template>
      <template v-else> <slot name="footer" /></template>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    colNames?: List<string>;
    animateSlots?: bool;
  }>(),
  { colNames: ['left', 'right'], animateSlots: false },
);
</script>
