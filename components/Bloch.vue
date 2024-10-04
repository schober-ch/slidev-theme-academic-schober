<template>
<GrokBloch />
</template>



<script setup lang="ts">
import { computed } from 'vue'
import { GrokBloch } from "vue-grok-bloch"

const props = defineProps<{
  scale?: number
}>()

const scaleInvertPercent = computed(() => `${(1 / (props.scale || 1)) * 100}%`)

</script>
