<template>
  <figure class="flex flex-col items-center justify-center">
    <img :alt="caption" class="max-h-full" :src="resolveAssetUrl(url)" />
    <figcaption class="mt-3 text-center text-xs" v-if="caption">
      <a target="_blank" v-if="sourceUrl" :href="sourceUrl">{{ caption }}</a><span v-else>{{ caption }}</span><sup v-if="footnoteNumber">{{ footnoteNumber }}</sup>
    </figcaption>
    <figcaption class="mt-3 text-center text-xs" v-if="html">
      <span v-html="html"/>
      </figcaption>
  </figure>
</template>

<script setup lang="ts">
import { resolveAssetUrl } from '../layout-helper';

defineProps<{ caption?: string; footnoteNumber?: number; html?:string; sourceUrl?: string; url: string }>();
</script>
