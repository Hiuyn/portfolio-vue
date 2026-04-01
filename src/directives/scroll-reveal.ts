export const vScrollReveal = {
  mounted: (el: HTMLElement, binding: any) => {
    const delay = binding.value || 0

    el.style.opacity = '0' // Ẩn ban đầu
    el.style.transform = 'translateY(30px)'
    el.style.transition = `all 0.8s ease-out ${delay}ms`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            observer.unobserve(el) // Hiện rồi thì không theo dõi nữa
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
  }
}
