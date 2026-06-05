document.addEventListener("DOMContentLoaded", () => {
  // Banco de dados simulado do Satélite Sentinel-5P
  const dadosSatelite = {
    sudeste: {
      co2: "425 ppm",
      status: "Atenção",
      corBadge: "#f1c40f",
      corTexto: "#000000",
      corBorda: "#f1c40f",
      mensagem: "Ondas de calor previstas para os próximos 5 dias na região cafeeira. Risco moderado de estresse térmico no cultivo. Recomendado acionar sistemas de irrigação preventiva para mitigar a perda de umidade do solo."
    },
    centro_oeste: {
      co2: "468 ppm",
      status: "Crítico",
      corBadge: "#e74c3c",
      corTexto: "#ffffff",
      corBorda: "#e74c3c",
      mensagem: "Altíssima concentração de CO₂ detectada em órbita, associada a uma forte massa de ar seco. Risco iminente de estiagem prolongada nas lavouras de soja. Planeje a antecipação de manejos protetivos e contenção hídrica."
    },
    sul: {
      co2: "398 ppm",
      status: "Estável",
      corBadge: "#2ecc71",
      corTexto: "#ffffff",
      corBorda: "#2ecc71",
      mensagem: "Qualidade do ar excelente e dispersão gasosa ideal na região de cultivo de trigo. Condições climáticas favoráveis para o desenvolvimento natural da plantação. Continue seguindo o cronograma padrão de colheita."
    }
  };

  // Elementos da Interface
  const seletorRegiao = document.getElementById("seletor-regiao");
  const btnEscanear = document.getElementById("btn-escanear");
  const displayVazio = document.getElementById("display-vazio");
  const displayLoading = document.getElementById("display-loading");
  const displayResultado = document.getElementById("display-resultado");
  
  // Elementos de Saída de Dados
  const badgeStatus = document.getElementById("badge-status");
  const valorCo2 = document.getElementById("valor-co2");
  const textoRecomendacao = document.getElementById("texto-recomendacao");
  const caixaAlerta = document.querySelector(".caixa-alerta");

  // Evento de Clique para Simulação
  btnEscanear.addEventListener("click", () => {
    const regiaoSelecionada = seletorRegiao.value;

    if (!regiaoSelecionada) {
      alert("Por favor, selecione uma área de cultivo antes de escanear.");
      return;
    }

    // 1. Inicia o Estado de Loading do Satélite
    btnEscanear.disabled = true;
    btnEscanear.innerText = "Escaneando Órbita...";
    displayVazio.classList.add("hidden");
    displayResultado.classList.add("hidden");
    displayLoading.classList.remove("hidden");

    // 2. Simula o tempo de resposta do processamento orbital (1.5 segundos)
    setTimeout(() => {
      const dados = dadosSatelite[regiaoSelecionada];

      // 3. Atualiza os dados na tela com as informações da região
      badgeStatus.innerText = dados.status;
      badgeStatus.style.backgroundColor = dados.corBadge;
      badgeStatus.style.color = dados.corTexto;
      
      valorCo2.innerText = dados.co2;
      valorCo2.style.color = dados.corBadge;
      
      textoRecomendacao.innerText = dados.mensagem;
      caixaAlerta.style.borderColor = dados.corBorda;

      // 4. Finaliza as transições de tela
      displayLoading.classList.add("hidden");
      displayResultado.classList.remove("hidden");
      btnEscanear.disabled = false;
      btnEscanear.innerText = "Iniciar Escaneamento Orbital";
    }, 1500);
  });
});