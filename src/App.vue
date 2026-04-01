<script setup lang="ts">
import { ref, onMounted, provide } from 'vue'
import AppLoader from '@/components/app/Loading.vue'

const isLoading = ref(true)
// Cung cấp trạng thái này cho các component con nếu cần (dùng provide/inject)
provide('isAppLoading', isLoading)

onMounted(() => {
  if (document.readyState === 'complete') {
    finishLoading()
  } else {
    window.addEventListener('load', finishLoading)
  }
})

function finishLoading() {
  setTimeout(() => {
    isLoading.value = false
  }, 600)
}
</script>

<template>
  <div class="app-container bg-default">
    <AppLoader :show="isLoading" />

    <div :class="['main-content', { 'is-ready': !isLoading }]">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
}

.main-content {
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s ease-in-out;
}

.main-content.is-ready {
  opacity: 1;
  visibility: visible;
}
</style>
