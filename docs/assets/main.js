// ========================================
// main.js — Navbar & Interactions v2
// ========================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Navbar scroll effect ----
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---- Mobile nav toggle ----
  const toggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.classList.toggle('active');
    });
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.classList.remove('active');
      });
    });
  }

  // ---- Scroll Reveal: Intersection Observer ----
  const revealEls = document.querySelectorAll(
    '.card, .prototype-card, .mechanic-card, .chain-item, .timeline-item, .q-item, .coming-soon-card, .preview-card, .section-header, .evidence-item, .question-card, .student-project-card, .roadmap-item, .stat-card, .work-map-card, .index-group, .route-card, .evidence-preview-grid img, .path-card, .camp-step, .novice-expert-card, .template-card, .lane, .coding-item, .resource-strip, .domain-position, .paper-panel, .flow-step, .paper-evidence-card, .paper-claim'
  );

  if ('IntersectionObserver' in window && revealEls.length) {
    const staggerDelay = (el) => {
      const parent = el.parentElement;
      if (!parent) return 0;
      const siblings = Array.from(parent.querySelectorAll(':scope > *'));
      const idx = siblings.indexOf(el);
      return idx * 80;
    };

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = staggerDelay(entry.target);
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    revealEls.forEach((el) => {
      el.classList.add('reveal');
      obs.observe(el);
    });
  }

  // ---- Parallax tilt on cards ----
  const tiltCards = document.querySelectorAll('.prototype-card, .card');
  tiltCards.forEach(card => {
    if (window.matchMedia('(pointer: fine)').matches) {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg) translateY(-8px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        setTimeout(() => { card.style.transition = ''; }, 500);
      });
      card.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
      });
    }
  });

  // ---- Smooth scroll anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- Chain items: sequential entrance ----
  const chainItems = document.querySelectorAll('.chain-item');
  if (chainItems.length && 'IntersectionObserver' in window) {
    const chainObs = new IntersectionObserver((entries) => {
      entries.forEach(() => {
        if (entries[0].isIntersecting) {
          chainItems.forEach((item, i) => {
            setTimeout(() => {
              item.classList.add('visible');
            }, i * 120);
          });
          chainObs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    const chain = document.querySelector('.design-chain');
    if (chain) chainObs.observe(chain);
  }

});
