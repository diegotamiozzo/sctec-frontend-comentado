/**
 * Estudo de Funções: Parâmetros e Valores Padrão
 * 
 * Funções permitem agrupar um bloco de código que pode ser reutilizado.
 * Parâmetros funcionam como variáveis locais que recebem valores quando a função é chamada.
 */

/**
 * Função criarPerfil
 * @param {string} nome - Nome do usuário
 * @param {number} idade - Idade do usuário
 * @param {string} cidade - Cidade (Parâmetro opcional com valor padrão "Não informada")
 * @param {string} estado - Estado (Parâmetro opcional com valor padrão "SC")
 */
function criarPerfil(nome, idade, cidade = "Não informada", estado = "SC") {
    console.log("--- Perfil do Usuário ---");
    console.log("Nome:   " + nome);
    console.log("Idade:  " + idade + " anos");
    console.log("Cidade: " + cidade);
    console.log("Estado: " + estado);
    console.log("-------------------------");
}

// Chamada com todos os parâmetros
criarPerfil("Yan", 33, "Florianópolis");

// Chamada omitindo o parâmetro opcional 'cidade'
// O JavaScript usará o valor padrão definido na assinatura da função.
criarPerfil("Maria", 28);

// Chamada com valores diferentes
criarPerfil("José", 45, "São José", "RS");
