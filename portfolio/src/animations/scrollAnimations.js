import gsap from 'gsap';

export function initScrollAnimations() {
  const tl = gsap.timeline({ delay: 0.1 });

  const heroTopPill = document.querySelector('.hero-top-pill');
  const heroTitle = document.querySelector('.hero-portfolio-title');
  const heroSub = document.querySelector('.hero-portfolio-sub');
  const folderDeck = document.querySelector('.folder-deck');
  const shelfDivider = document.querySelector('.shelf-divider-strip');
  const heroActions = document.querySelector('.hero-actions');
  const infoStrip = document.querySelector('.info-strip');

  if (heroTopPill) {
    tl.from(heroTopPill, { y: -15, opacity: 0, duration: 0.6, ease: 'power3.out' });
  }
  if (heroTitle) {
    tl.from(heroTitle, { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4');
  }
  if (heroSub) {
    tl.from(heroSub, { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4');
  }
  if (folderDeck) {
    tl.from(folderDeck, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.3');
  }
  if (shelfDivider) {
    tl.from(shelfDivider, { opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4');
  }
  if (heroActions) {
    tl.from(heroActions, { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3');
  }
  if (infoStrip) {
    tl.from(infoStrip, { y: 25, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3');
  }

  // Micro-tilt on project cards
  const cards = document.querySelectorAll('.project-card, .skill-card');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(card, {
        rotationY: x * 0.02,
        rotationX: -y * 0.02,
        duration: 0.3,
        ease: 'power1.out',
        transformPerspective: 1000
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
    });
  });
}
