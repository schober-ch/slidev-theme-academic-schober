<script setup lang="js">
import { ref, onMounted } from 'vue'

let course = ref({})

async function get_json() {
    let url = 'course.json'
    let obj = await (await fetch(url)).json();
    course.value = obj;
}

onMounted(() => {
    get_json()
})

</script>

<template>
    <ul>
        <li class="text-sm" v-for="(lecture, index) in course.lectures">{{ (index
        + 1).toString().padStart(2, "") }} | <a target="_blank" :href="lecture.path">{{ lecture.name }}</a>: {{ lecture.description
        }}</li>
    </ul>
</template>