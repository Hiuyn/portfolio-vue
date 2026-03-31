import tShirt from '@/assets/images/t-shirt.png'
import robot from '@/assets/images/room-robot.png'
import waterfall from '@/assets/images/waterfall.png'

type BlenderProps = {
  headline: string
  title: string
  description: string
  image?: string
  to?: string
  tech: string[]
}

export const blender: BlenderProps[] = [
  {
    headline: 'Model 3D',
    title: 'Waterfall Scene',
    description: `
    Một cảnh thác nước được tạo ra bằng phần mềm Blender, sử dụng các kỹ thuật mô hình hóa, vật liệu và ánh sáng để tạo ra một hình ảnh chân thực và sống động của thác nước. Cảnh này có thể bao gồm các yếu tố như đá, cây cối và nước chảy, tạo nên một khung cảnh thiên nhiên tuyệt đẹp.
    `,
    image: waterfall,
    to: 'https://sinkavn.com/wp-content/themes/front/SinkaCustom/Embed/waterfall.html',
    tech: ['Blender', 'Three.js']
  },
  {
    headline: 'Model 3D & Ai Integration',
    title: 'T-Shirt Design',
    description: `
      Một thiết kế áo thun 3D được tạo ra bằng phần mềm Blender, sử dụng các kỹ thuật mô hình hóa và vật liệu để tạo ra một hình ảnh chân thực của áo thun. Thiết kế này có thể bao gồm các yếu tố như màu sắc, họa tiết và chi tiết của áo thun, tạo nên một sản phẩm thời trang hấp dẫn và độc đáo.`,
    image: tShirt,
    to: 'https://aicenterworld.com/showcase/t-shirt/',
    tech: ['Blender', 'Three.js']
  },
  {
    headline: 'Model 3D',
    title: 'Room Robot',
    description: `
      Một mô hình 3D của một robot phòng được tạo ra bằng phần mềm Blender, sử dụng các kỹ thuật mô hình hóa và vật liệu để tạo ra một hình ảnh chân thực của robot. Mô hình này có thể bao gồm các yếu tố như thiết kế cơ khí, chi tiết và màu sắc của robot, tạo nên một sản phẩm công nghệ hấp dẫn và độc đáo.`,
    image: robot,
    to: 'https://aicenterworld.com/showcase/room-robot/',
    tech: ['Blender', 'Three.js']
  }
]
