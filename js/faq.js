document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".caixa_pergunta .pergunta").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".item");
      const resposta = item.querySelector(".resposta");
      const isOpen = button.classList.contains("active");

      // Fecha todas as perguntas
      document
        .querySelectorAll(".caixa_pergunta .pergunta.active")
        .forEach((activeButton) => {
          activeButton.classList.remove("active");
          const activeresposta = activeButton
            .closest(".item")
            .querySelector(".resposta");
          if (activeresposta) activeresposta.classList.remove("active");
        });

      // Abre a pergunta
      if (!isOpen) {
        button.classList.add("active");
        if (resposta) resposta.classList.add("active");
      }
    });
  });
});
