// ====================================
// DADOS DAS DISCIPLINAS POR SEMESTRE
// ====================================

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

// ====================================
// DADOS DOS QUIZZES POR DISCIPLINA
// ====================================

const quizzesPorDisciplina = {
    "Programação I": {
        "Teste Prático 1": [
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
        "Teste Prático 2": [
            {
                pergunta: "Como declarar uma variável em JavaScript?",
                respostas: [
                    { texto: "var nome;", correta: true },
                    { texto: "variable nome;", correta: false },
                    { texto: "string nome;", correta: false },
                    { texto: "declare nome;", correta: false }
                ]
            },
            {
                pergunta: "Qual método adiciona um elemento ao final de um array?",
                respostas: [
                    { texto: "add()", correta: false },
                    { texto: "append()", correta: false },
                    { texto: "push()", correta: true },
                    { texto: "insert()", correta: false }
                ]
            }
        ]
    },

    "Álgebra Linear": {
        "Teste Prático 1": [
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
        "Teste Prático 2": [
            {
                pergunta: "Qual é a dimensão de um espaço vetorial R³?",
                respostas: [
                    { texto: "2", correta: false },
                    { texto: "3", correta: true },
                    { texto: "4", correta: false },
                    { texto: "1", correta: false }
                ]
            }
        ]
    },

    "Sistemas Operativos": {
        "Teste Prático 1": [
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
            }
        ],
        "Teste Prático 2": [
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
            }
        ],
        "Exame Final": [
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
                pergunta: "O que foi a falha Dirty Cow?",
                respostas: [
                    { texto: "Uma falha em ficheiros JPEG", correta: false },
                    { texto: "Uma vulnerabilidade de segurança no Linux", correta: true },
                    { texto: "Um problema com containers Docker", correta: false },
                    { texto: "Um bug na BIOS", correta: false }
                ]
            }
        ]
    },

    "Sistemas Computacionais": {
        "Teste Prático 1": [
            {
                pergunta: "O que é um processador?",
                respostas: [
                    { texto: "Uma unidade de armazenamento", correta: false },
                    { texto: "A unidade central de processamento", correta: true },
                    { texto: "Um tipo de memória", correta: false },
                    { texto: "Um dispositivo de entrada", correta: false }
                ]
            },
            {
                pergunta: "Qual é a função da cache do processador?",
                respostas: [
                    { texto: "Armazenar dados permanentemente", correta: false },
                    { texto: "Acelerar o acesso a dados frequentemente utilizados", correta: true },
                    { texto: "Processar gráficos", correta: false },
                    { texto: "Controlar dispositivos de entrada", correta: false }
                ]
            }
        ],
        "Teste Prático 2": [
            {
                pergunta: "O que é a arquitetura von Neumann?",
                respostas: [
                    { texto: "Um tipo de processador gráfico", correta: false },
                    { texto: "Uma arquitetura onde dados e instruções partilham a mesma memória", correta: true },
                    { texto: "Um sistema operativo antigo", correta: false },
                    { texto: "Uma linguagem de programação", correta: false }
                ]
            }
        ]
    },

    "Analise Matemática": {
        "Teste Prático 1": [
            {
                pergunta: "O que é uma derivada?",
                respostas: [
                    { texto: "A taxa de variação instantânea", correta: true },
                    { texto: "A área sob a curva", correta: false },
                    { texto: "O valor máximo da função", correta: false },
                    { texto: "A raiz da função", correta: false }
                ]
            },
            {
                pergunta: "Qual é a derivada de x²?",
                respostas: [
                    { texto: "x", correta: false },
                    { texto: "2x", correta: true },
                    { texto: "x³", correta: false },
                    { texto: "2", correta: false }
                ]
            }
        ],
        "Exame Final": [
            {
                pergunta: "O que é um integral definido?",
                respostas: [
                    { texto: "A área sob a curva entre dois pontos", correta: true },
                    { texto: "A derivada de uma função", correta: false },
                    { texto: "O limite de uma função", correta: false },
                    { texto: "A raiz de uma equação", correta: false }
                ]
            }
        ]
    },

    "Física Aplicada": {
        "Teste Prático 1": [
            {
                pergunta: "Qual é a unidade de força no SI?",
                respostas: [
                    { texto: "Joule", correta: false },
                    { texto: "Newton", correta: true },
                    { texto: "Watt", correta: false },
                    { texto: "Pascal", correta: false }
                ]
            },
            {
                pergunta: "Segunda lei de Newton é expressa por:",
                respostas: [
                    { texto: "F = ma", correta: true },
                    { texto: "E = mc²", correta: false },
                    { texto: "P = mv", correta: false },
                    { texto: "W = Fd", correta: false }
                ]
            }
        ]
    },

    "Matemática Geral": {
        "Teste Prático 1": [
            {
                pergunta: "Quanto é 2 + 2?",
                respostas: [
                    { texto: "3", correta: false },
                    { texto: "4", correta: true },
                    { texto: "5", correta: false },
                    { texto: "6", correta: false }
                ]
            },
            {
                pergunta: "Qual é a raiz quadrada de 16?",
                respostas: [
                    { texto: "2", correta: false },
                    { texto: "4", correta: true },
                    { texto: "8", correta: false },
                    { texto: "16", correta: false }
                ]
            }
        ]
    },

    "Programação II": {
        "Teste Prático 1": [
            {
                pergunta: "O que é POO (Programação Orientada a Objetos)?",
                respostas: [
                    { texto: "Um paradigma de programação baseado em objetos", correta: true },
                    { texto: "Uma linguagem de programação", correta: false },
                    { texto: "Um tipo de base de dados", correta: false },
                    { texto: "Um algoritmo de ordenação", correta: false }
                ]
            }
        ]
    },

    "Matemática Discreta": {
        "Teste Prático 1": [
            {
                pergunta: "O que é um grafo?",
                respostas: [
                    { texto: "Uma estrutura de dados com vértices e arestas", correta: true },
                    { texto: "Um tipo de matriz", correta: false },
                    { texto: "Uma função matemática", correta: false },
                    { texto: "Um algoritmo", correta: false }
                ]
            }
        ]
    },

    "Estatística": {
        "Teste Prático 1": [
            {
                pergunta: "O que é a média aritmética?",
                respostas: [
                    { texto: "A soma de todos os valores dividida pelo número de valores", correta: true },
                    { texto: "O valor que aparece mais vezes", correta: false },
                    { texto: "O valor do meio quando ordenados", correta: false },
                    { texto: "A diferença entre o maior e menor valor", correta: false }
                ]
            }
        ]
    },

    "Inglês": {
        "Teste Prático 1": [
            {
                pergunta: "What is the past tense of 'go'?",
                respostas: [
                    { texto: "goed", correta: false },
                    { texto: "went", correta: true },
                    { texto: "gone", correta: false },
                    { texto: "going", correta: false }
                ]
            }
        ]
    },

    "Tecnologias de Internet": {
        "Teste Prático 1": [
            {
                pergunta: "O que significa HTML?",
                respostas: [
                    { texto: "Hypertext Markup Language", correta: true },
                    { texto: "High Tech Modern Language", correta: false },
                    { texto: "Home Tool Markup Language", correta: false },
                    { texto: "Hyperlink Text Management Language", correta: false }
                ]
            }
        ]
    }
};

// ====================================
// CONFIGURAÇÕES DOS ÍCONES DOS TESTES
// ====================================

const iconesDosTestes = {
    'Teste Prático 1': '📝',
    'Teste Prático 2': '📋',
    'Teste Prático 3': '📄',
    'Exame Final': '🎓',
    'Avaliação Contínua': '📊'
};
