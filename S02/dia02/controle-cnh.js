/**
 * Estudo de Estruturas Condicionais: IF / ELSE
 * 
 * O bloco 'if' (se) avalia uma expressão booleana (verdadeiro ou falso).
 * Se o resultado for 'true', o código dentro das chaves do 'if' é executado.
 * Caso contrário ('false'), o código dentro do 'else' (senão) é executado.
 */

// Definimos uma variável para representar a idade do usuário
let idade = 15;

/**
 * Operador de Comparação: >= (Maior ou igual)
 * 
 * Exemplos de avaliação:
 * 20 >= 18 -> true (verdadeiro)
 * 17 >= 18 -> false (falso)
 */
if (idade >= 18) {
    // Este bloco executa se a condição (idade >= 18) for verdadeira.
    console.log("Status: Autorizado.");
    console.log("Você tem idade suficiente para iniciar o processo da CNH.");
} else {
    // Este bloco executa se a condição for falsa.
    console.log("Status: Não autorizado.");
    console.log("Você ainda não pode ter CNH, pois é menor de idade.");
    
    // Cálculo simples para informar quanto tempo falta
    let anosFaltantes = 18 - idade;
    console.log(`Faltam ${anosFaltantes} ano(s) para você atingir a maioridade.`);
}
