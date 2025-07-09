const disciplinasPorSemestre = {
    '1.1': [
        { nome: "Programação I", icon: "fa-laptop-code" },
        { nome: "Álgebra Linear", icon: "fa-square-root-alt" },
        { nome: "Sistemas Computacionais", icon: "fa-microchip" },
        { nome: "Analise Matemática", icon: "fa-chart-line" },
        { nome: "Física Aplicada", icon: "fa-atom" },
        { nome: "Matemática Geral", icon: "fa-calculator" }
    ],
    '2.1': [
        { nome: "Programação II", icon: "fa-laptop-code" },
        { nome: "Matemática Discreta", icon: "fa-th" },
        { nome: "Estatística", icon: "fa-chart-bar" },
        { nome: "Sistemas Operativos", icon: "fa-server" },
        { nome: "Inglês", icon: "fa-language" },
        { nome: "Tecnologias de Internet", icon: "fa-globe" }
    ],
    '1.2': [],
    '2.2': []
};
const quizzesPorDisciplina = {
    "Programação I": [
        {
            pergunta: "Qual linguagem é usada para desenvolvimento web frontend?",
            respostas: [
                { texto: "JavaScript", correta: true },
                { texto: "Python", correta: false },
                { texto: "C#", correta: false },
                { texto: "SQL", correta: false }
            ]
        },
        {
            pergunta: "Qual operador é usado para atribuição em JavaScript?",
            respostas: [
                { texto: "==", correta: false },
                { texto: "=", correta: true },
                { texto: "===", correta: false },
                { texto: "+=", correta: false }
            ]
        }
    ],

    "Álgebra Linear": [
        {
            pergunta: "O que é um vetor linearmente independente?",
            respostas: [
                { texto: "Nenhum vetor é múltiplo dos outros", correta: true },
                { texto: "Todos os vetores são paralelos", correta: false },
                { texto: "Tem magnitude zero", correta: false },
                { texto: "É ortogonal ao eixo x", correta: false }
            ]
        }
    ],

    "Sistemas Operativos": [
        {
            pergunta: "Qual é uma das funções principais de um Sistema Operativo?",
            respostas: [
                { texto: "Aumentar a resolução do monitor", correta: false },
                { texto: "Controlar o desempenho da GPU", correta: false },
                { texto: "Gerir recursos de hardware e fornecer serviços ao utilizador", correta: true },
                { texto: "Criar documentos PDF", correta: false }
            ]
        },
        {
            pergunta: "O que é o firmware?",
            respostas: [
                { texto: "Um tipo de sistema operativo", correta: false },
                { texto: "Software embutido no hardware que garante o funcionamento básico do dispositivo", correta: true },
                { texto: "Um antivírus embutido", correta: false },
                { texto: "Um driver de impressora", correta: false }
            ]
        },
        {
            pergunta: "Qual das seguintes opções representa um Sistema Operativo multitarefa?",
            respostas: [
                { texto: "MS-DOS", correta: false },
                { texto: "BIOS", correta: false },
                { texto: "Linux", correta: true },
                { texto: "FAT32", correta: false }
            ]
        },
        {
            pergunta: "O que é um container?",
            respostas: [
                { texto: "Uma máquina virtual completa com sistema operativo", correta: false },
                { texto: "Um processo do sistema operativo para compactar ficheiros", correta: false },
                { texto: "Um ambiente leve que partilha o mesmo sistema operativo base", correta: true },
                { texto: "Uma partição do disco rígido", correta: false }
            ]
        },
        {
            pergunta: "O que é o PCB (Process Control Block)?",
            respostas: [
                { texto: "Um tipo de memória de cache", correta: false },
                { texto: "Um processo de backup de ficheiros", correta: false },
                { texto: "Uma estrutura que armazena informações sobre um processo", correta: true },
                { texto: "Um compilador de código C", correta: false }
            ]
        },
        {
            pergunta: "O que acontece durante a comutação de contexto?",
            respostas: [
                { texto: "A memória RAM é formatada", correta: false },
                { texto: "O sistema operativo fecha todos os processos", correta: false },
                { texto: "O estado de um processo é salvo e outro processo assume o controlo do CPU", correta: true },
                { texto: "A CPU entra em modo de repouso", correta: false }
            ]
        },
        {
            pergunta: "Que parte da memória de um processo armazena variáveis locais e chamadas de função?",
            respostas: [
                { texto: "Heap", correta: false },
                { texto: "Text segment", correta: false },
                { texto: "Stack", correta: true },
                { texto: "Data segment", correta: false }
            ]
        },
        {
            pergunta: "Qual das seguintes opções faz parte do ciclo de compilação em C?",
            respostas: [
                { texto: "Compilação direta para ficheiro .jpg", correta: false },
                { texto: "Pré-processamento, compilação, montagem e ligação", correta: true },
                { texto: "Conversão para bytecode Java", correta: false },
                { texto: "Execução via interpretador", correta: false }
            ]
        },
        {
            pergunta: "Para que serve a diretiva #ifndef em C?",
            respostas: [
                { texto: "Executar um comando do sistema", correta: false },
                { texto: "Definir uma função", correta: false },
                { texto: "Proteger contra múltiplas inclusões de cabeçalhos", correta: true },
                { texto: "Incluir ficheiros de texto no programa", correta: false }
            ]
        },
        {
            pergunta: "Qual função aloca memória dinâmica em C?",
            respostas: [
                { texto: "scanf()", correta: false },
                { texto: "malloc()", correta: true },
                { texto: "printf()", correta: false },
                { texto: "free()", correta: false }
            ]
        },
        {
            pergunta: "Qual é a diferença entre open() e fopen() em C?",
            respostas: [
                { texto: "Ambas são iguais", correta: false },
                { texto: "open() é da API de alto nível, fopen() da API de baixo nível", correta: false },
                { texto: "open() é da API de baixo nível e usa descritores de ficheiros, fopen() é de alto nível e usa FILE*", correta: true },
                { texto: "fopen() é usada apenas para ficheiros binários", correta: false }
            ]
        },
        {
            pergunta: "O que representa a função stat() no Unix?",
            respostas: [
                { texto: "Criação de um diretório", correta: false },
                { texto: "Preenchimento de uma estrutura com metadados do ficheiro", correta: true },
                { texto: "Listagem de utilizadores do sistema", correta: false },
                { texto: "Encerramento de um ficheiro", correta: false }
            ]
        },
        {
            pergunta: "Qual destas opções é uma limitação do sistema de ficheiros FAT32?",
            respostas: [
                { texto: "Só funciona em Linux", correta: false },
                { texto: "Permite ficheiros de tamanho ilimitado", correta: false },
                { texto: "Tamanho máximo de partição de cerca de 2 TiB", correta: true },
                { texto: "É o único sistema com journaling", correta: false }
            ]
        },
        {
            pergunta: "O que é o page fault na memória virtual?",
            respostas: [
                { texto: "Erro de hardware ao inicializar a RAM", correta: false },
                { texto: "Quando uma página requisitada não está na RAM e precisa ser carregada do disco", correta: true },
                { texto: "Quando a cache do processador está cheia", correta: false },
                { texto: "Um tipo de vírus que afeta a memória virtual", correta: false }
            ]
        },
        {
            pergunta: "O que foi a falha Dirty Cow?",
            respostas: [
                { texto: "Uma falha em ficheiros JPEG", correta: false },
                { texto: "Uma vulnerabilidade de segurança no Linux", correta: true },
                { texto: "Um problema com containers Docker", correta: false },
                { texto: "Um bug na BIOS", correta: false }
            ]
        }
    ],
};

// DOM
const quizContainer = document.getElementById('quiz-container');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');
const finishBtn = document.getElementById('finish-btn');
const voltarBtnQuiz = document.getElementById('voltar-btn-quiz');
const scoreText = document.getElementById('score-text');

let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;

function abrirSemestre(semestre) {
    const grid = document.getElementById('disciplinas');
    const voltarBtn = document.querySelector('.voltar-btn');
    const semestres = document.getElementById('semestres');

    grid.innerHTML = '';

    disciplinasPorSemestre[semestre].forEach(disciplina => {
        const card = document.createElement('div');
        card.className = 'card';

        // Criar o ícone FontAwesome
        const icon = document.createElement('i');
        icon.className = `fas ${disciplina.icon}`;
        icon.style.marginRight = '8px'; // espaçamento

        // Criar o texto da disciplina
        const texto = document.createElement('span');
        texto.textContent = disciplina.nome;

        // Adicionar evento de clique para abrir o quiz
        card.addEventListener('click', () => abrirQuiz(disciplina.nome));

        // Adicionar ícone + texto no card
        card.appendChild(icon);
        card.appendChild(texto);

        grid.appendChild(card);
    });

    semestres.classList.add('hidden');
    grid.classList.remove('hidden');
    voltarBtn.classList.remove('hidden');
}

function voltarParaSemestres() {
    document.getElementById('disciplinas').classList.add('hidden');
    document.querySelector('.voltar-btn').classList.add('hidden');
    document.getElementById('semestres').classList.remove('hidden');
}

function abrirQuiz(disciplina) {
    document.getElementById('quiz-title').textContent = `Quiz: ${disciplina}`;
    currentQuiz = quizzesPorDisciplina[disciplina] || [];
    currentQuestionIndex = 0;
    score = 0;
    mostrarPergunta(); // ← nome correto

    document.getElementById('semestres').classList.add('hidden');
    document.getElementById('disciplinas').classList.add('hidden');
    document.querySelector('.voltar-btn').classList.add('hidden');

    // Mostrar o novo wrapper
    document.getElementById('quiz-wrapper').classList.remove('hidden');
    quizContainer.classList.remove('hidden');
    document.getElementById('quiz-nav').classList.remove('hidden');


    // Criar botões de navegação
    const navContainer = document.getElementById('quiz-nav-buttons');
    navContainer.innerHTML = '';

    currentQuiz.forEach((_, index) => {
        const btn = document.createElement('button');
        btn.textContent = index + 1;
        btn.style.padding = '5px 10px';
        btn.style.border = '1px solid #ccc';
        btn.style.borderRadius = '4px';
        btn.style.backgroundColor = '#e0e0e0';
        btn.style.cursor = 'pointer';

        btn.addEventListener('click', () => {
            currentQuestionIndex = index;
            mostrarPergunta();
        });

        navContainer.appendChild(btn);
    });
}

function mostrarPergunta() {
    resetState();

    if (currentQuiz.length === 0) {
        questionText.textContent = "Nenhum quiz disponível para esta disciplina.";
        return;
    }

    let currentQuestion = currentQuiz[currentQuestionIndex];
    questionText.textContent = currentQuestion.pergunta;

    currentQuestion.respostas.forEach(resp => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = resp.texto;
        button.dataset.correta = resp.correta;
        button.addEventListener('click', selecionarResposta);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextBtn.classList.add('hidden');
    finishBtn.classList.add('hidden');
    scoreText.classList.add('hidden');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selecionarResposta(e) {
    const respostaSelecionada = e.target;
    const correta = respostaSelecionada.dataset.correta === 'true';

    // Desativa todos os botões
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correta === 'true') {
            button.classList.add('correta');
        } else {
            button.classList.add('incorreta');
        }
    });

    // Atualiza pontuação
    if (correta) score++;

    // Cor no botão do nav
    const navButtons = document.getElementById('quiz-nav-buttons').children;
    const navBtn = navButtons[currentQuestionIndex];
    navBtn.style.backgroundColor = correta ? '#4CAF50' : '#f44336'; // Verde ou vermelho
    navBtn.style.color = 'white';

    // Mostrar botão "Próxima" ou "Finalizar"
    if (currentQuestionIndex < currentQuiz.length - 1) {
        nextBtn.classList.remove('hidden');
    } else {
        finishBtn.classList.remove('hidden');
    }
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    mostrarPergunta();
});

finishBtn.addEventListener('click', () => {
    questionText.textContent = `Você acertou ${score} de ${currentQuiz.length} perguntas.`;
    answerButtons.classList.add('hidden');
    nextBtn.classList.add('hidden');
    finishBtn.classList.add('hidden');
    scoreText.textContent = `Pontuação: ${score} / ${currentQuiz.length}`;
    scoreText.classList.remove('hidden');
});

voltarBtnQuiz.addEventListener('click', () => {
    quizContainer.classList.add('hidden');
    answerButtons.classList.remove('hidden');
    scoreText.classList.add('hidden');
    document.getElementById('quiz-nav').classList.add('hidden');
    document.getElementById('semestres').classList.remove('hidden');
});

// Dark mode toggle
const toggleThemeBtn = document.getElementById('toggle-theme');
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const icon = toggleThemeBtn.querySelector('i');
    if (document.body.classList.contains('dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});
