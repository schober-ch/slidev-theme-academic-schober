<!-- Custom Mentimeter layout for embedding presentations -->

<template>
  <div class="h-full w-full">
    <div relative :style="{ width: scaleInvertPercent, height: scaleInvertPercent }">
      <iframe
        sandbox="allow-scripts allow-same-origin allow-presentation"
        allowfullscreen="true" allowtransparency="true"
        id="frame" class="mx-auto w-[90%] h-[90%] mt-10"
        :src='"https://www.mentimeter.com/app/presentation/"+ id + "/embed"'
        :style="scale ? { transform: `scale(${scale})`, transformOrigin: 'top left' } : {}"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  id: string
  scale?: number
}>()

const scaleInvertPercent = computed(() => `${(1 / (props.scale || 1)) * 100}%`)
</script>
