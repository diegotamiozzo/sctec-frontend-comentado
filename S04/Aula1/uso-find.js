/**
 * Estudo de Métodos de Array: find()
 * 
 * O método find() retorna o PRIMEIRO elemento no array que satisfaz a condição
 * fornecida. Caso nenhum elemento seja encontrado, retorna undefined.
 */

const produtos = [
    {
        nome: "Veja",
        valor: 12,
        estoque: 8
    },
    {
        nome: "Omo",
        valor: 8,
        estoque: null
    },
    {
        nome: "Biscoito",
        valor: 9,
        estoque: 15
    },
    {
        nome: "Biscoito",
        valor: 8,
        estoque: 15
    }
]

console.log("--- Busca de Produtos com find() ---");

/**
 * Exemplo 1: Busca por nome ignorando case
 */
const buscaNome = produtos.find((produto) => 
    produto.nome.toLocaleLowerCase() === "OMO".toLocaleLowerCase()
);
console.log("Resultado busca 'OMO':", buscaNome);

/**
 * Exemplo 2: Busca por valor exato
 */
const buscaValor = produtos.find((produto) => produto.valor === 12);
console.log("Produto com valor 12:", buscaValor);

/**
 * Exemplo 3: Busca com múltiplas condições (AND)
 * Encontrar o biscoito que custa exatamente 8 reais
 */
const buscaComposta = produtos.find((produto) => 
    produto.nome.toLocaleLowerCase() === "biscoito".toLocaleLowerCase() 
    && produto.valor === 8
);

console.log("Biscoito de R$ 8,00:", buscaComposta);
