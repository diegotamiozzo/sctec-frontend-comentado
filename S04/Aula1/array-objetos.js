/**
 * Estudo de Arrays de Objetos
 * 
 * Uma das estruturas mais comuns no desenvolvimento web é o array de objetos,
 * onde cada elemento do array representa um item com múltiplas propriedades.
 */

const pessoas = [
    {
        nome: "Yan",
        idade: 33
    },
    {
        nome: "Maria",
        idade: 8
    }
]

// Acessando o primeiro objeto do array (índice 0)
console.log("Primeira pessoa da lista:", pessoas[0])

const produtos = [
    {
        nome: "Veja",
        valor: 33,
        estoque: 8
    },
    {
        nome: "Omo",
        valor: 8,
        estoque: null
    }
]

/**
 * Manipulação de Arrays de Objetos
 */

// Adicionando um novo objeto ao array usando push()
produtos.push(
    {
        nome: "Biscoito",
        valor: 8,
        estoque: 15
    }
)

console.log("\n--- Listagem de Nomes de Produtos ---");
// Uso do laço 'for' para percorrer o array e acessar propriedades específicas de cada objeto
for (let i = 0; i < produtos.length; i++) {
    // Acessamos o objeto no índice 'i' e depois sua propriedade 'nome'
    console.log(`Produto ${i + 1}: ${produtos[i].nome}`)
}
