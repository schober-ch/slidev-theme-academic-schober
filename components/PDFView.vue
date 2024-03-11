<template>
<VuePDF :key="'page_'+props.page" v-if="showPdf" fit-parent :page="props.page" :pdf="pdf"/>
</template>

<script setup lang="ts">
import { VuePDF, usePDF } from '@tato30/vue-pdf'
import { ref } from 'vue'

const showPdf = ref(false);

const props = defineProps<{
  src: string;
  page: number;
}>();

console.log("XXX PDFView for page " + props.page)
let { pdf, pages, info } = usePDF(props.src)
console.log(pdf);
console.log(info.value);


setTimeout(() => {
  showPdf.value = true;
  console.log("set true")
}, 1000);

</script>
