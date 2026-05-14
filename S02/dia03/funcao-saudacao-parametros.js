/**
 * Estudo de Funções: Template Strings e Parâmetros Opcionais
 * 
 * Template Strings (usando crases ` `) permitem interpolar variáveis dentro de textos
 * de forma mais legível que a concatenação tradicional.
 */

/**
 * Exibe uma saudação personalizada.
 * @param {string} nome - Nome a ser saudado. Valor padrão: 'Visitante'.
 */
function saudacao(nome = 'Visitante') {
    // Uso de Template String com ${} para inserir a variável
    console.log(`Olá, ${nome}! Seja bem-vindo(a).`);
}

// Chamada sem argumentos: usará o valor padrão 'Visitante'
saudacao();

// Chamada com argumento: substituirá o valor padrão
saudacao("Yan");
saudacao("Maria");

/**
 * Nota de Estudo:
 * Parâmetros com valores padrão são úteis para evitar erros de 'undefined'
 * quando o usuário esquece de passar um dado importante.
 */
