<template>
  <VuePDF :key="'page_'+props.page" fit-parent :page="props.page" :pdf="pdf.pdf"/>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'

import { VuePDF, usePDF } from '@tato30/vue-pdf'

const show = ref(false)

let props = defineProps<{
  src: string;
  page: number;
}>();

const pdf = ref({})

// const { pdf, pages, info } = usePDF(props.src)

onMounted(() => {
  console.log("xxx on mounted for page " + props.page)
  pdf.value = usePDF(props.src);
})

</script>
