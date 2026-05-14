/**
 * Estudo de Operadores de Comparação e Lógicos em JavaScript
 * 
 * Operadores de comparação são usados para testar condições e retornam um valor booleano (true ou false).
 */

let idade = 10;

// --- OPERADORES DE COMPARAÇÃO ---

// Igualdade (==): Compara apenas o valor, ignorando o tipo (faz coerção de tipo).
console.log("Igualdade (10 == '10'):", idade == "10"); // true

// Igualdade Estrita (===): Compara o valor E o tipo. É a forma recomendada.
console.log("Igualdade Estrita (10 === '10'):", idade === "10"); // false (número vs string)

// Diferença (!=): Compara se os valores são diferentes (ignora o tipo).
console.log("Diferença (10 != 19):", idade != 19); // true

// Diferença Estrita (!==): Compara se os valores ou tipos são diferentes.
console.log("Diferença Estrita (10 !== '10'):", idade !== "10"); // true

// Maior que (>) e Menor que (<)
console.log("Maior que (10 > 18):", idade > 18); // false
console.log("Menor que (10 < 18):", idade < 18); // true

// Maior ou igual (>=) e Menor ou igual (<=)
console.log("Maior ou igual (10 >= 10):", idade >= 10); // true
console.log("Menor ou igual (10 <= 5):", idade <= 5);   // false


// --- ESTRUTURAS CONDICIONAIS E OPERADORES LÓGICOS ---

/**
 * Operador Lógico AND (&&):
 * Retorna true apenas se TODAS as condições forem verdadeiras.
 */
let temIngresso = true;
let temIdadeMinima = idade >= 12;

if (temIngresso && temIdadeMinima) {
    console.log("Pode entrar no evento.");
} else {
    console.log("Entrada negada: Verifique o ingresso ou a idade.");
}

/**
 * Operador Lógico OR (||):
 * Retorna true se PELO MENOS UMA das condições for verdadeira.
 */
let acompanhadoPelosPais = true;

if (temIdadeMinima || acompanhadoPelosPais) {
    console.log("Acesso permitido (por idade ou acompanhamento).");
} else {
    console.log("Acesso negado.");
}

/**
 * Operador Lógico NOT (!):
 * Inverte o valor booleano.
 */
let estaChovendo = false;
if (!estaChovendo) {
    console.log("Não está chovendo, podemos sair!");
}
