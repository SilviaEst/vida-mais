document.addEventListener('DOMContentLoaded', () => {

    // --- Elementos do modal de aviso ---
    const avisoContainer = document.getElementById('aviso-container');
    const avisoMensagem = document.getElementById('aviso-mensagem');
    const avisoFechar = document.getElementById('aviso-fechar');
  
    function mostrarAviso(mensagem) {
      avisoMensagem.textContent = mensagem;
      avisoContainer.classList.remove('hidden');
    }
  
    // Fecha o aviso ao clicar no "X"
    avisoFechar.addEventListener('click', () => {
      avisoContainer.classList.add('hidden');
    });
  
    // Fecha o aviso ao clicar fora do card (na sombra)
    avisoContainer.addEventListener('click', (e) => {
      if (e.target === avisoContainer) {
        avisoContainer.classList.add('hidden');
      }
    });
  
    // --- Mensagens motivacionais ---
    const motivacoes = [
      "Cuide do seu corpo, é o único lugar que você tem para viver. ✨",
      "Pequenas atitudes diárias criam grandes transformações. Comece agora! 💪",
      "A jornada para uma vida mais saudável começa com um único passo. Dê o seu! 🌱",
      "Hidrate-se! A água é a fonte da vida e da vitalidade. 💧",
      "Sua saúde mental importa. Tire um momento para respirar e se reconectar.🧘‍♀️",
      "Movimente-se! Um corpo ativo é uma mente feliz. 🤸‍♂️"
    ];
    const motivacaoElement = document.getElementById('motivacao');
    motivacaoElement.textContent = motivacoes[Math.floor(Math.random() * motivacoes.length)];
  
    // --- Calculadora IMC ---
    window.calcularIMC = function() {
      const peso = parseFloat(document.getElementById('peso').value);
      const altura = parseFloat(document.getElementById('altura').value);
      const resultadoElement = document.getElementById('resultado');
  
      if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoElement.textContent = 'Por favor, insira valores válidos.';
        resultadoElement.style.color = '#e74c3c';
        return;
      }
  
      const imc = peso / (altura * altura);
      let classificacao = '';
  
      if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
      } else if (imc < 24.9) {
        classificacao = 'Peso normal';
      } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
      } else if (imc < 34.9) {
        classificacao = 'Obesidade grau I';
      } else if (imc < 39.9) {
        classificacao = 'Obesidade grau II';
      } else {
        classificacao = 'Obesidade grau III';
      }
  
      resultadoElement.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao}).`;
      resultadoElement.style.color = '#2c3e50';
    };
  
    // --- Contador de copos de água ---
    const contadorElement = document.getElementById('contador');
    const botaoAdicionar = document.getElementById('botaoAdicionar');
    const botaoZerar = document.getElementById('botaoZerar');
    let contador = 0;
  
    botaoAdicionar.addEventListener('click', () => {
      contador++;
      contadorElement.textContent = contador;
    });
  
    botaoZerar.addEventListener('click', () => {
      contador = 0;
      contadorElement.textContent = contador;
    });
  
    // --- Cronômetro de pausas ativas ---
    const modoElement = document.getElementById('modo');
    const tempoElement = document.getElementById('tempo');
    const botaoIniciar = document.getElementById('botaoIniciar');
    const botaoPausar = document.getElementById('botaoPausar');
    const botaoReiniciar = document.getElementById('botaoReiniciar');
  
    let tempo = 1500; // 25 minutos em segundos
    let modo = 'Foco';
    let intervalo;
  
    function atualizarCronometro() {
      const minutos = Math.floor(tempo / 60);
      const segundos = tempo % 60;
      tempoElement.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    }
  
    function iniciarCronometro() {
      if (intervalo) return;
      modoElement.textContent = `Modo: ${modo}`;
      botaoIniciar.disabled = true;
      botaoPausar.disabled = false;
  
      intervalo = setInterval(() => {
        tempo--;
        atualizarCronometro();
        if (tempo === 0) {
          clearInterval(intervalo);
          intervalo = null;
          mostrarAviso('Tempo de foco finalizado!\n ✨Respire fundo e aproveite esta pausa de 5 minutos. Sua mente e corpo agradecem! ✨');
          reiniciarCronometro();
        }
      }, 1000);
    }
  
    function pausarCronometro() {
      clearInterval(intervalo);
      intervalo = null;
      botaoIniciar.disabled = false;
      botaoPausar.disabled = true;
    }
  
    function reiniciarCronometro() {
      pausarCronometro();
      tempo = 1500;
      modo = 'Foco';
      atualizarCronometro();
      modoElement.textContent = 'Pausas ativas: 25 min de foco';
    }
  
    botaoIniciar.addEventListener('click', iniciarCronometro);
    botaoPausar.addEventListener('click', pausarCronometro);
    botaoReiniciar.addEventListener('click', reiniciarCronometro);
  
    // --- Desafio do Dia ---
    const desafios = [
      "Faça 10 minutos de alongamento.",
      "Beba 2 copos de água logo ao acordar.",
      "Caminhe por 30 minutos em um local ao ar livre.",
      "Prepare uma refeição saudável para hoje.",
      "Pratique 5 minutos de respiração profunda."
    ];
  
    const desafioElement = document.getElementById('desafio');
    desafioElement.textContent = desafios[Math.floor(Math.random() * desafios.length)];
  
    // --- Função para demo rápida do cronômetro (10 segundos) ---
    window.demoRapida = function() {
      pausarCronometro();
      tempo = 10;
      modo = 'Demo';
      atualizarCronometro();
      iniciarCronometro();
    };
  
    // Inicializa display do cronômetro
    reiniciarCronometro();
  });
  