/**
 * Estudo de Métodos de Array: forEach
 * 
 * O 'forEach' é um método de array que executa uma função para cada elemento.
 * É uma forma mais moderna e legível de percorrer listas em comparação ao 'for' tradicional.
 */

const frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"];

console.log("--- Percorrendo com forEach ---");

/**
 * A função de callback do forEach pode receber até 3 argumentos:
 * 1. O elemento atual (item)
 * 2. O índice do elemento (index)
 * 3. O próprio array completo (array)
 */
frutas.forEach((item, indice) => {
    console.log(`Fruta na posição ${indice}: ${item}`);
});

console.log("\n--- Exemplo: Filtrando na exibição ---");
// Exibir apenas as frutas em posições pares
frutas.forEach((item, indice) => {
    if (indice % 2 === 0) {
        console.log(`[PAR] Índice ${indice}: ${item}`);
    }
});

/**
 * Diferença importante:
 * Diferente do 'for' tradicional, você não pode usar 'break' ou 'continue'
 * dentro de um 'forEach'. Se precisar interromper o loop, use 'for' ou 'some'/'every'.
 */
