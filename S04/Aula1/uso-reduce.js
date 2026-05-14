/**
 * Estudo de Métodos de Array: reduce()
 * 
 * O método reduce() executa uma função redutora para cada elemento do array,
 * resultando num ÚNICO valor de retorno (um número, uma string, um objeto, etc).
 */

const notas = [10, 7.5, 6, 9, 5];

/**
 * Sintaxe: array.reduce(callback(acumulador, valorAtual), valorInicial)
 * 
 * O 'acumulador' guarda o resultado das execuções anteriores.
 * O 'valorInicial' (neste caso, 0) é fundamental para definir o tipo do resultado.
 */

const somaTotal = notas.reduce((acumulador, notaAtual) => {
    console.log(`Acumulado: ${acumulador} | Nota Atual: ${notaAtual}`);
    return acumulador + notaAtual;
}, 0);

const media = somaTotal / notas.length;

console.log("\n--- Resultado Final ---");
console.log(`Soma de todas as notas: ${somaTotal}`);
console.log(`Média da turma: ${media.toFixed(2)}`);

/**
 * Outro exemplo: Somar valores de um carrinho de compras (objetos)
 */
const carrinho = [
    { produto: "Teclado", preco: 150 },
    { produto: "Mouse", preco: 80 },
    { produto: "Monitor", preco: 900 }
];

const totalCarrinho = carrinho.reduce((total, item) => total + item.preco, 0);
console.log(`\nTotal do Carrinho: R$ ${totalCarrinho},00`);

/**
 * Por que usar reduce?
 * Ele é extremamente poderoso para transformar arrays em qualquer outro tipo de dado,
 * mantendo o código funcional e evitando variáveis globais de controle (como let soma = 0).
 */
