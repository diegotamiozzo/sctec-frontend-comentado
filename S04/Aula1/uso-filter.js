/**
 * Estudo de Métodos de Array: filter()
 * 
 * O método filter() cria um NOVO array com todos os elementos que passaram
 * no teste implementado pela função fornecida.
 */

const produtos = [
    { nome: "Veja", valor: 12, estoque: 8 },
    { nome: "Omo", valor: 8, estoque: 0 },
    { nome: "Biscoito", valor: 9, estoque: 15 },
    { nome: "Biscoito", valor: 8, estoque: 15 },
    { nome: "Detergente", valor: 5, estoque: 20 }
];

console.log("--- Filtragem de Produtos ---");

// 1. Filtrar por nome (ignorando maiúsculas/minúsculas)
const termoBusca = "BISCOITO";
const biscoitos = produtos.filter(produto => 
    produto.nome.toLowerCase() === termoBusca.toLowerCase()
);

console.log(`Busca por "${termoBusca}": ${biscoitos.length} itens encontrados.`);
console.log(biscoitos);

// 2. Filtrar produtos com valor menor que 10
const produtosBaratos = produtos.filter(p => p.valor < 10);
console.log("\nProdutos abaixo de R$ 10,00:");
console.log(produtosBaratos);

// 3. Filtrar produtos fora de estoque
const semEstoque = produtos.filter(p => p.estoque <= 0);
console.log("\nProdutos esgotados:");
console.log(semEstoque);

/**
 * Diferença entre find() e filter():
 * - find(): Retorna apenas o PRIMEIRO elemento que encontrar ou undefined.
 * - filter(): Retorna um ARRAY com TODOS os elementos que encontrar ou um array vazio [].
 */
const primeiroBiscoito = produtos.find(p => p.nome.toLowerCase() === "biscoito");
console.log("\nPrimeiro biscoito encontrado com find():", primeiroBiscoito);
