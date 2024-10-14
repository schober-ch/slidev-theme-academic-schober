<script setup lang="ts">
  import {computed} from "vue";

  const props = defineProps<{
    tag: string
  }>()

const scaleInvertPercent = computed(() => `${(1 / (props.scale || 1)) * 100}%`)
  const hasCourseInfo = computed(() => {
    if (!('course_info' in $slidev.configs)) {
      console.error("Conditional rendering defined via IfTag, but no course_info available!");
      return false;
    }
    return true;
  });

  const isRendered = computed(() => {
  if (hasCourseInfo === true) {
    if ($slidev.configs.course_info.tags.includes(props.tag)) { return true}
    }
    console.warn("Conditional rendering defined via IfTag, but no tags available in course_info!")
  return false;
  })

</script>

<template>
  <slot v-if="isRendered"/>
  <p class="text-red-500 font-mono" v-if="!hasCourseInfo">Slide Error: Conditional rendering defined via IfTag, but no course_info available.</p>
</template>
