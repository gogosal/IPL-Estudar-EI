# 🎓 IPL Estudar EI

Um sistema web moderno e interativo para estudar disciplinas do curso de Engenharia Informática do Instituto Politécnico de Leiria.

![Versão](https://img.shields.io/badge/versão-1.0.0-blue.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![CSS](https://img.shields.io/badge/CSS-3-blue.svg)
![HTML](https://img.shields.io/badge/HTML-5-orange.svg)
![Licença](https://img.shields.io/badge/licença-MIT-green.svg)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Usar](#como-usar)
- [Instalação](#instalação)
- [Screenshots](#screenshots)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 📖 Sobre o Projeto

O **IPL Estudar EI** é uma plataforma web desenvolvida para auxiliar estudantes de Engenharia Informática do IPL no estudo das disciplinas através de quizzes interativos organizados por semestres e anos letivos.

### 🎯 Objetivos

- Facilitar o estudo das disciplinas através de quizzes interativos
- Organizar o conteúdo por anos e semestres
- Proporcionar uma experiência de usuário moderna e responsiva
- Permitir navegação intuitiva entre perguntas e disciplinas

## ✨ Funcionalidades

### 🗂️ Navegação Hierárquica
- **Semestres**: Navegação por anos (1º, 2º, 3º ano) e semestres
- **Disciplinas**: Lista de disciplinas disponíveis por semestre
- **Testes**: Diferentes tipos de avaliação por disciplina
- **Botão Voltar Inteligente**: Navega automaticamente para o nível anterior

### 📝 Sistema de Quiz
- **Navegação entre Perguntas**: Botões "Anterior" e "Próxima" sempre disponíveis
- **Navegação Numerada**: Acesso direto a qualquer pergunta
- **Feedback Visual**: Respostas corretas/incorretas com cores distintivas
- **Pontuação**: Sistema de pontuação em tempo real
- **Navegação Livre**: Possibilidade de rever respostas anteriores

### 🎨 Interface Moderna
- **Design Responsivo**: Adaptável a diferentes tamanhos de tela
- **Tema Claro/Escuro**: Alternância entre modos de visualização
- **Animações Suaves**: Transições e efeitos visuais elegantes
- **Cards Interativos**: Interface baseada em cards com hover effects

### 🔧 Funcionalidades Técnicas
- **Arquitetura Modular**: JavaScript organizado em módulos por funcionalidade
- **Código Limpo**: Separação clara de responsabilidades
- **Performance Otimizada**: Carregamento eficiente dos recursos

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos modernos com flexbox/grid e variáveis CSS
- **JavaScript ES6+**: Programação modular e orientada a eventos

### Bibliotecas e Frameworks
- **Font Awesome**: Ícones vetoriais
- **Google Fonts**: Tipografia (Inter)

### Ferramentas de Desenvolvimento
- **Git**: Controle de versão
- **VS Code**: Editor de código recomendado

## 📁 Estrutura do Projeto

```
IPL-Estudar-EI/
├── index.html              # Página principal
├── README.md               # Documentação do projeto
├── css/
│   └── style.css          # Estilos principais
├── js/
│   ├── main.js            # Inicialização da aplicação
│   ├── data.js            # Dados das disciplinas e quizzes
│   ├── navigation.js      # Sistema de navegação
│   ├── quiz.js            # Lógica do sistema de quiz
│   └── theme.js           # Alternância de temas
└── assets/                # Recursos estáticos (se houver)
```

### 📋 Descrição dos Módulos

#### `main.js`
- Inicialização da aplicação
- Verificação de dependências
- Funções de debug

#### `data.js`
- Dados das disciplinas organizados por semestre
- Estrutura dos quizzes e perguntas
- Configuração de respostas e pontuações

#### `navigation.js`
- Sistema de navegação hierárquica
- Controle do botão "Voltar" inteligente
- Gerenciamento de estados da aplicação

#### `quiz.js`
- Lógica principal do sistema de quiz
- Navegação entre perguntas
- Sistema de pontuação
- Interface de navegação numerada

#### `theme.js`
- Alternância entre tema claro e escuro
- Persistência da preferência do usuário
- Sincronização com preferências do sistema

## 🚀 Como Usar

### 1. Navegação Principal
1. Acesse a página inicial
2. Escolha o ano letivo (1º, 2º ou 3º ano)
3. Selecione o semestre desejado
4. Escolha a disciplina
5. Selecione o tipo de teste

### 2. Realizando um Quiz
1. Leia a pergunta apresentada
2. Selecione uma das opções de resposta
3. Use os botões de navegação:
   - **← Anterior**: Volta para a pergunta anterior
   - **Próxima →**: Avança para a próxima pergunta
   - **Números**: Navega diretamente para uma pergunta específica
4. Use **✕ Sair do Quiz** para retornar à lista de testes

### 3. Funcionalidades Adicionais
- **Botão Voltar**: Sempre disponível para retornar ao nível anterior
- **Alternador de Tema**: Ícone no canto superior direito
- **Navegação Livre**: Possibilidade de revisar respostas já dadas

## 🔧 Instalação

### Método 1: Servidor Local (Python)
```bash
# Clone o repositório
git clone https://github.com/[seu-usuario]/IPL-Estudar-EI.git

# Navegue para o diretório
cd IPL-Estudar-EI

# Inicie um servidor local
python -m http.server 8000

# Acesse http://localhost:8000
```

### Método 2: Servidor Local (Node.js)
```bash
# Instale o http-server globalmente
npm install -g http-server

# Navegue para o diretório do projeto
cd IPL-Estudar-EI

# Inicie o servidor
http-server

# Acesse o endereço mostrado no terminal
```

### Método 3: VS Code Live Server
1. Instale a extensão "Live Server" no VS Code
2. Abra o projeto no VS Code
3. Clique com o botão direito em `index.html`
4. Selecione "Open with Live Server"

## 📊 Funcionalidades Implementadas

- ✅ Navegação hierárquica (Semestres → Disciplinas → Testes → Quiz)
- ✅ Sistema de quiz com navegação livre entre perguntas
- ✅ Botão "Voltar" inteligente contextual
- ✅ Navegação numerada para acesso direto às perguntas
- ✅ Feedback visual para respostas corretas/incorretas
- ✅ Sistema de pontuação
- ✅ Tema claro/escuro com persistência
- ✅ Design responsivo
- ✅ Arquitetura modular JavaScript
- ✅ Interface moderna com animações

## 🔮 Funcionalidades Futuras

- ⏳ Sistema de estatísticas detalhadas
- ⏳ Histórico de pontuações
- ⏳ Modo de estudo com explicações
- ⏳ Sistema de favoritos
- ⏳ Exportação de resultados
- ⏳ Integração com APIs externas
- ⏳ Sistema de usuários
- ⏳ Modo offline (PWA)

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### 📝 Diretrizes de Contribuição

- Mantenha o código limpo e bem documentado
- Siga o padrão de nomenclatura existente
- Teste suas mudanças antes de submeter
- Atualize a documentação se necessário

## 🐛 Reportar Bugs

Para reportar bugs, abra uma [issue](https://github.com/[seu-usuario]/IPL-Estudar-EI/issues) com:

- Descrição detalhada do problema
- Passos para reproduzir
- Screenshots (se aplicável)
- Informações do navegador/sistema

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **gogosal** - *Desenvolvimento Inicial* - [@gogosal](https://github.com/gogosal)

## 🙏 Agradecimentos

- Instituto Politécnico de Leiria
- Professores e colegas do curso de Engenharia Informática
- Comunidade open source

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!

**Desenvolvido com ❤️ para estudantes de Engenharia Informática do IPL**
