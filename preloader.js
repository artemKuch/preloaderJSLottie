// Створення та стилізація overlay
const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

// Створення та стилізація lottieContainer
const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// Додавання елементів до документу
document.body.appendChild(overlay);
document.body.appendChild(lottieContainer);

// Функція для приховування overlay та відображення анімації
function hideOverlay() {
    overlay.style.display = 'none';
    lottieContainer.style.display = 'block';
    // Замініть на пряму URL вашого JSON файлу Lottie.
    lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg', // або 'canvas', якщо ви надаєте перевагу цьому
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/28788995-255a-4740-8251-84f158586229/r3eQrIXpLN.json',
    });
}

// Подія, яка виконується при завантаженні документа
document.addEventListener('DOMContentLoaded', () => {
    hideOverlay();
});
