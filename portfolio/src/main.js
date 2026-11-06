import './style.css';
import { SceneManager } from './scene/SceneManager.js';
import { createParticles } from './scene/Particles.js';
import { initCursor } from './animations/cursor.js';
import { initScrollAnimations } from './animations/scrollAnimations.js';
import { simulateLoader } from './utils/loader.js';
import { AudioManager } from './audio/AudioManager.js';

function initApp() {
  // 1. Setup Theme immediately
  setupThemeToggle();

  const progressBar = document.getElementById('progress-fill');
  const loaderStatus = document.getElementById('loader-status');
  const loader = document.getElementById('loader');

  // Khởi tạo hệ thống âm thanh Web Audio
  const audioManager = new AudioManager();

  // 2. Màn hình Preloader
  simulateLoader(
    (progress) => {
      if (progressBar) progressBar.style.width = `${progress}%`;
      if (loaderStatus && progress > 50) {
        loaderStatus.textContent = 'Synchronizing network security nodes & kernel logs...';
      }
    },
    () => {
      if (loader) loader.classList.add('loaded');

      // 3. Kích hoạt WebGL 3D Network Security Mesh
      const canvas = document.getElementById('webgl-canvas');
      if (canvas) {
        try {
          const sceneManager = new SceneManager(canvas);
          createParticles(sceneManager.scene);
          sceneManager.animate();
        } catch (e) {
          console.warn('WebGL init skipped:', e);
        }
      }

      // 4. Kích hoạt Cursor & Hiệu ứng cuộn GSAP
      initCursor();
      initScrollAnimations();

      // 5. Gắn sự kiện âm thanh tương tác
      setupAudioInteractions(audioManager);

      // 6. Gắn sự kiện Modal, Project Tabs & Hero Interactions
      setupContactModal();
      setupProjectTabs();
      setupHeroInteractions(audioManager);
    }
  );
}

// Resilient DOM ready check
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/* ================= THEME TOGGLE (LIGHT / DARK) ================= */
function setupThemeToggle() {
  const btn = document.getElementById('btn-theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeBtn(btn, savedTheme);

  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeBtn(btn, next);
    });
  }
}

function updateThemeBtn(btn, theme) {
  if (!btn) return;
  const icon = btn.querySelector('.theme-icon');
  const text = btn.querySelector('.theme-text');
  if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  if (text) text.textContent = theme === 'dark' ? 'Light' : 'Dark';
}

/* ================= AUDIO INTERACTIONS ================= */
function setupAudioInteractions(audioManager) {
  const soundBtn = document.getElementById('btn-sound-toggle');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      audioManager.toggleSound(soundBtn);
    });
  }

  const clickableElements = document.querySelectorAll('.btn, .nav-cta, .project-link, .sound-toggle, .social-btn, .contact-card-btn, .modal-action-btn, .theme-toggle');
  clickableElements.forEach((el) => {
    el.addEventListener('click', () => {
      audioManager.playChime(640);
    });
    el.addEventListener('mouseenter', () => {
      audioManager.playHover();
    });
  });
}

/* ================= MODAL LIÊN HỆ ================= */
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

/* ================= PROJECT TABS FILTER ================= */
function setupProjectTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const cards = document.querySelectorAll('.project-card');
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const filter = tab.dataset.filter;
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      cards.forEach((card) => {
        const cat = card.dataset.category;
        const matches = filter === 'all' || cat === filter;
        if (matches) {
          card.classList.remove('hidden');
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ================= INTERACTIVE HERO ENTITIES & BULLETPROOF CV ================= */
function setupHeroInteractions(audioManager) {
  // 1. Folders interaction: jumping to categories & filtering with active feedback
  const folders = document.querySelectorAll('.folder-interactive');
  folders.forEach((folder) => {
    folder.addEventListener('click', (e) => {
      // Don't trigger folder navigation if clicking on a download link inside the folder
      if (e.target.closest('a') || e.target.closest('button')) return;

      const target = folder.dataset.target;
      audioManager?.playChime?.(520);

      if (target === 'security' || target === 'web') {
        const tab = document.querySelector(`.tab-btn[data-filter="${target}"]`);
        if (tab) tab.click();
        const section = document.getElementById('projects');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (target === 'skills') {
        const section = document.getElementById('skills');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 2. Clickable category pills
  const catButtons = document.querySelectorAll('.cat-pill-btn');
  catButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      audioManager?.playChime?.(580);
      const tab = document.querySelector(`.tab-btn[data-filter="${filter}"]`);
      if (tab) tab.click();
      const section = document.getElementById('projects');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // 3. Bulletproof CV Download Handlers
  const cvButtons = document.querySelectorAll('#btn-hero-cv, #btn-doc-cv, .doc-download-btn');
  cvButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      audioManager?.playChime?.(720);
    });
  });
}
