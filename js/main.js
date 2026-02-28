/* LEAP Business Solutions – Main JS */

// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ── Mobile menu ──
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// ── Active nav link ──
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === 'index.html' && href === './') || href === './' && currentPage === '') {
    link.classList.add('active');
  }
});

// ── FAQ accordion ──
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-a');
    const isOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-a').style.maxHeight = '0';
    });
    // Toggle clicked
    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// ── Scroll animations ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── Contact form ──
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('✅ Thank you! We\'ll call you within 1 hour.');
    contactForm.reset();
  });
}

// ── Checklist download ──
const downloadBtn = document.getElementById('downloadChecklist');
if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    generateChecklist();
  });
}

function generateChecklist() {
  const items = [
    'Provident Fund (PF) – Monthly ECR filing & payment',
    'Employee State Insurance (ESIC) – Monthly contribution & return',
    'Professional Tax (PT) – Monthly deduction & quarterly/annual return',
    'Labour Welfare Fund (LWF) – Half-yearly/annual contribution',
    'Payment of Bonus Act – Annual bonus payment (8.33% – 20%)',
    'Payment of Gratuity Act – Gratuity fund & actuarial valuation',
    'Maternity Benefit Act – Policy, benefits & record maintenance',
    'POSH Act – ICC formation, annual report & training',
    'Employment Exchange Act – Quarterly return filing',
    'Contract Labour (R&A) Act – License & return filing',
    'Shops & Establishment Act – Annual renewal of registration',
    'Minimum Wages Act – Revision compliance & wage register',
    'Payment of Wages Act – Wage slip & deduction register',
    'Equal Remuneration Act – Register of workers',
    'Factory Act – Annual return & license renewal (if applicable)',
  ];

  let content = 'LEAP BUSINESS SOLUTIONS\nCompliance Checklist – India Labour Laws\nwww.leapbusiness.in | support@leapbusiness.in | +91 79772 13501\n';
  content += '='.repeat(60) + '\n\n';
  items.forEach((item, i) => {
    content += `[ ] ${i + 1}. ${item}\n\n`;
  });
  content += '\n' + '='.repeat(60) + '\n';
  content += 'For a FREE Compliance Audit within 1 hour, call us now!\n';
  content += 'Mumbai, Maharashtra | Pan-India Services\n';

  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'LEAP-Compliance-Checklist.txt';
  a.click();
  showToast('📥 Checklist downloaded!');
}

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

// ── Counter animation ──
function animateCounter(el, target, suffix = '') {
  let current = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current) + suffix;
  }, 25);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.stat-num').forEach(el => {
        const val = el.dataset.val;
        const suffix = el.dataset.suffix || '';
        animateCounter(el, parseInt(val), suffix);
      });
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.hero-stats');
if (statsSection) statsObserver.observe(statsSection);
