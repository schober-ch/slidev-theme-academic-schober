<template>
  <h1>ohoho</h1>
</template>

<script setup lang="ts">
import { ref, onUpdated, onMounted, onBeforeMount, onActivated } from 'vue'
import pdfjsLib from "pdfjs-dist/webpack";


let props = defineProps<{
  src: string;
  page: number;
}>();


    let url = '/slides.pdf'
    var thePdf = null;
    var scale = 1;

    pdfjsLib.PDFJS.getDocument(url).promise.then(function(pdf) {
        thePdf = pdf;
        viewer = document.getElementById('pdf-viewer');

        for(page = 1; page <= pdf.numPages; page++) {
          canvas = document.createElement("canvas");
          canvas.className = 'pdf-page-canvas';
          viewer.appendChild(canvas);
          renderPage(page, canvas);
        }
    });
  //
  // $slidev.mypdf = thePdf;

</script>
