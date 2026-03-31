<script setup lang="ts">
import { computed } from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'
import { useRoute } from 'vue-router'
import Logo from './Logo.vue'
import { N } from 'vue-router/dist/index-BzEKChPW.js'
import type router from '@/router'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Về tôi',
    to: '#about-me',
    active: route.hash.startsWith('#about-me'),
    external: true
  },
  {
    label: 'Hành trình của tôi',
    to: '#my-journey',
    active: route.hash.startsWith('#my-journey'),
    external: true
  },
  {
    label: 'Dự án',
    to: '#projects',
    active: route.hash.startsWith('#projects'),
    external: true
  }
])
</script>

<template>
  <UHeader class="border-none shadow-2xl">
    <template #title>
      <router-link to="/" class="flex items-center gap-2">
        <div
          class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
        >
          H
        </div>
        <p class="font-bold text-xl hidden sm:block">Quách Ngọc Hiển</p>
      </router-link>
      <!-- <Logo class="h-6 w-auto" /> -->
    </template>

    <UNavigationMenu :items="items" highlight highlight-color="primary" />

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
