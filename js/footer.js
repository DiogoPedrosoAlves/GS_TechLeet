const canvas = document.getElementById('canvas_natureza');
const ctx = canvas.getContext('2d');

function renderizarCenario() {
    // Garante que o tamanho interno do canvas combine perfeitamente com a div do HTML
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;

    const w = canvas.width;
    const h = canvas.height;

    // Limpa o canvas antes de redesenhar
    ctx.clearRect(0, 0, w, h);

    // 1. Desenhar a colina de fundo (Verde mais claro para dar profundidade)
    ctx.fillStyle = '#419237';
    ctx.beginPath();
    ctx.moveTo(0, h);
    ctx.quadraticCurveTo(w * 0.3, h * 0.1, w * 0.7, h * 0.4);
    ctx.quadraticCurveTo(w * 0.85, h * 0.5, w, h * 0.3);
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();

    // 2. Desenhar a colina da frente (Verde mais escuro)
    ctx.fillStyle = '#2c6b24';
    ctx.beginPath();
    ctx.moveTo(0, h);
    ctx.quadraticCurveTo(w * 0.4, h * 0.4, w * 0.75, h * 0.5);
    ctx.quadraticCurveTo(w * 0.9, h * 0.55, w, h * 0.45);
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();

    // 3. Renderizar algumas árvores vetorizadas nas colinas
    desenharArvore(w * 0.25, h * 0.42);
    desenharArvore(w * 0.32, h * 0.48);
    desenharArvore(w * 0.80, h * 0.53);
}

function desenharArvore(x, y) {
    // Tronco da árvore
    ctx.fillStyle = '#5a3d28';
    ctx.fillRect(x - 3, y, 6, 22);

    // Copa da árvore (Círculo)
    ctx.fillStyle = '#1b4d16';
    ctx.beginPath();
    ctx.arc(x, y - 4, 12, 0, Math.PI * 2);
    ctx.fill();
}

// Redesenha o cenário caso o usuário mude o tamanho da janela do navegador
window.addEventListener('resize', renderizarCenario);

// Primeira execução do cenário
renderizarCenario();