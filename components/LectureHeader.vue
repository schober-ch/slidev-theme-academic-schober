<template>
  <div class="absolute p-2 text-xs" :class="classNames">
    <template v-if="course.rlt_author && $slidev.configs.lectureSlug !== 'overview'">
      <!-- this is the case for deployed builds -->
      <div class="flex items-center">
        <a class="mr-2" href="/" alt="Home: Course Overview" title="Home: Course Overview"><img width="20px" src="theme/favicon.svg" /></a>{{ course.rlt_author }} |
        {{ course.rlt_course }}: {{ $slidev.configs.title }}
      </div>
    </template>
    <template v-else>
      <!-- this is the case for local dev build and live-mode -->
      {{ $slidev.configs.coverAuthor }}: {{ $slidev.configs.title }}
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, PropType } from 'vue';
import type { Ref } from 'vue';
import { Course, get_json } from '../common/Course';

let course: Ref<Course> = ref({});

onMounted(() => {
  get_json(course);
});

const {
  classNames: classNamesTransferred,
  x,
  y,
} = defineProps({
  classNames: {
    type: [Array, String] as PropType<string[] | string>,
  },
  x: {
    default: 'l',
    type: String as PropType<'l' | 'r'>,
    validator: (value) => value === 'l' || value === 'r',
  },
  y: {
    default: 't',
    type: String as PropType<'b' | 't'>,
    validator: (value) => value === 'b' || value === 't',
  },
});

const classNames = computed(() => [
  ...(classNamesTransferred
    ? Array.isArray(classNamesTransferred)
      ? classNamesTransferred
      : [classNamesTransferred]
    : []),
  x === 'l' && 'left-0',
  x === 'r' && 'right-0',
  y === 't' && 'top-0',
  y === 'b' && 'bottom-0',
]);
</script>
