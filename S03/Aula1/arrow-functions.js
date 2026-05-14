/**
 * Estudo de Arrow Functions (Funções de Seta)
 * 
 * Introduzidas no ES6, as Arrow Functions oferecem uma sintaxe mais curta
 * para escrever funções em JavaScript.
 */

// Sintaxe básica: (parâmetros) => expressão
// O retorno é implícito se não houver chaves {}.

// Exemplo de Soma
const soma = (a, b) => a + b;

// Exemplo de Subtração
const subtracao = (a, b) => a - b;

// Exemplo de Multiplicação
const multiplicacao = (a, b) => a * b;

// Exemplo de Divisão
const divisao = (a, b) => a / b;

/**
 * Comparação com a sintaxe tradicional:
 * 
 * function soma(a, b) {
 *     return a + b;
 * }
 * 
 * Vantagens das Arrow Functions:
 * 1. Código mais conciso e limpo.
 * 2. Retorno implícito para expressões simples.
 * 3. Não possuem seu próprio 'this' (importante em contextos de objetos e classes).
 */

console.log("--- Testando Arrow Functions ---");
console.log(`Soma (10 + 5): ${soma(10, 5)}`);
console.log(`Subtração (10 - 5): ${subtracao(10, 5)}`);
console.log(`Multiplicação (10 * 5): ${multiplicacao(10, 5)}`);
console.log(`Divisão (10 / 5): ${divisao(10, 5)}`);

// Arrow Function com apenas um parâmetro (parênteses são opcionais)
const dobrar = n => n * 2;
console.log(`Dobro de 8: ${dobrar(8)}`);

// Arrow Function sem parâmetros
const saudar = () => console.log("Olá, mundo!");
saudar();
