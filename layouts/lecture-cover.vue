<template>
  <div class="slidev-layout cover" :style="style">
    <div class="my-auto w-full">
      <p>{{  course.rlt_degree }}</p>
      <p class="text-3xl">{{  course.rlt_course }}</p>
      <slot />
      <div class="absolute bottom-12 flex">
        <p>{{ course.rlt_author }}</p>
      </div>
      <div class="absolute bottom-0 font-extralight mb-1 mr-2 right-0 text-xs" v-if="coverBackgroundSource">
        <TextWithOptionalLink :link="coverBackgroundSourceUrl" :text="coverBackgroundSource" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import type {Ref} from 'vue';

import { handleBackground } from '../layout-helper';

import { Course, get_json } from '../common/Course';

let course: Ref<Course> = ref({})

onMounted(() => {
  get_json(course)
})


const {
  coverAuthor: coverAuthorTransferred,
  coverAuthorUrl: coverAuthorUrlTransferred,
  coverBackgroundUrl,
} = withDefaults(
  defineProps<{
    coverAuthor?: string | string[];
    coverAuthorUrl?: string | string[];
    coverBackgroundUrl?: string;
    coverBackgroundSource?: string;
    coverBackgroundSourceUrl?: string;
    coverDate?: string | Date;
  }>(),
  { coverDate: new Date().toLocaleDateString() },
);

// const coverAuthors = computed(() => "xxx");
const style = computed(() => handleBackground(coverBackgroundUrl, true));
</script>
