<template>
  <div class="r-stack grid">
    <template v-for="(img, index) in images">
      <figure v-click class="flex flex-col items-center">
        <img :src="resolveAssetUrl(img)" :width="width" />
        <template v-if="index === 0">
          <figcaption class="mt-3 text-center text-xs" v-if="caption">
            <a target="_blank" v-if="sourceUrl" :href="sourceUrl">{{ caption }}</a><span v-else>{{ caption }}</span><sup
              v-if="footnoteNumber">{{ footnoteNumber }}</sup>
          </figcaption>
          <figcaption class="mt-3 text-center text-xs" v-if="html">
            <span v-html="html" />
          </figcaption>
        </template>
      </figure>
    </template>
  </div>
  <slot />
</template>

<script setup lang="ts">
import { resolveAssetUrl } from '../layout-helper';
import { computed } from 'vue';

const props = defineProps<{ baseUrl: string; suffixes: Array<number>; width?: string; caption?: string; html?: string; sourceUrl?: string }>();

const images = computed(() => {
  return props.suffixes.map((suffix) => `${props.baseUrl}${suffix}`);
});
</script>
