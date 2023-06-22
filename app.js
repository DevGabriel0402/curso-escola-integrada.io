function exibirVideo(aula) {
  var videoSection = document.getElementById("videoSection");
  var video = document.getElementById("video");
  var title = document.getElementById("title");
  var description = document.getElementById("description");

  // Defina aqui os links dos vídeos correspondentes a cada aula
  var videos = {
    1: {
      title: "Aula 1 - Apresentação do Curso de Word 2016",
      src: "https://www.youtube-nocookie.com/embed/59lDXVkqlqQ?controls=0",
      description: "Começa aqui nosso Curso em Vídeo de Word 2016, que vai mostrar muitas dicas e funcionalidades do Editor de Textos mais popular do mundo.

Nós do CursoemVideo sempre recomendamos assistir a aula completa, mas se quiser aprender diretamente uma parte específica, clique nos marcadores de tempo a seguir:

0:20 – A Entrevista

4:00 – O que será visto no curso?

6:50 – Surpresa 😉",
    },
    2: {
      title: "Aula 2 - 10 Dicas Para Word 2016",
      src: "https://www.youtube-nocookie.com/embed/qVoiU4MMCZ8?controls=0",
      description: "Descrição da aula 2.",
    },
    3: {
      title: "Aula 3 - Primeiros Passos no Word 2016",
      src: "https://www.youtube-nocookie.com/embed/iOlONI3F300?controls=0",
      description: "Descrição da aula 3.",
    },
    4: {
      title: "Aula 4 - Salvando documento locais na Nuvem",
      src: "https://www.youtube-nocookie.com/embed/Vp0UZie4rq0?controls=0",
      description: "Descrição da aula 4.",
    },
    5: {
      title: "Aula 5 - Abrindo e editando um PDF no Word 2016",
      src: "https://www.youtube-nocookie.com/embed/--aFom9XFxQ?controls=0",
      description: "Descrição da aula 5.",
    },
    6: {
      title: "Aula 6 - Digitação e formatação básica",
      src: "https://www.youtube-nocookie.com/embed/eNJUq2-q2Ps?controls=0",
      description: "Descrição da aula 6.",
    },
    7: {
      title: "Aula 7 - Formatação Baseadas em Estilos",
      src: "https://www.youtube-nocookie.com/embed/ELtk2wmrmQc?controls=0",
      description: "Descrição da aula 7.",
    },
    8: {
      title: "Aula 8 - Trabalhando com imagem",
      src: "https://www.youtube-nocookie.com/embed/goajzoo8oMc?controls=0",
      description: "Descrição da aula 8.",
    },
    9: {
      title: "Aula 9 - Marcas de Tabulação",
      src: "https://www.youtube-nocookie.com/embed/F8YHug52D10?controls=0",
      description: "Descrição da aula 9.",
    },
    10: {
      title: "Aula 10 - Configurações na Página",
      src: " https://www.youtube-nocookie.com/embed/JvSVkrDbzf0?controls=0",
      description: "Descrição da aula 10.",
    },
    11: {
      title: "Aula 11 - Texto em colunas",
      src: "https://www.youtube-nocookie.com/embed/CIGujgOfpl8?controls=0",
      description: "Descrição da aula 11.",
    },
    12: {
      title: "Aula 12 - Quebras de Texto",
      src: "https://www.youtube-nocookie.com/embed/XaMgzE9no1E?controls=0",
      description: "Descrição da aula 12.",
    },
    13: {
      title: "Aula 13 - Cabeçalho e Rodapé",
      src: "https://www.youtube-nocookie.com/embed/ck-Bx_KAmPg?controls=0",
      description: "Descrição da aula 13.",
    },
    14: {
      title: "Aula 14 - Estrutura Avançada de um Documento Word",
      src: "https://www.youtube-nocookie.com/embed/uE1AAAkr_OQ?controls=0",
      description: "Descrição da aula 14.",
    },
    15: {
      title: "Aula 15 - Folha de Rosto (Capas no Word)",
      src: "https://www.youtube-nocookie.com/embed/sLNR2cVG4dQ?controls=0",
      description: "Descrição da aula 15.",
    },
    16: {
      title: "Aula 16 - Componentes de Design",
      src: "https://www.youtube-nocookie.com/embed/AZt14AuqwnY?controls=0",
      description: "Descrição da aula 16.",
    },
    17: {
      title: "Aula 17 - Sumário Automático",
      src: "https://www.youtube-nocookie.com/embed/iq4kIodKBv8?controls=0",
      description: "Descrição da aula 17.",
    },
    18: {
      title: "Aula 18 - Criando Bibliografia ABNT Automática no Word",
      src: "https://www.youtube-nocookie.com/embed/SJkXd7kIIKA?controls=0",
      description: "Descrição da aula 18.",
    },
    19: {
      title: "Aula 19 - Notas de Rodapé e Comentários",
      src: "https://www.youtube-nocookie.com/embed/V0iN-op4_Y0?controls=0",
      description: "Descrição da aula 19.",
    },
    20: {
      title: "Aula 20 - Lista no Word",
      src: "https://www.youtube-nocookie.com/embed/sJBmPFS3Zl0?controls=0",
      description: "Descrição da aula 20.",
    },
    21: {
      title: "Aula 21 - Tabelas no Word",
      src: "https://www.youtube-nocookie.com/embed/8kZekn96fvU?controls=0",
      description: "Descrição da aula 21.",
    },
    22: {
      title: "Aula 22 - Fórmulas e Equações",
      src: "https://www.youtube-nocookie.com/embed/iVrd8Bl1pSA?controls=0",
      description: "Descrição da aula 22.",
    },
  };

  // Verifica se a aula selecionada existe nos vídeos
  if (aula in videos) {
    var videoData = videos[aula];

    // Atualiza o conteúdo do vídeo e informações da src
    video.src = videoData.src;
    title.textContent = videoData.title;
    description.textContent = videoData.description;

    // Exibe a seção de vídeo
    videoSection.style.display = "block";
  }
}

// Função para avançar para a próxima aula
function nextAula() {
  var aulas = document.getElementsByName("aula");
  var checkedIndex = -1;

  // Encontra o índice do input de rádio marcado
  for (var i = 0; i < aulas.length; i++) {
    if (aulas[i].checked) {
      checkedIndex = i;
      break;
    }
  }

  // Verifica se existe uma próxima aula
  if (checkedIndex < aulas.length - 1) {
    // Marca o próximo input de rádio como selecionado
    aulas[checkedIndex + 1].checked = true;

    // Chama a função para exibir o vídeo da próxima aula
    exibirVideo(aulas[checkedIndex + 1].value);
  }
}

// Função para voltar para a aula anterior
function previousAula() {
  var aulas = document.getElementsByName("aula");
  var checkedIndex = -1;

  // Encontra o índice do input de rádio marcado
  for (var i = 0; i < aulas.length; i++) {
    if (aulas[i].checked) {
      checkedIndex = i;
      break;
    }
  }

  // Verifica se existe uma aula anterior
  if (checkedIndex > 0) {
    // Marca o input de rádio anterior como selecionado
    aulas[checkedIndex - 1].checked = true;

    // Chama a função para exibir o vídeo da aula anterior
    exibirVideo(aulas[checkedIndex - 1].value);
  }
}
function animateTitle() {
  var pageTitle = document.title; // Obtém o título atual
  var newTitle = "Escola Integrada"; // Defina o novo título desejado
  var isAnimated = false; // Variável para controlar se a animação está ocorrendo

  // Função para alternar entre os títulos
  function toggleTitle() {
    document.title = isAnimated ? pageTitle : newTitle;
    isAnimated = !isAnimated;
  }

  // Inicia a animação a cada intervalo de tempo
  setInterval(toggleTitle, 2000); // Altera o título a cada segundo (1000ms)
}

// Chama a função de animação quando a página é carregada
window.onload = animateTitle;
