<template>
  <button @click="show=~show">Show</button>
  <VuePDF v-if="$slidev.mypdf.pdf" :key="'page_'+props.page" fit-parent :page="props.page" :pdf="$slidev.mypdf.pdf"/>
</template>

<script setup lang="ts">
import {ref} from 'vue'

import { VuePDF, usePDF } from '@tato30/vue-pdf'

const show = ref(false)

let props = defineProps<{
  src: string;
  page: number;
}>();

// const { pdf, pages, info } = usePDF('document.pdf')

//
// onBeforeMount(() => {console.log("XXX before mount " + props.page)})
// // created(()=> {
// //   console.log("on created for page " + props.page)
// //   pdf.value = usePDF(props.src)
// // })
//
// onActivated(() => {console.log("XXX on activatedf " + props.page)})
</script>
