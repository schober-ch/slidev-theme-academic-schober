<template>
<canvas ref="bjsCanvas" width="500" height="500" />

</template>



<script setup lang="ts">
import { createScene } from '../dependencies/grok-bloch/js/scene.js'
import { ref, onMounted, computed } from 'vue'

const props = defineProps<{
  scale?: number
}>()

const scaleInvertPercent = computed(() => `${(1 / (props.scale || 1)) * 100}%`)

const bjsCanvas = ref(null);


const config = {
    devicePixelRatio: window.devicePixelRatio || 1.0,
    fontSize: 28 * devicePixelRatio
};


onMounted(() => {
      if (bjsCanvas.value) {
        createScene(bjsCanvas.value, config);
      }
    });

</script>
