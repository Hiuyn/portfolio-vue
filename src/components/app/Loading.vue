<template>
  <Transition name="page-load">
    <div v-if="show" class="loading-screen">
      <div class="loader-content">
        <div class="relative flex items-center justify-center">
          <div class="loader-circle" />
          <div class="loader-inner-dot" />
        </div>
        <p class="loading-text">Portfolio</p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{ show: boolean }>()
</script>

<style scoped>
/* Màn hình Loading phủ toàn diện */
.loading-screen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background-color: var(--ui-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

/* Thiết kế Spinner vòng tròn */
.loader-circle {
  width: 64px;
  height: 64px;
  border: 3px solid color-mix(in srgb, var(--ui-primary), transparent 90%); /* --ui-primary mờ */
  border-top: 3px solid var(--ui-primary); /* --ui-primary màu tím của bạn */
  border-radius: 50%;
  animation: spin 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}

.loader-inner-dot {
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: var(--ui-secondary); /* Màu xanh secondary */
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite;
}

.loading-text {
  color: var(--ui-primary);
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 300;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  animation: fade-text 2s infinite;
}

/* --- ANIMATIONS --- */

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}

@keyframes fade-text {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

/* Hiệu ứng Transition khi Loading biến mất */
.page-load-leave-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-load-leave-to {
  opacity: 0;
  filter: blur(20px); /* Hiệu ứng nhòe đi khi mở trang */
  transform: scale(1.05); /* Hơi phóng to nhẹ tạo cảm giác đi sâu vào trang */
}
</style>
