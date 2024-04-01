<template>
  <div :style="isDark ? { backgroundColor: 'rgb(73,72,72)' } : null">
    <NuxtLayout>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import darkMood from './composable/useDarkMood';

const { isDark, toggleDarkMode } = darkMood()
</script>

<style scoped></style>