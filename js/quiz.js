// ====================================
// LÓGICA DO SISTEMA DE QUIZ
// ====================================

// Elementos DOM do quiz
const quizContainer = document.getElementById('quiz-container');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');
const finishBtn = document.getElementById('finish-btn');
const voltarBtnQuiz = document.getElementById('voltar-btn-quiz');
const scoreText = document.getElementById('score-text');

// Novos elementos de navegação
let anteriorBtn = null;
let proximaBtn = null;
let sairQuizBtn = null;

// Estado atual do quiz
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;

/**
 * Inicia um quiz para uma disciplina e teste específicos
 * @param {string} disciplina - Nome da disciplina
 * @param {string} nomeDoTeste - Nome do teste
 */
function abrirQuiz(disciplina, nomeDoTeste) {
    // Atualizar estado da navegação
    estadoAtual = 'quiz';

    // Configurar o quiz
    document.getElementById('quiz-title').textContent = `${disciplina} - ${nomeDoTeste}`;
    currentQuiz = quizzesPorDisciplina[disciplina]?.[nomeDoTeste] || [];
    currentQuestionIndex = 0;
    score = 0;

    // Mostrar primeira pergunta
    mostrarPergunta();

    // Esconder outras seções
    esconderTodasSecoes();

    // Mostrar o wrapper do quiz
    document.getElementById('quiz-wrapper').classList.remove('hidden');
    quizContainer.classList.remove('hidden');
    document.getElementById('quiz-nav').classList.remove('hidden');

    // Esconder botão de voltar universal (quiz tem seu próprio botão)
    document.getElementById('botao-voltar').classList.add('hidden');

    // Criar navegação do quiz
    criarNavegacaoQuiz();

    // Criar botões de navegação personalizados
    criarBotoesNavegacao();
}

/**
 * Mostra a pergunta atual do quiz
 */
function mostrarPergunta() {
    resetarEstadoQuiz();

    if (currentQuiz.length === 0) {
        questionText.textContent = "Nenhum quiz disponível para esta disciplina.";
        return;
    }

    const currentQuestion = currentQuiz[currentQuestionIndex];
    questionText.textContent = currentQuestion.pergunta;

    // Criar botões de resposta
    currentQuestion.respostas.forEach(resposta => {
        const button = criarBotaoResposta(resposta);
        answerButtons.appendChild(button);
    });

    // Atualizar visibilidade dos botões de navegação
    atualizarBotoesNavegacao();
}

/**
 * Cria um botão de resposta
 * @param {Object} resposta - Objeto com texto e se é correta
 * @returns {HTMLElement} Botão de resposta
 */
function criarBotaoResposta(resposta) {
    const button = document.createElement('button');
    button.className = 'answer-btn';
    button.textContent = resposta.texto;
    button.dataset.correta = resposta.correta;
    button.addEventListener('click', selecionarResposta);
    return button;
}

/**
 * Processa a seleção de uma resposta
 * @param {Event} e - Evento de clique
 */
function selecionarResposta(e) {
    const respostaSelecionada = e.target;
    const correta = respostaSelecionada.dataset.correta === 'true';

    // Desativar todos os botões e mostrar respostas corretas/incorretas
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correta === 'true') {
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }
    });

    // Atualizar pontuação
    if (correta) score++;

    // Atualizar navegação visual
    atualizarNavegacaoVisual(correta);

    // Mostrar botão de finalizar se for a última pergunta
    if (currentQuestionIndex === currentQuiz.length - 1) {
        finishBtn.classList.remove('hidden');
    }
}

/**
 * Atualiza a cor do botão de navegação baseado na resposta
 * @param {boolean} correta - Se a resposta foi correta
 */
function atualizarNavegacaoVisual(correta) {
    const navButtons = document.getElementById('quiz-nav-buttons').children;
    const navBtn = navButtons[currentQuestionIndex];
    
    if (navBtn) {
        // Remover classes anteriores
        navBtn.classList.remove('correct', 'wrong');
        
        // Adicionar classe baseada na resposta
        if (correta) {
            navBtn.classList.add('correct');
        } else {
            navBtn.classList.add('wrong');
        }
    }
}

/**
 * Reseta o estado visual do quiz
 */
function resetarEstadoQuiz() {
    finishBtn.classList.add('hidden');
    scoreText.classList.add('hidden');

    // Limpar botões de resposta
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/**
 * Cria a navegação do quiz (botões numerados)
 */
function criarNavegacaoQuiz() {
    const navContainer = document.getElementById('quiz-nav-buttons');
    navContainer.innerHTML = '';

    currentQuiz.forEach((_, index) => {
        const btn = criarBotaoNavegacao(index);
        navContainer.appendChild(btn);
    });
}

/**
 * Cria os botões de navegação personalizados
 */
function criarBotoesNavegacao() {
    const quizContainer = document.getElementById('quiz-container');

    // Remover botões existentes se houver
    if (anteriorBtn) anteriorBtn.remove();
    if (proximaBtn) proximaBtn.remove();
    if (sairQuizBtn) sairQuizBtn.remove();

    // Criar container para os botões de navegação
    let navContainer = document.getElementById('quiz-nav-container');
    if (!navContainer) {
        navContainer = document.createElement('div');
        navContainer.id = 'quiz-nav-container';
        navContainer.style.cssText = `
            display: flex;
            gap: 10px;
            margin-top: 20px;
            flex-wrap: wrap;
        `;
        quizContainer.appendChild(navContainer);
    }

    // Botão Anterior
    anteriorBtn = document.createElement('button');
    anteriorBtn.textContent = '← Anterior';
    anteriorBtn.className = 'btn-secondary';
    anteriorBtn.style.cssText = `
        padding: 10px 20px;
        border: 2px solid var(--accent-color);
        border-radius: 8px;
        background-color: transparent;
        color: var(--accent-color);
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
    `;
    anteriorBtn.addEventListener('click', irParaAnterior);

    // Botão Próxima
    proximaBtn = document.createElement('button');
    proximaBtn.textContent = 'Próxima →';
    proximaBtn.className = 'btn-primary';
    proximaBtn.style.cssText = `
        padding: 10px 20px;
        border: 2px solid var(--accent-color);
        border-radius: 8px;
        background-color: var(--accent-color);
        color: white;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
    `;
    proximaBtn.addEventListener('click', irParaProxima);

    // Botão Sair do Quiz
    sairQuizBtn = document.createElement('button');
    sairQuizBtn.textContent = '✕ Sair do Quiz';
    sairQuizBtn.className = 'btn-danger';
    sairQuizBtn.style.cssText = `
        padding: 10px 20px;
        border: 2px solid #f44336;
        border-radius: 8px;
        background-color: transparent;
        color: #f44336;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
        margin-left: auto;
    `;
    sairQuizBtn.addEventListener('click', voltarDoQuiz);

    // Adicionar botões ao container
    navContainer.appendChild(anteriorBtn);
    navContainer.appendChild(proximaBtn);
    navContainer.appendChild(sairQuizBtn);

    // Atualizar estado inicial
    atualizarBotoesNavegacao();
}

/**
 * Atualiza a visibilidade e estado dos botões de navegação
 */
function atualizarBotoesNavegacao() {
    if (!anteriorBtn || !proximaBtn) return;

    // Botão Anterior - desabilitado na primeira pergunta
    if (currentQuestionIndex === 0) {
        anteriorBtn.disabled = true;
        anteriorBtn.style.opacity = '0.5';
        anteriorBtn.style.cursor = 'not-allowed';
    } else {
        anteriorBtn.disabled = false;
        anteriorBtn.style.opacity = '1';
        anteriorBtn.style.cursor = 'pointer';
    }

    // Botão Próxima - sempre habilitado, exceto na última pergunta
    if (currentQuestionIndex === currentQuiz.length - 1) {
        proximaBtn.disabled = true;
        proximaBtn.style.opacity = '0.5';
        proximaBtn.style.cursor = 'not-allowed';
    } else {
        proximaBtn.disabled = false;
        proximaBtn.style.opacity = '1';
        proximaBtn.style.cursor = 'pointer';
    }
}

/**
 * Navega para a pergunta anterior
 */
function irParaAnterior() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        mostrarPergunta();
    }
}

/**
 * Navega para a próxima pergunta
 */
function irParaProxima() {
    if (currentQuestionIndex < currentQuiz.length - 1) {
        currentQuestionIndex++;
        mostrarPergunta();
    }
}

/**
 * Cria um botão de navegação numerado
 * @param {number} index - Índice da pergunta
 * @returns {HTMLElement} Botão de navegação
 */
function criarBotaoNavegacao(index) {
    const btn = document.createElement('button');
    btn.textContent = index + 1;
    btn.className = 'quiz-nav-btn';

    // Navegação para pergunta específica
    btn.addEventListener('click', () => {
        currentQuestionIndex = index;
        mostrarPergunta();
    });

    return btn;
}

/**
 * Esconde todas as seções de navegação
 */
function esconderTodasSecoes() {
    document.getElementById('semestres').classList.add('hidden');
    document.getElementById('disciplinas').classList.add('hidden');
    document.getElementById('testes').classList.add('hidden');
}

/**
 * Finaliza o quiz e mostra o resultado
 */
function finalizarQuiz() {
    questionText.textContent = `Você acertou ${score} de ${currentQuiz.length} perguntas.`;
    answerButtons.classList.add('hidden');
    nextBtn.classList.add('hidden');
    finishBtn.classList.add('hidden');
    scoreText.textContent = `Pontuação: ${score} / ${currentQuiz.length}`;
    scoreText.classList.remove('hidden');
}

/**
 * Volta para a página de testes
 */
function voltarDoQuiz() {
    // Esconder elementos do quiz
    document.getElementById('quiz-wrapper').classList.add('hidden');
    quizContainer.classList.add('hidden');
    document.getElementById('quiz-nav').classList.add('hidden');

    // Resetar estado
    answerButtons.classList.remove('hidden');
    scoreText.classList.add('hidden');
    nextBtn.classList.add('hidden');
    finishBtn.classList.add('hidden');

    // Remover botões de navegação personalizados
    if (anteriorBtn) anteriorBtn.remove();
    if (proximaBtn) proximaBtn.remove();
    if (sairQuizBtn) sairQuizBtn.remove();
    const navContainer = document.getElementById('quiz-nav-container');
    if (navContainer) navContainer.remove();

    // Voltar para a página de testes
    document.getElementById('testes').classList.remove('hidden');
    document.getElementById('botao-voltar').classList.remove('hidden');

    // Atualizar estado da navegação
    estadoAtual = 'testes';
}

// ====================================
// EVENT LISTENERS
// ====================================

// Botão "Próxima pergunta" (mantido para compatibilidade)
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    mostrarPergunta();
});

// Botão "Finalizar quiz"
finishBtn.addEventListener('click', finalizarQuiz);

// Botão "Voltar" do quiz - agora funciona como "Anterior"
voltarBtnQuiz.addEventListener('click', irParaAnterior);
