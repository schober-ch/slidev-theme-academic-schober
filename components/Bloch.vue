<template>
  <iframe src="https://javafxpert.github.io/grok-bloch/" class="w-full h-full"
     :style="scale ? { transform: `scale(${scale})`, transformOrigin: 'top left' } : {}"

        sandbox="allow-scripts allow-same-origin allow-presentation"
>
  </iframe>
</template>


<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  scale?: number
}>()

const scaleInvertPercent = computed(() => `${(1 / (props.scale || 1)) * 100}%`)
</script>
