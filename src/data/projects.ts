import aiChatBot from '@/assets/images/ai-chat-bot.png'
import gobox from '@/assets/images/gobox-landing.png'
import goship from '@/assets/images/goship.png'

type ProjectProps = {
  headline: string
  title: string
  description: string
  image: string
  tech: string[]
}

export const projects: ProjectProps[] = [
  {
    headline: 'AI & Integration',
    title: 'Line Bot Chat',
    description: `
    Giải pháp chatbot tích hợp với LINE để cung cấp dịch vụ hỗ trợ khách hàng tự động, giúp doanh nghiệp tăng cường tương tác và cải thiện trải nghiệm người dùng.
    `,
    image: aiChatBot,
    tech: ['LINE Messaging API', 'OpenAI', 'Strapi', 'NuxtJS', 'TailwindCSS', 'PostgreSQL']
  },
  {
    headline: 'Software',
    title: 'Gobox landing page',
    description: `
    Thiết kế và phát triển trang đích (landing page) cho Gobox, một phần mềm quản lý kho thông minh, nhằm thu hút khách hàng và tăng cường nhận diện thương hiệu.`,
    image: gobox,
    tech: ['NuxtJS', 'Nuxt UI', 'Strapi', 'TailwindCSS', 'PostgreSQL']
  },
  {
    headline: 'Software',
    title: 'Goship',
    description: `
    Phát triển một nền tảng vận chuyển hàng hóa trong nước và nước ngoài, cung cấp dịch vụ giao hàng nhanh chóng và tiện lợi cho khách hàng.`,
    image: goship,
    tech: ['VueJS', 'Element UI', 'GoogleApi', 'Quasar', 'MySQL']
  }
]
