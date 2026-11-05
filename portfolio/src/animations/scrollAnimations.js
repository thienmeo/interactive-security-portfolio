import gsap from 'gsap';

export function initScrollAnimations() {
  // Timeline hoạt cảnh mở màn (Intro Hero Animation)
  const tl = gsap.timeline({ delay: 0.2 });

  tl.from('.hero-badge', {
    y: -20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
  .from('.hero-title', {
    y: 35,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  }, '-=0.5')
  .from('.hero-subtitle', {
    y: 25,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6')
  .from('.hero-actions', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6')
  .from('.metrics-strip', {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  }, '-=0.5');

  // Hiệu ứng tương tác card 3D micro-tilt khi di chuột
  const cards = document.querySelectorAll('.feature-card');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(card, {
        rotationY: x * 0.05,
        rotationX: -y * 0.05,
        duration: 0.4,
        ease: 'power1.out',
        transformPerspective: 800
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.6,
        ease: 'power2.out'
      });
    });
  });
}
