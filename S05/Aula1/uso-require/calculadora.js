/**
 * Estudo de Módulos: Importação com require()
 * 
 * Este arquivo demonstra como consumir funções que foram exportadas
 * de outro arquivo (math.js).
 */

// Importando o módulo local. O caminho deve começar com './'
const operacoes = require("./math.js");

console.log("--- Testando Módulo de Calculadora ---");

// Usando as funções importadas através do objeto 'operacoes'
const n1 = 10;
const n2 = 5;

console.log(`${n1} + ${n2} = ${operacoes.somar(n1, n2)}`);
console.log(`${n1} - ${n2} = ${operacoes.subtrair(n1, n2)}`);
console.log(`${n1} * ${n2} = ${operacoes.multiplicar(n1, n2)}`);
console.log(`${n1} / ${n2} = ${operacoes.dividir(n1, n2)}`);

/**
 * Vantagens de usar módulos:
 * 1. Organização: Cada arquivo tem uma responsabilidade clara.
 * 2. Encapsulamento: Você só expõe o que é necessário via module.exports.
 * 3. Reuso: O arquivo math.js pode ser usado em qualquer outro projeto.
 */
