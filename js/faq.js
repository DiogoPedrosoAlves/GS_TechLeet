document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".caixa_pergunta .pergunta").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".item");
      const resposta = item.querySelector(".resposta");
      const isOpen = button.classList.contains("active");

      // Fecha todas as outras perguntas antes de abrir a nova
      document.querySelectorAll(".caixa_pergunta .pergunta.active").forEach((activeButton) => {
        activeButton.classList.remove("active");
        const activeResposta = activeButton.closest(".item").querySelector(".resposta");
        if (activeResposta) {
          activeResposta.classList.remove("active");
          activeResposta.style.maxHeight = null; // Reseta a altura ao fechar
        }
      });

      // Abre a pergunta clicada
      if (!isOpen) {
        button.classList.add("active");
        if (resposta) {
          resposta.classList.add("active");
          // Calcula a altura real do conteúdo e aplica dinamicamente
          resposta.style.maxHeight = resposta.scrollHeight + "px"; 
        }
      }
    });
  });
});