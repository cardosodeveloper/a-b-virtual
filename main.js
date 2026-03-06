/* ===========================
   AVIANCA BRASIL VIRTUAL - JS
   =========================== */

document.addEventListener('DOMContentLoaded', () => {

  // ---- NAVBAR: adiciona sombra ao rolar ----
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  // ---- REVEAL ON SCROLL ----
  const revealEls = document.querySelectorAll(
    '.card, .section-title, .section-desc, .section-label, .op-group, .frota-tabs'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 80 * (Array.from(revealEls).indexOf(entry.target) % 4));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach(el => observer.observe(el));

  // ---- FROTA TABS ----
  const tabs = document.querySelectorAll('.tab');
  const frotaCards = document.querySelectorAll('.frota-card');

  const frotaData = [
    {
      nome: 'Airbus A319',
      assentos: '124 assentos',
      rotas: 'Rotas regionais',
      badge: 'Airb'
    },
    {
      nome: 'Airbus A320 CEO',
      assentos: '165 assentos',
      rotas: 'Rotas domésticas',
      badge: 'Airb'
    },
    {
      nome: 'Airbus A320 NEO',
      assentos: '174 assentos',
      rotas: 'Rotas nacionais',
      badge: 'Airb'
    }
  ];

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Atualiza o card correspondente com destaque
      frotaCards.forEach((card, i) => {
        card.style.border = i === index
          ? '2px solid var(--red)'
          : '1px solid #ececec';
        card.style.transform = i === index ? 'translateY(-5px)' : 'translateY(0)';
        card.style.boxShadow = i === index
          ? '0 10px 32px rgba(208,2,27,0.15)'
          : '';
      });
    });
  });

  // ---- SMOOTH SCROLL para links internos ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 70;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ---- BOTÃO CADASTRO: animação de pulso ----
  const btnCadastro = document.querySelector('.btn-cadastro');
  if (btnCadastro) {
    setInterval(() => {
      btnCadastro.style.transform = 'scale(1.04)';
      setTimeout(() => {
        btnCadastro.style.transform = 'scale(1)';
      }, 200);
    }, 4000);
  }

  // ---- HERO PARALLAX SUTIL ----
  const hero = document.querySelector('.hero');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (hero && scrollY < window.innerHeight) {
      hero.style.backgroundPositionY = `calc(50% + ${scrollY * 0.25}px)`;
    }
  });

});
