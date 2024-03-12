<template>
  <div class="slidev-layout">
    <h1>Ultra-Hack</h1>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';


import { VuePDF, usePDF } from '@tato30/vue-pdf'
import { ref, onUpdated, onMounted, onBeforeMount, onActivated } from 'vue'

const pdf = ref({});

let props = defineProps<{
  ccPdf: string;
}>();

// const { pdf, pages, info } = usePDF('document.pdf')

// $slidev.mypdf = pdf
onMounted(()=> {
  pdf.value = usePDF(props.ccPdf)
  $slidev.mypdf = pdf;
})

</script>
<style scoped>
</style>
