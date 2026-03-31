<script setup lang="ts">
import AppHeader from '@/components/app/Header.vue'
import AppFooter from '@/components/app/Footer.vue'
</script>

<template>
  <AppHeader />

  <UMain>
    <router-view />
  </UMain>

  <AppFooter />
</template>
