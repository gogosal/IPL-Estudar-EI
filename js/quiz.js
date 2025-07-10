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

    // Criar navegação do quiz
    criarNavegacaoQuiz();
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

    // Mostrar botão apropriado
    if (currentQuestionIndex < currentQuiz.length - 1) {
        nextBtn.classList.remove('hidden');
    } else {
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
    navBtn.style.backgroundColor = correta ? '#4CAF50' : '#f44336';
    navBtn.style.color = 'white';
}

/**
 * Reseta o estado visual do quiz
 */
function resetarEstadoQuiz() {
    nextBtn.classList.add('hidden');
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
 * Cria um botão de navegação numerado
 * @param {number} index - Índice da pergunta
 * @returns {HTMLElement} Botão de navegação
 */
function criarBotaoNavegacao(index) {
    const btn = document.createElement('button');
    btn.textContent = index + 1;
    btn.style.cssText = `
        padding: 8px 12px;
        margin: 2px;
        border: 2px solid var(--accent-color);
        border-radius: 8px;
        background-color: transparent;
        color: var(--accent-color);
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
        min-width: 35px;
    `;

    // Efeitos de hover
    btn.addEventListener('mouseenter', () => {
        if (!btn.style.backgroundColor.includes('rgb(76, 175, 80)') &&
            !btn.style.backgroundColor.includes('rgb(244, 67, 54)')) {
            btn.style.backgroundColor = 'var(--accent-color)';
            btn.style.color = 'white';
        }
    });

    btn.addEventListener('mouseleave', () => {
        if (!btn.style.backgroundColor.includes('rgb(76, 175, 80)') &&
            !btn.style.backgroundColor.includes('rgb(244, 67, 54)')) {
            btn.style.backgroundColor = 'transparent';
            btn.style.color = 'var(--accent-color)';
        }
    });

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
 * Volta para a página inicial (semestres)
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

    // Mostrar página inicial
    document.getElementById('semestres').classList.remove('hidden');
}

// ====================================
// EVENT LISTENERS
// ====================================

// Botão "Próxima pergunta"
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    mostrarPergunta();
});

// Botão "Finalizar quiz"
finishBtn.addEventListener('click', finalizarQuiz);

// Botão "Voltar" do quiz
voltarBtnQuiz.addEventListener('click', voltarDoQuiz);
