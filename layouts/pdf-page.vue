<template>
  <div class="slidev-layout">
    <PDFView v-if="$slidev.mypdf" :key="'pv_page_'+props.page" class="" :page="page"></PDFView>
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
