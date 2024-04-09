<template>
    <div class="flex h-fit">
      <div v-for="item in colNames" class="flex-1 mr-8 last:mr-0">
        <slot :name="item"/>
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
