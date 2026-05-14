/**
 * Estudo de Módulos: Exportação de Funções
 * 
 * Módulos permitem dividir o código em vários arquivos, facilitando a organização.
 * Este arquivo atua como uma biblioteca de utilitários matemáticos.
 */

// Usando a sintaxe CommonJS (module.exports) que é o padrão do Node.js tradicional
// para ser compatível com o 'require'.

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function dividir(a, b) {
    if (b === 0) return "Erro: Divisão por zero";
    return a / b;
}

function multiplicar(a, b) {
    return a * b;
}

// Exportando as funções para que outros arquivos possam usá-las
module.exports = {
    somar,
    subtrair,
    dividir,
    multiplicar
};

/**
 * Nota: Em ambientes modernos (ES6), usaríamos 'export function...',
 * mas no Node.js com 'require', usamos 'module.exports'.
 */
