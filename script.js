const fontIncreaseButton = document.getElementById('font-increase');
const fontDecreaseButton = document.getElementById('font-decrease');
const fontResetButton = document.getElementById('font-reset');
const fontStatus = document.getElementById('font-status');
const mobileMenuToggleButton = document.getElementById('mobile-menu-toggle');
const navPanel = document.getElementById('nav-panel');
const navLinks = document.querySelectorAll('.site-nav a');
const body = document.body;
const MIN_FONT_SCALE = 0.9;
const MAX_FONT_SCALE = 1.4;
const FONT_STEP = 0.1;

const storedFontScale = Number(localStorage.getItem('fontScale'));
let fontScale = Number.isFinite(storedFontScale) && storedFontScale >= MIN_FONT_SCALE && storedFontScale <= MAX_FONT_SCALE
  ? storedFontScale
  : 1;

function applyFontScale() {
  body.style.fontSize = `${fontScale}rem`;
  localStorage.setItem('fontScale', String(fontScale));

  if (!fontStatus) {
    return;
  }

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

const desktopQuery = window.matchMedia('(min-width: 700px)');

function setMenuOpenState(isOpen) {
  if (!mobileMenuToggleButton || !navPanel) {
    return;
  }

  navPanel.classList.toggle('open', isOpen);
  mobileMenuToggleButton.setAttribute('aria-expanded', String(isOpen));
  mobileMenuToggleButton.setAttribute('aria-label', isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
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
    if (!desktopQuery.matches) {
      setMenuOpenState(false);
    }
  });
});

desktopQuery.addEventListener('change', syncMenuForViewport);
syncMenuForViewport();

const calculatorButton = document.getElementById('abrir-guia');
calculatorButton.addEventListener('click', () => {
  alert('Use no mínimo 12 caracteres, evite datas fáceis e nunca repita senha em sites diferentes.');
});

const quizButtons = document.querySelectorAll('.quiz-btn');

quizButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const feedbackId = button.getAttribute('data-target');
    const feedbackElement = document.getElementById(feedbackId);
    const isCorrectChoice = button.getAttribute('data-correct') === 'true';

    if (!feedbackElement) {
      return;
    }

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
  if (!backToTopButton) {
    return;
  }

  const shouldShow = window.scrollY > 320;
  backToTopButton.classList.toggle('visible', shouldShow);
}

window.addEventListener('scroll', updateBackToTopVisibility);

backToTopButton?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

updateBackToTopVisibility();
