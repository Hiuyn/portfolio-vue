import piSaPetShop from '@/assets/images/pi-sa-pet-shop.png'
import akiko from '@/assets/images/xkld-akiko.png'

type Image = {
  path: string
  width: number
  height: number
}

type OtherProjectProps = {
  headline: string
  title: string
  description: string
  image: Image | null
  tech: string[]
  class?: string
  orientation?: 'horizontal' | 'vertical'
  reverse?: boolean
  to?: string
  target?: '_blank'
}

export const otherProjects: OtherProjectProps[] = [
  {
    headline: 'landing page',
    title: 'Akiko',
    description:
      'Thiết kế và phát triển trang đích (landing page) cho Akiko, nhằm thu hút khách hàng và tăng cường nhận diện thương hiệu.',
    orientation: 'horizontal' as const,
    class: 'lg:col-span-2',
    tech: ['NuxtJS', 'MySQL', 'TailwindCSS'],
    image: {
      path: akiko,
      width: 800,
      height: 600
    },
    reverse: false,
    to: 'https://xkldakiko.com/',
    target: '_blank'
  },
  {
    headline: 'Gobox Software ',
    title: 'Warehouse Management System',
    description:
      'Phát triển module quản lý kho (nhập, xuất, đóng gói, giao hàng) cho phần mềm quản lý kho thông minh Gobox, giúp tối ưu hóa quy trình vận hành và nâng cao hiệu quả quản lý kho.',
    orientation: 'vertical' as const,
    tech: ['ReactJS', 'Typescript'],
    image: null
  },
  {
    headline: 'Gobox Software ',
    title: 'E-commerce Platform',
    description: 'Tùy chỉnh bảng điều khiển quản trị và tích hợp chức năng theo dõi đơn hàng.',
    orientation: 'vertical' as const,
    tech: ['Medusa.js', 'NuxtJS', 'TailwindCSS'],
    image: null
  },
  {
    headline: 'AI',
    title: 'Pi sà pet shop',
    description:
      'Xây dựng hệ thống dự đoán sạt lở đất 3D bằng Nuxt.js và Python. Tích hợp dữ liệu địa hình và mô hình học máy để cảnh báo sạt lở đất, hỗ trợ công tác phòng chống thiên tai hiệu quả.',
    orientation: 'horizontal' as const,
    class: 'lg:col-span-2',
    tech: ['ReactJS', 'AI', 'TailwindCSS'],
    image: {
      path: piSaPetShop,
      width: 800,
      height: 600
    },
    reverse: true,
    to: 'https://pi-s-pet-shop-ai.vercel.app/',
    target: '_blank'
  },
  {
    headline: 'Fit Mart',
    title: 'E-commerce Platform',
    description:
      'Xây dựng website thương mại điện tử đồ thể thao full-stack bằng ReactJS và Spring Boot; triển khai giỏ hàng, quản lý sản phẩm và API RESTful.',
    orientation: 'vertical' as const,
    tech: ['ReactJS', 'Spring Boot', 'MySQL'],
    image: null
  },

  {
    headline: 'DG System',
    title: 'DG System – Warehouse Management',
    description:
      'Bảo trì và chuyển đổi hệ thống kho cũ từ VB.NET sang nền tảng web sử dụng .NET Core.',
    orientation: 'vertical' as const,
    tech: ['.NET Core', 'SQLServer'],
    image: null
  },
  {
    headline: 'Ecoplot',
    title: 'Ecoplot KKC & Ecoplot PRO',
    description:
      'Phát triển công cụ hiển thị dữ liệu địa hình và phân tích chuỗi thời gian bằng Vue.js và AWS. Tích hợp bản đồ tương tác và biểu đồ để hỗ trợ ra quyết định nông nghiệp thông minh.',
    orientation: 'vertical' as const,
    reverse: true,
    tech: ['VueJS', 'AWS', 'D3.js'],
    image: null
  },
  {
    headline: 'Jakarta Flood Prevention',
    title: 'Jakarta Flood Prevention',
    description: 'Xây dựng mô hình bản đồ 3D hệ thống thoát nước bằng CesiumJS.',
    orientation: 'vertical' as const,
    reverse: true,
    tech: ['HTML', 'CesiumJS', 'CSS'],
    image: null
  },

  {
    headline: 'Slope Automatic',
    title: 'Slope Automatic',
    description:
      'Xây dựng hệ thống dự đoán sạt lở đất 3D bằng Nuxt.js và Python. Tích hợp dữ liệu địa hình và mô hình học máy để cảnh báo sạt lở đất, hỗ trợ công tác phòng chống thiên tai hiệu quả.',
    orientation: 'vertical' as const,
    tech: ['NuxtJS', 'Python'],
    image: null
  }
]
