// ====================================
// ARQUIVO PRINCIPAL - INICIALIZAÇÃO
// ====================================

/**
 * Inicializa a aplicação quando o DOM estiver carregado
 */
document.addEventListener('DOMContentLoaded', function () {
    console.log('🚀 IPL Estudar EI - Aplicação iniciada');

    // Inicializar sistemas
    inicializarTema();

    // Verificar se todos os dados foram carregados
    verificarDados();

    console.log('✅ Todos os sistemas inicializados com sucesso');
});

/**
 * Verifica se os dados foram carregados corretamente
 */
function verificarDados() {
    if (typeof disciplinasPorSemestre === 'undefined') {
        console.error('❌ Dados das disciplinas não carregados');
        return;
    }

    if (typeof quizzesPorDisciplina === 'undefined') {
        console.error('❌ Dados dos quizzes não carregados');
        return;
    }

    console.log('✅ Dados carregados:', {
        semestres: Object.keys(disciplinasPorSemestre).length,
        disciplinas: Object.keys(quizzesPorDisciplina).length
    });
}

/**
 * Função de utilidade para debug
 */
function debug() {
    console.log('=== DEBUG INFO ===');
    console.log('Disciplinas por semestre:', disciplinasPorSemestre);
    console.log('Quizzes por disciplina:', quizzesPorDisciplina);
    console.log('Tema atual:', document.body.classList.contains('dark') ? 'escuro' : 'claro');
}
