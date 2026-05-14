/**
 * Estudo de Laços de Repetição: For
 * 
 * O laço 'for' é ideal quando sabemos previamente quantas vezes o código
 * deve ser executado.
 * 
 * Sintaxe: for (inicialização; condição; incremento) { ... }
 */

// --- Exemplo 1: Contagem Simples ---
console.log("--- Contagem de 1 a 5 ---");
for (let i = 1; i <= 5; i++) {
    console.log(`Número: ${i}`);
}

// --- Exemplo 2: Tabuada do 3 ---
console.log("\n--- Tabuada do 3 ---");
for (let i = 1; i <= 10; i++) {
    // Usamos template strings para formatar a saída
    console.log(`3 x ${i} = ${3 * i}`);
}

// --- Exemplo 3: Percorrendo um Array ---
const frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"];

console.log("\n--- Lista de Frutas ---");
/**
 * Para percorrer arrays, iniciamos o índice em 0 e vamos até
 * que ele seja menor que o tamanho do array (length).
 */
for (let indice = 0; indice < frutas.length; indice++) {
    console.log(`Posição ${indice}: ${frutas[indice]}`);
}

/**
 * Dica de Estudo:
 * - 'i++' é o mesmo que 'i = i + 1'.
 * - Se a condição 'i < frutas.length' nunca for falsa, teremos um loop infinito.
 */
