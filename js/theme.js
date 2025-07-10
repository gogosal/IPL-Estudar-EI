// ====================================
// SISTEMA DE TEMA CLARO/ESCURO
// ====================================

/**
 * Inicializa o sistema de temas
 */
function inicializarTema() {
    const toggleThemeBtn = document.getElementById('toggle-theme');

    // Verificar se há tema salvo no localStorage
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'dark') {
        ativarModoEscuro();
    }

    // Event listener para o botão de toggle
    toggleThemeBtn.addEventListener('click', alternarTema);
}

/**
 * Alterna entre tema claro e escuro
 */
function alternarTema() {
    const body = document.body;
    const toggleThemeBtn = document.getElementById('toggle-theme');
    const icon = toggleThemeBtn.querySelector('i');

    if (body.classList.contains('dark')) {
        ativarModoClaro();
        localStorage.setItem('tema', 'light');
    } else {
        ativarModoEscuro();
        localStorage.setItem('tema', 'dark');
    }
}

/**
 * Ativa o modo escuro
 */
function ativarModoEscuro() {
    const body = document.body;
    const icon = document.querySelector('#toggle-theme i');

    body.classList.add('dark');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

/**
 * Ativa o modo claro
 */
function ativarModoClaro() {
    const body = document.body;
    const icon = document.querySelector('#toggle-theme i');

    body.classList.remove('dark');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
}
