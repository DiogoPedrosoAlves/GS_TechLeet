// Controle do menu hamburguer para dispositivos mobile
document.addEventListener('DOMContentLoaded', function () {
  const botao = document.getElementById('menu-hamburguer');
  const navegacao = document.getElementById('navegacao');

  if (!botao || !navegacao) {
    return;
  }

  // Abre ou fecha o menu ao clicar no botão
  botao.addEventListener('click', function () {
    const aberto = navegacao.classList.toggle('aberto');
    botao.classList.toggle('ativo', aberto);
    botao.setAttribute('aria-expanded', aberto);
  });

  // Fecha o menu ao clicar em um link de navegação
  navegacao.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navegacao.classList.remove('aberto');
      botao.classList.remove('ativo');
      botao.setAttribute('aria-expanded', 'false');
    });
  });
});
