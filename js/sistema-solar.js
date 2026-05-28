const canvas = document.getElementById('sistemaSolar');
const ctx = canvas.getContext('2d');

// Ajusta o tamanho do canvas para caber na section #head
function redimensionarCanvas() {
    const headSection = document.getElementById('head');
    canvas.width = headSection.offsetWidth;
    canvas.height = headSection.offsetHeight;
}

window.addEventListener('resize', redimensionarCanvas);
redimensionarCanvas();

// Definição dos planetas (tamanho, distância do sol, velocidade, cor)
const planetas = [
    { nome: 'Mercúrio', raio: 3, distancia: 50, velocidade: 0.02, cor: '#aaaaaa', angulo: 0 },
    { nome: 'Vênus', raio: 5, distancia: 80, velocidade: 0.015, cor: '#e5b887', angulo: 0 },
    { nome: 'Terra', raio: 6, distancia: 120, velocidade: 0.01, cor: '#4b90ea', angulo: 0 },
    { nome: 'Marte', raio: 4, distancia: 160, velocidade: 0.008, cor: '#e55f40', angulo: 0 },
    { nome: 'Júpiter', raio: 14, distancia: 240, velocidade: 0.004, cor: '#c99b75', angulo: 0 },
    { nome: 'Saturno', raio: 12, distancia: 320, velocidade: 0.003, cor: '#e5c587', angulo: 0 },
    { nome: 'Urano', raio: 9, distancia: 380, velocidade: 0.002, cor: '#87ceeb', angulo: 0 },
    { nome: 'Netuno', raio: 8, distancia: 440, velocidade: 0.001, cor: '#274687', angulo: 0 }
];

function animarSistemaSolar() {
    // Limpa a tela frame a frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Calcula o centro do canvas
    const centroX = canvas.width / 2;
    const centroY = canvas.height / 2;

    // Desenha o Sol
    ctx.beginPath();
    ctx.arc(centroX, centroY, 25, 0, Math.PI * 2);
    ctx.fillStyle = '#ffcc00';
    ctx.shadowBlur = 30;
    ctx.shadowColor = '#ffcc00'; // Efeito de brilho do sol
    ctx.fill();
    ctx.shadowBlur = 0; // Reseta o brilho para não afetar os planetas

    // Desenha as órbitas e os planetas
    planetas.forEach(planeta => {
        // Linha da órbita
        ctx.beginPath();
        ctx.arc(centroX, centroY, planeta.distancia, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'; // Linha bem sutil
        ctx.lineWidth = 1;
        ctx.stroke();

        // Incrementa o ângulo para gerar o movimento
        planeta.angulo += planeta.velocidade;

        // Calcula as coordenadas X e Y usando trigonometria
        const x = centroX + Math.cos(planeta.angulo) * planeta.distancia;
        const y = centroY + Math.sin(planeta.angulo) * planeta.distancia;

        // Desenha o planeta na posição calculada
        ctx.beginPath();
        ctx.arc(x, y, planeta.raio, 0, Math.PI * 2);
        ctx.fillStyle = planeta.cor;
        ctx.fill();
    });

    // Pede ao navegador para renderizar o próximo frame
    requestAnimationFrame(animarSistemaSolar);
}

// Inicia a animação
animarSistemaSolar();