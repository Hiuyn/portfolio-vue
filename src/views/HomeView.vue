<script setup lang="ts">
import { ref, provide, reactive  } from 'vue'
import type { ButtonProps, PageFeatureProps, TimelineItem } from '@nuxt/ui'
import { projects } from "../data/projects";
import { blender } from "../data/blender";
import { otherProjects } from "../data/otherProjects";
import Threejs from '@/components/Threejs.vue';

const links = ref<ButtonProps[]>([
  {
    label: 'Xem dự án',
    to: '#projects',
    icon: 'i-lucide-square-play',
    variant: 'outline',
    color: 'secondary',
    external: true,
  },
  // {
  //   label: 'Learn more',
  //   to: '/docs/getting-started/theme/design-system',
  //   color: 'primary',
  //   variant: 'link',
  //   trailingIcon: 'i-lucide-arrow-right'
  // }
])
const items: TimelineItem[] = [
  {
    date: '08/2025 - now',
    title: 'Freelance',
    icon: 'i-lucide-rocket',
    value: 'freelance',
    description: `
  <ul>
    <li>Phát triển và thiết kế landing pages sử dụng <strong class="text-secondary">Nuxt.js, WordPress</strong>.
    </li>
  </ul>
`
  },
  {
    date: '12/2024 - 07/2025',
    title: 'Công ty LIM Corp',
    icon: 'i-lucide-code',
    value: 'design',
    description: `
  <ul>
    <li>Phát triển tính năng Web Enterprise dựa trên hệ sinh thái <strong class="text-secondary">Vue.js, React.js</strong> và <strong class="text-secondary">TypeScript</strong>.
    </li>
    <li>Tối ưu hiệu năng (Core Web Vitals) bằng <strong class="text-secondary">Lazy loading</strong> và <strong class="text-secondary">Code splitting</strong>, giúp giảm <strong class="text-secondary">30%</strong> thời gian phản hồi của hệ thống..
    </li>
    <li>Thiết kế kiến trúc mã nguồn theo hướng <strong class="text-secondary">Module hóa</strong>, tối ưu khả năng bảo trì và tái sử dụng linh kiện UI.
    </li>
    <li>Tích hợp các thư viện UI hiện đại (<strong class="text-secondary">Ant Design, Nuxt UI</strong>) để chuẩn hóa giao diện và đẩy nhanh tiến độ dự án thêm <strong class="text-secondary">15%</strong>.
    </li>
    <li>Vận hành trong quy trình <strong class="text-secondary">Agile/Scrum</strong>, phối hợp đa phòng ban để đảm bảo chất lượng Release ổn định.
    </li>
  </ul>
`
  },
  {
    date: '01/2021 - 10/2024',
    title: 'Sinka Viet Nam, JSC',
    icon: 'i-lucide-code',
    value: 'development',
    description: `
    <ul>
    <li>Nghiên cứu và phát triển giải pháp <strong class="text-secondary">3D Visualization</strong> tích hợp trực tiếp vào các nền tảng quản lý phần mềm.
    </li>
    <li>Đảm bảo tiêu chuẩn <strong class="text-secondary">Chất lượng Nhật Bản</strong> khắt khe về trải nghiệm người dùng và độ tin cậy của hệ thống.
    </li>
    <li>Phân tích phản hồi khách hàng theo hướng <strong class="text-secondary">Data-driven</strong> để đề xuất các cải tiến sản phẩm đột phá.
    </li>
    <li>Xây dựng hệ thống <strong class="text-secondary">Tài liệu kỹ thuật</strong> chuẩn hóa, phục vụ công tác bàn giao và vận hành hệ thống lâu dài.
    </li>
    <li>Chịu trách nhiệm triển khai sản phẩm (Deployment) lên môi trường <strong class="text-secondary">Production</strong>, đảm bảo tính sẵn sàng cao.
    </li>
  </ul>
    `
  },
  {
    date: '2018 - 2020',
    title: 'Aptech computer education',
    description: 'Cử nhân công nghệ thông tin',
    icon: 'i-lucide-book-open-check',
    value: 'learning'
  }
]

const heroDescription = ref(`
Tôi là <strong class="text-primary">Quách Ngọc Hiển</strong>, một <strong class="text-secondary">Front-end Developer</strong> chuyên về <strong class="text-secondary">Vue.js</strong> và các giải pháp <strong class="text-secondary">3D Visualization</strong>. Biến những cấu trúc mã nguồn phức tạp thành giao diện người dùng mượt mà và trực quan.`)

const introduction = ref(`
  "Với hơn <strong class="text-secondary">3 năm</strong> kinh nghiệm thực chiến, tôi đã đồng hành cùng các doanh nghiệp từ giai đoạn Startup đến quy mô Enterprise (LIM Corp, Sinka Japan). Tôi không chỉ viết code, tôi tập trung vào việc <strong class="text-secondary">tối ưu hiệu năng (Core Web Vitals)</strong> và xây dựng hệ thống <strong class="text-secondary">mô hình hóa 3D (3D Visualization)</strong> để giải quyết các bài toán dữ liệu phức tạp."`)

const features = ref<PageFeatureProps[]>([
  {
    title: 'Front-end Mastery',
    description: 'Chuyên sâu Vue/Nuxt, tối ưu Lazy loading, Code splitting và kiến trúc Module hóa.',
    icon: 'i-lucide-layers',
  },
  {
    title: '3D & Interactive',
    description: 'Thành thạo Three.js, CesiumJS và Blender để tạo ra các bản đồ địa hình, hệ thống quản lý kho 3D trực quan.',
    icon: 'i-lucide-view',
  },
  {
    title: 'Quality Mindset',
    description: 'Tư duy Agile/Scrum, kinh nghiệm làm việc với khách hàng Nhật Bản, ưu tiên viết mã sạch (Clean Code) và dễ bảo trì.',
    icon: 'i-lucide-award',
  }
])


const skills = reactive({
  languages: { name: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'] },
  frameworks: { name: 'Frameworks', items: ['Vue.js', 'Nuxt.js', 'React.js'] },
  backend: { name: 'Backend & DB', items: ['Node.js', 'Strapi', 'MySQL', 'PostgreSQL', 'SQLServer', 'MongoDB'] },
  tools: { name: 'Tools', items: ['AWS', 'Git', 'Figma', 'Blender', 'CesiumJS', 'Three.js'] }
})
</script>

<template>
  <div class="relative">
    <Threejs />
    <UPageHero
      class="absolute inset-0"
      title="Portfolio"
      :links="links"
      :ui="{
        wrapper: 'bg-default/30 backdrop-blur-xs p-6 rounded-lg',
      }"
    >
      <template #description>
        <p
          class="text-lg text-muted"
          v-html="heroDescription"
        />
      </template>
    </UPageHero>
  </div>

  <UPageSection
    id="about-me"
    class="bg-inverted"
    :ui="{
      container: 'px-0 sm:px-0 lg:px-0 pb-0 sm:pb-0 lg:pb-0',
    }"
  >
    <UContainer class="text-center text-2xl text-muted">
      <div v-html="introduction" />
    </UContainer>
  </UPageSection>
  <UPageSection
    class="bg-inverted"
    title="Một chút thông tin về tôi"
    orientation="horizontal"
    :features="features"
  >
    <img
      src="https://picsum.photos/704/1294"
      width="352"
      height="647"
      alt="Illustration"
      class="w-full rounded-lg h-[500px]"
      loading="lazy"
    >
    <template #footer>
      <div class="description">
        <ul>
          <li
            v-for="(skill, category) in skills"
            :key="category"
            class="flex gap-2 mb-2"
          >
            <h4>{{ skill.name }}</h4>
            <UBadge
              v-for="item in skill.items"
              :key="item"
              variant="outline"
              color="secondary"
            >
              {{ item }}
            </UBadge>
          </li>
        </ul>
      </div>
    </template>
  </UPageSection>
  <UPageSection
    id="my-journey"
    title="Hành trình của tôi"
    icon="i-lucide-history"
  >
    <UTimeline
      :items="items"
      :default-value="2"
      :ui="{
        root: 'mx-auto',
        item: 'lg:even:flex-row-reverse lg:even:-translate-x-[calc(100%-2rem)] lg:even:text-left lg:max-w-[500px]'
      }"
      class="lg:translate-x-[calc(50%-1rem)]"
    >
      <template #wrapper="{ item }">
        <UPageCard
          variant="solid"
          "
        >
          <template #title>
            <div class="text-dimmed text-xs/5">
              {{ item.date }}
            </div>
            <h3>{{ item.title }}</h3>
          </template>
          <template #description>
            <div
              class="description"
              v-html="item.description"
            />
          </template>
        </UPageCard>
      </template>
    </UTimeline>
  </UPageSection>
  <UPageSection
    id="projects"
    class="bg-inverted"
    title="Dự án tiêu biểu"
    icon="i-lucide-rocket"
  >
    <UBlogPosts orientation="vertical">
      <UPageCard
        v-for="(post, index) in projects.slice(0, 3)"
        :key="index"
        orientation="horizontal"
        :reverse="index % 2 !== 0"
        v-bind="post"
        variant="naked"
      >
        <img
          :src="post.image"
          width="160"
          height="90"
          alt="Post image"
          class="w-full rounded-lg object-cover"
          loading="lazy"
        >
        <template #title>
          <p class="text-primary text-sm">
            {{ post.headline }}
          </p>
          <h3 class="text-2xl">
            {{ post.title }}
          </h3>
        </template>
        <template #description>
          <div v-html="post.description" />
          <div class="flex flex-wrap gap-2 mt-4">
            <UBadge
              v-for="item in post.tech"
              :key="item"
              color="secondary"
              variant="outline"
            >
              {{ item }}
            </UBadge>
          </div>
        </template>
      </UPageCard>
    </UBlogPosts>
  </UPageSection>
  <UPageSection
    title="Dự án blender + threejs"
    icon="i-lucide-blend"
  >
    <UBlogPosts orientation="vertical">
      <UPageCard
        v-for="(post, index) in blender"
        :key="index"
        orientation="horizontal"
        :reverse="index % 2 !== 0"
        v-bind="post"
        variant="naked"
        target="_blank"
      >
        <img
          v-if="post.image"
          :src="post.image"
          width="160"
          height="90"
          alt="Post image"
          class="w-full rounded-lg object-cover"
          loading="lazy"
        >
        <template #title>
          <p class="text-primary text-sm">
            {{ post.headline }}
          </p>
          <h3 class="text-2xl">
            {{ post.title }}
          </h3>
        </template>
        <template #description>
          <div v-html="post.description" />
          <div class="flex flex-wrap gap-2 mt-4">
            <UBadge
              v-for="item in post.tech"
              :key="item"
              color="secondary"
              variant="outline"
            >
              {{ item }}
            </UBadge>
          </div>
        </template>
      </UPageCard>
    </UBlogPosts>
  </UPageSection>
  <UPageSection
    class="bg-inverted"
    title="Các dự án khác"
    icon="i-lucide-folder-kanban"
  >
    <UPageGrid>
      <UPageCard
        v-for="(post, index) in otherProjects"
        :key="index"
        v-bind="post"
        spotlight
        spotlight-color="primary"
      >
        <img
          v-if="post.image"
          :src="post.image.path"
          :width="post.image.width"
          :height="post.image.height"
          alt="Post image"
          class="w-full rounded-lg object-cover"
          loading="lazy"
        >
        <template #title>
          <p class="text-primary text-sm">
            {{ post.headline }}
          </p>
          <h3 class="text-2xl">
            {{ post.title }}
          </h3>
        </template>
        <template #description>
          <div v-html="post.description" />
          <div class="flex flex-wrap gap-2 mt-4">
            <UBadge
              v-for="item in post.tech"
              :key="item"
              color="secondary"
              variant="outline"
            >
              {{ item }}
            </UBadge>
          </div>
        </template>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>

<style>
.description ul {
  list-style: disc;
  padding-left: 1.5rem;
}
.direction-rtl {
  direction: rtl;
}
</style>
