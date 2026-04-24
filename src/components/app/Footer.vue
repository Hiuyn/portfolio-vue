<script setup lang="ts">
import type router from '@/router'
import type { NavigationMenuItem } from '@nuxt/ui'
import { computed } from 'vue'

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Links',
    type: 'label'
  },
  {
    label: 'Về tôi',
    to: '#about-me',
    external: true
  },
  {
    label: 'Hành trình của tôi',
    to: '#my-journey',
    external: true
  },
  {
    label: 'Dự án',
    to: '#projects',
    external: true
  }
])

const inforList = [
  {
    id: 1,
    text: 'Email: hien.quach.13129@gmail.com'
  },
  {
    id: 2,
    text: 'SDT: +84 988 782 096'
  },
  {
    id: 3,
    text: 'Địa chỉ: ngách 54/2 đường ngọc hồi, phường hoàng liệt, hà nội'
  }
]

const links = [
  {
    id: 1,
    svg: '/svg/github-142-svgrepo-com.svg',
    url: 'https://github.com/Hiuyn',
    label: 'GitHub'
  },
  {
    id: 2,
    svg: '/svg/linkedin-svgrepo-com.svg',
    url: 'https://www.linkedin.com/in/hi%E1%BB%83n-qu%C3%A1ch-068104332/',
    label: 'LinkedIn'
  }
]
</script>

<template>
  <UFooter :ui="{ left: 'justify-start', center: 'lg:justify-center justify-between ' }">
    <template #left>
      <div class="flex flex-col gap-8">
        <router-link to="/" class="flex items-center gap-2">
          <div
            class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
          >
            H
          </div>
          <p class="font-bold text-xl hidden sm:block">Quách Ngọc Hiển</p>
        </router-link>
        <div class="flex flex-col gap-2">
          <template v-for="infor in inforList" :key="infor.id">
            <p class="text-sm">
              {{ infor.text }}
            </p>
          </template>
        </div>

        <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}</p>
      </div>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
      orientation="vertical"
      class="data-[orientation=vertical]:w-48"
    />
  </UFooter>
</template>
