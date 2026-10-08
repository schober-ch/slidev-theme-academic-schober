<template>
  <LectureHeader
  v-if="$slidev.nav.currentPage !== 1 &&  $slidev.configs.lectureHeader"></LectureHeader>
  <Pagination
    v-if="
      $nav.currentPage !== $nav.total + 1 &&
      !$slidev.themeConfigs.paginationPagesDisabled?.includes($nav.currentPage) &&
      ($slidev.themeConfigs.paginationX || $slidev.themeConfigs.paginationY)
  " :x="$slidev.themeConfigs.paginationX" :y="$slidev.themeConfigs.paginationY"
  />
</template>
