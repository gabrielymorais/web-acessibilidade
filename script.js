const fontIncreaseButton = document.getElementById('font-increase');
const fontDecreaseButton = document.getElementById('font-decrease');
const fontResetButton = document.getElementById('font-reset');
const fontStatus = document.getElementById('font-status');

const toggleDarkButton = document.getElementById('toggle-dark');
const toggleCvdButton = document.getElementById('toggle-cvd');
const themeStatus = document.getElementById('theme-status');

const mobileMenuToggleButton = document.getElementById('mobile-menu-toggle');
const navPanel = document.getElementById('nav-panel');
const navLinks = document.querySelectorAll('.site-nav a');
const body = document.body;

const MIN_FONT_SCALE = 0.9;
const MAX_FONT_SCALE = 1.4;
const FONT_STEP = 0.1;


function setButtonIcon(button, svgString) {
  const icon = button?.querySelector('.icon');
  if (!icon) return;
  icon.innerHTML = svgString;
}

const ICONS = {
  moon: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8Z"></path>
    </svg>
  `,
  sun: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="M4.93 4.93l1.41 1.41"></path>
      <path d="M17.66 17.66l1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="M4.93 19.07l1.41-1.41"></path>
      <path d="M17.66 6.34l1.41-1.41"></path>
    </svg>
  `,
  palette: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3a9 9 0 0 0 0 18h1.2a2.3 2.3 0 0 0 0-4.6H12a2 2 0 0 1 0-4h2.3a3.7 3.7 0 0 0 0-7.4H12Z"></path>
      <circle cx="7.5" cy="10.5" r="1"></circle>
      <circle cx="9.5" cy="7.5" r="1"></circle>
      <circle cx="14.5" cy="7.5" r="1"></circle>
      <circle cx="16.5" cy="10.5" r="1"></circle>
    </svg>
  `,
  check: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 6 9 17l-5-5"></path>
    </svg>
  `,
};


const storedFontScale = Number(localStorage.getItem('fontScale'));
let fontScale =
  Number.isFinite(storedFontScale) &&
  storedFontScale >= MIN_FONT_SCALE &&
  storedFontScale <= MAX_FONT_SCALE
    ? storedFontScale
    : 1;

function applyFontScale() {
  body.style.fontSize = `${fontScale}rem`;
  localStorage.setItem('fontScale', String(fontScale));

  if (!fontStatus) return;

  const scalePercent = Math.round(fontScale * 100);
  fontStatus.textContent = `Tamanho da fonte ajustado para ${scalePercent}%.`;
}

fontIncreaseButton?.addEventListener('click', () => {
  fontScale = Math.min(MAX_FONT_SCALE, Number((fontScale + FONT_STEP).toFixed(2)));
  applyFontScale();
});

fontDecreaseButton?.addEventListener('click', () => {
  fontScale = Math.max(MIN_FONT_SCALE, Number((fontScale - FONT_STEP).toFixed(2)));
  applyFontScale();
});

fontResetButton?.addEventListener('click', () => {
  fontScale = 1;
  applyFontScale();
});

applyFontScale();


function announce(message) {
  if (themeStatus) themeStatus.textContent = message;
}

function applyDarkThemeFromStorage() {
  const isDark = localStorage.getItem('theme') === 'dark';
  body.classList.toggle('theme-dark', isDark);

  if (toggleDarkButton) {
    toggleDarkButton.setAttribute('aria-pressed', String(isDark));
    setButtonIcon(toggleDarkButton, isDark ? ICONS.sun : ICONS.moon);
  }

  announce(isDark ? 'Modo noturno ativado.' : 'Modo noturno desativado.');
}

function applyCvdFromStorage() {
  const isCvd = localStorage.getItem('cvdMode') === 'on';
  body.classList.toggle('cvd-on', isCvd);

  if (toggleCvdButton) {
    toggleCvdButton.setAttribute('aria-pressed', String(isCvd));
    setButtonIcon(toggleCvdButton, isCvd ? ICONS.check : ICONS.palette);
  }

  announce(isCvd ? 'Modo para daltonismo ativado.' : 'Modo para daltonismo desativado.');
}

if (!localStorage.getItem('theme')) localStorage.setItem('theme', 'light');
if (!localStorage.getItem('cvdMode')) localStorage.setItem('cvdMode', 'off');

applyDarkThemeFromStorage();
applyCvdFromStorage();

toggleDarkButton?.addEventListener('click', () => {
  const current = localStorage.getItem('theme');
  localStorage.setItem('theme', current === 'dark' ? 'light' : 'dark');
  applyDarkThemeFromStorage();
});

toggleCvdButton?.addEventListener('click', () => {
  const current = localStorage.getItem('cvdMode');
  localStorage.setItem('cvdMode', current === 'on' ? 'off' : 'on');
  applyCvdFromStorage();
});


const desktopQuery = window.matchMedia('(min-width: 700px)');

function setMenuOpenState(isOpen) {
  if (!mobileMenuToggleButton || !navPanel) return;

  navPanel.classList.toggle('open', isOpen);
  mobileMenuToggleButton.setAttribute('aria-expanded', String(isOpen));
  mobileMenuToggleButton.setAttribute(
    'aria-label',
    isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
  );
}

function syncMenuForViewport() {
  if (desktopQuery.matches) {
    setMenuOpenState(true);
    return;
  }
  setMenuOpenState(false);
}

mobileMenuToggleButton?.addEventListener('click', () => {
  const isOpen = mobileMenuToggleButton.getAttribute('aria-expanded') === 'true';
  setMenuOpenState(!isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (!desktopQuery.matches) setMenuOpenState(false);
  });
});

desktopQuery.addEventListener('change', syncMenuForViewport);
syncMenuForViewport();


const calculatorButton = document.getElementById('abrir-guia');
calculatorButton?.addEventListener('click', () => {
  alert('Use no mínimo 12 caracteres, evite datas fáceis e nunca repita senha em sites diferentes.');
});


const quizButtons = document.querySelectorAll('.quiz-btn');

quizButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const feedbackId = button.getAttribute('data-target');
    const feedbackElement = document.getElementById(feedbackId);
    const isCorrectChoice = button.getAttribute('data-correct') === 'true';

    if (!feedbackElement) return;

    if (isCorrectChoice) {
      feedbackElement.textContent = 'Resposta correta. Boa decisão de segurança!';
      feedbackElement.classList.remove('wrong');
      feedbackElement.classList.add('correct');
      return;
    }

    feedbackElement.textContent = 'Atenção: essa escolha pode colocar seus dados em risco.';
    feedbackElement.classList.remove('correct');
    feedbackElement.classList.add('wrong');
  });
});


const backToTopButton = document.getElementById('back-to-top');

function updateBackToTopVisibility() {
  if (!backToTopButton) return;

  const shouldShow = window.scrollY > 320;
  backToTopButton.classList.toggle('visible', shouldShow);
}

window.addEventListener('scroll', updateBackToTopVisibility);

backToTopButton?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

updateBackToTopVisibility();