<template>
  <div class="slidev-layout">
    <PDFView class="" :src="props.pdf" :page="page"></PDFView>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  pdf: {
    type: String,
  },
  page: {
    type: Number,
  },
});
</script>

<style scoped>
.slidev-layout {
  padding-left: 0px !important;
  padding-right: 0px !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
</style>
