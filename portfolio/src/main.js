import './style.css';
import { SceneManager } from './scene/SceneManager.js';
import { createParticles } from './scene/Particles.js';
import { initCursor } from './animations/cursor.js';
import { initScrollAnimations } from './animations/scrollAnimations.js';
import { simulateLoader } from './utils/loader.js';
import { AudioManager } from './audio/AudioManager.js';

window.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.getElementById('progress-fill');
  const loaderStatus = document.getElementById('loader-status');
  const loader = document.getElementById('loader');

  // Khởi tạo hệ thống âm thanh Web Audio
  const audioManager = new AudioManager();

  // 1. Màn hình Preloader
  simulateLoader(
    (progress) => {
      if (progressBar) progressBar.style.width = `${progress}%`;
      if (loaderStatus && progress > 50) {
        loaderStatus.textContent = 'Synchronizing network security nodes & kernel logs...';
      }
    },
    () => {
      if (loader) loader.classList.add('loaded');

      // 2. Kích hoạt WebGL 3D Network Security Mesh
      const canvas = document.getElementById('webgl-canvas');
      if (canvas) {
        const sceneManager = new SceneManager(canvas);
        createParticles(sceneManager.scene);
        sceneManager.animate();
      }

      // 3. Kích hoạt Tech Cursor & GSAP Reveal
      initCursor();
      initScrollAnimations();

      // 4. Gắn sự kiện âm thanh tương tác
      setupAudioInteractions(audioManager);

      // 5. Gắn sự kiện Modal Liên Hệ Trực Tiếp
      setupContactModal();
    }
  );
});

function setupAudioInteractions(audioManager) {
  const soundBtn = document.getElementById('btn-sound-toggle');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      audioManager.toggleSound(soundBtn);
    });
  }

  const clickableElements = document.querySelectorAll('.btn, .nav-cta, .project-link, .sound-toggle, .social-btn, .contact-card-btn, .modal-action-btn');
  clickableElements.forEach((el) => {
    el.addEventListener('click', () => {
      audioManager.playChime(640);
    });
    el.addEventListener('mouseenter', () => {
      audioManager.playHover();
    });
  });
}

function setupContactModal() {
  const modal = document.getElementById('modal-contact');
  const openBtn = document.getElementById('btn-hero-contact');
  const closeBtn = document.getElementById('btn-modal-close');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
      modal.classList.add('active');
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }
}
