/**
 * Estudo de Operadores Matemáticos em JavaScript
 * 
 * JavaScript suporta os operadores aritméticos padrão para realizar cálculos.
 */

let numero1 = 150;
let numero2 = 347;

// Adição (+)
let soma = numero1 + numero2;

// Subtração (-)
let subtracao = numero1 - numero2;

// Multiplicação (*)
let multiplicacao = numero1 * numero2;

// Divisão (/)
let divisao = numero1 / numero2;

// Módulo (%) - Retorna o resto da divisão
let resto = numero2 % numero1;

// Exponenciação (**) - Eleva um número à potência de outro
let potencia = 2 ** 3; // 2 elevado a 3 = 8

console.log("--- Resultados Matemáticos ---");
console.log(`Números base: ${numero1} e ${numero2}`);
console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao.toFixed(2)); // toFixed(2) limita a 2 casas decimais
console.log("Resto da divisão de 347 por 150:", resto);
console.log("2 elevado a 3:", potencia);

/**
 * Dica de Estudo:
 * Ao usar o operador '+' com strings, ele realiza a CONCATENAÇÃO (junção de textos).
 * Exemplo: "10" + 5 resultará na string "105".
 */
let concatenacao = "O resultado é: " + soma;
console.log(concatenacao);
