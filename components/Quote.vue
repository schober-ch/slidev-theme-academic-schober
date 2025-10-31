<template>
  <div class="p-2">
    <div>
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <img :src="url" class="h-18 w-18 rounded-full">
        </div>
        <div class="ml-3">
          <div class="text-sm leading-5 text-gray-800">
            <blockquote>
              <slot />
              <p class="text-sm leading-5 font-medium text-gray-900">
                {{ name }}
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      <span class="text-center text-xs" v-html="html" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { resolveAssetUrl } from '../layout-helper';

defineProps<{ name?: string; footnoteNumber?: number; html?: string; caption?: string, sourceUrl?: string; url: string }>();
</script>




<!--
<Quote url="/imgs/Robert_C_Martin.jpg" html='<a
href="https://commons.wikimedia.org/wiki/File:Robert_C._Martin_surrounded_by_computers.jpg">Angelacleancoder</a>,
<a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via
Wikimedia Commons'>

Blablabla asda da dasd asd a da ds

</Quote>

-->
