// ====================================
// SISTEMA DE NAVEGAÇÃO INTELIGENTE
// ====================================

// Controle do estado atual da aplicação
let estadoAtual = 'semestres'; // 'semestres', 'disciplinas', 'testes', 'quiz'
let semestreAtual = '';
let disciplinaAtual = '';

/**
 * Abre a página de disciplinas para um semestre específico
 * @param {string} semestre - ID do semestre (ex: '1.1', '2.1')
 */
function abrirSemestre(semestre) {
    semestreAtual = semestre;
    estadoAtual = 'disciplinas';

    const grid = document.getElementById('disciplinas');
    const voltarBtn = document.getElementById('voltar-btn');
    const semestres = document.getElementById('semestres');

    grid.innerHTML = '';

    // Verificar se existem disciplinas para este semestre
    const disciplinas = disciplinasPorSemestre[semestre] || [];

    disciplinas.forEach((disciplina, index) => {
        const card = criarCardDisciplina(disciplina, index);
        card.addEventListener('click', () => abrirTestes(disciplina.nome));
        grid.appendChild(card);
    });

    // Se não há disciplinas, mostrar mensagem
    if (disciplinas.length === 0) {
        const cardEmBreve = criarCardEmBreve();
        grid.appendChild(cardEmBreve);
    }

    // Navegação
    semestres.classList.add('hidden');
    grid.classList.remove('hidden');
}

/**
 * Abre a página de testes para uma disciplina específica
 * @param {string} disciplina - Nome da disciplina
 */
function abrirTestes(disciplina) {
    disciplinaAtual = disciplina;
    estadoAtual = 'testes';

    const grid = document.getElementById('testes');
    const voltarBtn = document.getElementById('voltar-btn');
    const disciplinas = document.getElementById('disciplinas');

    grid.innerHTML = '';

    // Obter os testes disponíveis para a disciplina
    const testesDisponiveis = quizzesPorDisciplina[disciplina] || {};
    const nomesDosTestes = Object.keys(testesDisponiveis);

    nomesDosTestes.forEach((nomeDoTeste, index) => {
        const card = criarCardTeste(nomeDoTeste, index);
        card.addEventListener('click', () => abrirQuiz(disciplina, nomeDoTeste));
        grid.appendChild(card);
    });

    // Se não há testes disponíveis
    if (nomesDosTestes.length === 0) {
        const cardEmBreve = criarCardEmBreve();
        grid.appendChild(cardEmBreve);
    }

    // Navegação
    disciplinas.classList.add('hidden');
    grid.classList.remove('hidden');
}

/**
 * Função universal de voltar que funciona baseada no estado atual
 */
function voltarNivel() {
    const voltarBtn = document.getElementById('voltar-btn');

    switch (estadoAtual) {
        case 'disciplinas':
            // Voltar para semestres
            document.getElementById('disciplinas').classList.add('hidden');
            document.getElementById('semestres').classList.remove('hidden');
            voltarBtn.classList.add('hidden');
            estadoAtual = 'semestres';
            break;

        case 'testes':
            // Voltar para disciplinas
            document.getElementById('testes').classList.add('hidden');
            document.getElementById('disciplinas').classList.remove('hidden');
            estadoAtual = 'disciplinas';
            // Botão continua visível
            break;

        case 'quiz':
            // Voltar para testes
            esconderQuiz();
            document.getElementById('testes').classList.remove('hidden');
            voltarBtn.classList.remove('hidden');
            estadoAtual = 'testes';
            break;
    }
}

/**
 * Esconde todos os elementos do quiz
 */
function esconderQuiz() {
    document.getElementById('quiz-wrapper').classList.add('hidden');
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('quiz-nav').classList.add('hidden');
}

// ====================================
// FUNÇÕES AUXILIARES PARA CRIAR CARDS
// ====================================

/**
 * Cria um card para uma disciplina
 * @param {Object} disciplina - Objeto com nome e ícone da disciplina
 * @param {number} index - Índice para animação
 * @returns {HTMLElement} Elemento do card
 */
function criarCardDisciplina(disciplina, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${(index + 1) * 0.1}s`;

    // Criar container para o ícone
    const cardIcon = document.createElement('div');
    cardIcon.className = 'card-icon';

    // Criar o ícone FontAwesome
    const icon = document.createElement('i');
    icon.className = `fas ${disciplina.icon}`;
    cardIcon.appendChild(icon);

    // Criar o texto da disciplina
    const texto = document.createElement('div');
    texto.textContent = disciplina.nome;
    texto.style.marginTop = '10px';

    card.appendChild(cardIcon);
    card.appendChild(texto);

    return card;
}

/**
 * Cria um card para um teste
 * @param {string} nomeDoTeste - Nome do teste
 * @param {number} index - Índice para animação
 * @returns {HTMLElement} Elemento do card
 */
function criarCardTeste(nomeDoTeste, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${(index + 1) * 0.1}s`;

    // Criar container para o ícone
    const cardIcon = document.createElement('div');
    cardIcon.className = 'card-icon';
    cardIcon.textContent = iconesDosTestes[nomeDoTeste] || '📚';

    // Criar o texto do teste
    const texto = document.createElement('div');
    texto.textContent = nomeDoTeste;
    texto.style.marginTop = '10px';

    card.appendChild(cardIcon);
    card.appendChild(texto);

    return card;
}

/**
 * Cria um card "Em breve..." para disciplinas sem conteúdo
 * @returns {HTMLElement} Elemento do card
 */
function criarCardEmBreve() {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.opacity = '0.6';
    card.style.cursor = 'not-allowed';

    const cardIcon = document.createElement('div');
    cardIcon.className = 'card-icon';
    cardIcon.textContent = '🚧';

    const texto = document.createElement('div');
    texto.textContent = 'Em breve...';
    texto.style.marginTop = '10px';

    card.appendChild(cardIcon);
    card.appendChild(texto);

    return card;
}
