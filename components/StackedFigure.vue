<template>
    <div class="r-stack grid">
      <template v-for="(img, index) in images">
        <img class="" v-click :src="resolveAssetUrl(img)" :width="width" />
      </template>
    </div>
      <slot/>
</template>

<script setup lang="ts">
import { resolveAssetUrl } from '../layout-helper';
import { computed } from 'vue';

const props = defineProps<{ baseUrl: string; suffixes: Array<number>; width?: string }>();

const images = computed(() => {
  return props.suffixes.map((suffix) => `${props.baseUrl}${suffix}`);
});
</script>
