<template>
  <div class="absolute p-2 text-xs" :class="classNames">
    <template v-if="course.rlt_author && $slidev.configs.lectureSlug !== 'overview'">
      <!-- this is the case for deployed builds -->
      <div class="flex items-center">
        <a class="mr-2" href="/" alt="Home: Course Overview" title="Home: Course Overview">
          <!-- <img width="20px" src="./theme/favicon.svg" / -->
<svg width="31.999998" height="31.999998" viewBox="0 0 8.466666 8.4666661" version="1.1" id="svg1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs1" /><g id="layer1"><circle style="fill:#fdf6e3;stroke:none;stroke-width:0.264583;stroke-dasharray:none" id="circle39" cx="4.2352848" cy="4.2334151" r="4.2333331" /><g transform="translate(0.96541025,0.43799137)" id="g5" style="fill:#586e75;stroke:#268bd2"><g fill="#000000" fill-opacity="1" id="g3" transform="matrix(0.352778,0,0,0.352778,-0.857426,-0.710097)" style="fill:#586e75;stroke:#268bd2"><g id="use2" transform="translate(7.302,16.341)" style="fill:#586e75;stroke:#268bd2"><path d="m 5.796875,-14.328125 -3.15625,2.609375 0.546875,0.703125 2.609375,-1.75 2.609375,1.75 0.53125,-0.703125 z m 0,0" id="path4" style="fill:#586e75;stroke:#268bd2" /></g></g><g fill="#000000" fill-opacity="1" id="g4" transform="matrix(0.352778,0,0,0.352778,-0.857426,-0.710097)" style="fill:#586e75;stroke:#268bd2"><g id="use3" transform="translate(1.993,21.277)" style="fill:#586e75;stroke:#268bd2"><path d="M 6.84375,-6.921875 C 7.109375,-7.890625 7.375,-8.9375 7.578125,-9.9375 c 0.25,-1.375 0.390625,-2.765625 0.390625,-3.015625 0,-1.15625 -1.125,-1.15625 -1.375,-1.15625 -1.578125,0 -2.984375,0.578125 -3.953125,1.234375 -1.671875,1.140625 -2.203125,2.53125 -2.203125,2.625 0,0.15625 0.140625,0.15625 0.203125,0.15625 0.171875,0 1.140625,-0.25 1.5625,-1.046875 0.5625,-1.046875 1.15625,-1.828125 3.015625,-1.828125 0.859375,0 1,0.578125 1,0.90625 0,0.01563 -0.0625,0.984375 -0.3125,2.421875 C 5.796875,-9.0625 5.75,-8.703125 5.3125,-6.921875 h -0.75 c -0.578125,0.015625 -1.53125,0.6875 -1.53125,1 0,0.125 0.03125,0.140625 0.484375,0.140625 H 5 c -0.4375,1.4375 -1.015625,3.421875 -1.96875,5.953125 -0.1875,0.46875 -0.1875,0.515625 -0.1875,0.53125 0,0.140625 0.171875,0.140625 0.21875,0.140625 0.28125,0 0.921875,-0.265625 1.34375,-0.671875 C 4.5,0.046875 4.546875,0 4.625,-0.203125 5.34375,-2.03125 5.96875,-3.890625 6.5,-5.78125 h 4.65625 c 0.21875,0 0.625,0 0.953125,-0.203125 C 11.875,-5.125 11.03125,-1.75 11.03125,-0.125 c 0,0.59375 0.34375,1.140625 1.234375,1.140625 2.75,0 4.28125,-1.71875 4.28125,-2.375 0,-0.125 -0.109375,-0.171875 -0.203125,-0.171875 -0.171875,0 -1.265625,0.296875 -1.578125,1.09375 -0.07813,0.171875 -0.09375,0.1875 -0.484375,0.25 -0.234375,0.046875 -0.625,0.0625 -0.640625,0.0625 -0.375,0 -0.859375,-0.25 -0.859375,-0.890625 0,-0.25 0.15625,-1.375 0.21875,-1.828125 0.34375,-2.296875 1.359375,-6.1875 3.125,-10.890625 0.0625,-0.140625 0.0625,-0.1875 0.0625,-0.234375 0,-0.140625 -0.109375,-0.140625 -0.203125,-0.140625 -0.3125,0 -0.90625,0.296875 -1.296875,0.640625 -0.01563,0.04687 -0.140625,0.140625 -0.234375,0.328125 C 13.640625,-11.109375 13,-9.03125 12.375,-6.921875 Z m 0,0" id="path5" style="fill:#586e75;stroke:#268bd2" /></g></g></g></g></svg>
        </a>{{ course.rlt_author }} |
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
