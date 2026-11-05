import gsap from 'gsap';

export function initCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');

  if (!dot || !ring) return;

  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    gsap.set(dot, { x: mouse.x, y: mouse.y });
  });

  gsap.ticker.add(() => {
    pos.x += (mouse.x - pos.x) * 0.15;
    pos.y += (mouse.y - pos.y) * 0.15;
    gsap.set(ring, { x: pos.x, y: pos.y });
  });

  const interactiveElements = document.querySelectorAll('button, a, .feature-card');
  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      gsap.to(ring, {
        scale: 1.5,
        borderColor: '#385a42',
        backgroundColor: 'rgba(56, 90, 66, 0.06)',
        duration: 0.25
      });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(ring, {
        scale: 1,
        borderColor: 'rgba(67, 101, 77, 0.3)',
        backgroundColor: 'transparent',
        duration: 0.25
      });
    });
  });
}
