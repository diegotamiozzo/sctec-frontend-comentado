/**
 * Estudo de Métodos de Array: map()
 * 
 * O método map() cria um NOVO array com os resultados da chamada de uma função
 * para cada elemento do array original.
 * 
 * Regra de ouro: O map() SEMPRE retorna um array do mesmo tamanho do original,
 * mas com os dados transformados.
 */

// --- Exemplo 1: Transformação Simples (Desconto) ---
const precos = [100, 90, 250, 50];

/**
 * Aplicar 10% de desconto apenas em produtos acima de R$ 100,00.
 */
const precosComDesconto = precos.map(preco => {
    if (preco > 100) {
        return preco * 0.9; // Retorna valor com 10% de desconto
    }
    return preco; // Retorna valor original
});

console.log("Preços Originais:", precos);
console.log("Preços com Desconto Condicional:", precosComDesconto);

// --- Exemplo 2: Extração de Dados ---
const usuarios = [
    { nome: "Yan", idade: 33, email: "yan@exemplo.com" },
    { nome: "Ana", idade: 26, email: "ana@exemplo.com" },
    { nome: "Joao", idade: 42, email: "joao@exemplo.com" }
];

/**
 * Criar uma lista contendo apenas os nomes dos usuários.
 */
const listaNomes = usuarios.map(u => u.nome);
console.log("\nLista de Nomes:", listaNomes);

// --- Exemplo 3: Transformação de Objetos (Formatação) ---
const produtos = [
    { nome: "Notebook", preco: 3000 },
    { nome: "Mouse", preco: 100 },
    { nome: "Teclado", preco: 129 }
];

/**
 * Criar um novo array de objetos com valores formatados para exibição.
 */
const vitrineProdutos = produtos.map(p => {
    return {
        item: p.nome.toUpperCase(),
        precoBRL: p.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        precoUSD: (p.preco / 5).toFixed(2) + " USD"
    };
});

console.log("\nVitrine de Produtos Formatada:");
console.table(vitrineProdutos); // console.table é ótimo para visualizar arrays de objetos!

/**
 * Diferença entre forEach e map:
 * - forEach: Apenas percorre (não retorna nada). Use para efeitos colaterais (ex: salvar no banco).
 * - map: Percorre e TRANSFORMA (retorna um novo array). Use para preparar dados para a interface.
 */
