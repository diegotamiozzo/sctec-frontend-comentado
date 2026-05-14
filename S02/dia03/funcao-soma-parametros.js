/**
 * Estudo de Funções: Operações Aritméticas com Retorno
 * 
 * Funções matemáticas são os exemplos mais clássicos de processamento de dados:
 * Entrada (parâmetros) -> Processamento (soma) -> Saída (return).
 */

/**
 * Soma dois números e retorna o resultado.
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} - A soma de a + b
 */
function somar(a, b) {
    return a + b;
}

// Exemplo 1: Armazenando o retorno em uma variável para uso posterior
let resultadoFinal = somar(10, 25);
console.log(`O resultado da soma entre 10 e 25 é: ${resultadoFinal}`);

// Exemplo 2: Chamando a função diretamente dentro de uma Template String
console.log(`Soma rápida (50 + 50): ${somar(50, 50)}`);

/**
 * Curiosidade:
 * Se passarmos strings para esta função, o JavaScript irá concatená-las
 * em vez de somar numericamente, devido ao comportamento do operador '+'.
 */
console.log("Teste com strings:", somar("10", "20")); // Saída: "1020"
