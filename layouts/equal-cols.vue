<template>
  <div class="slidev-layout default">
    <slot name="header"/>
    <div class="flex h-stretch">
      <div v-for="item in colNames" class="flex-1">
        <slot :name="item"/>
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
    colNames?: List<string>;
  }>(),
  { colNames: ["left", "right"] },
);
</script>
