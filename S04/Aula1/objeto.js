/**
 * Estudo de Objetos em JavaScript
 * 
 * Objetos são coleções de propriedades, onde cada propriedade é uma associação
 * entre um nome (ou chave) e um valor.
 */

const pessoa = {
    // chave: valor
    nome: "Yan",
    idade: 33,
    profissao: "Desenvolvedor",
    endereco: {
        rua: "Av. Central",
        bairro: "Centro",
        numero: "100"
    }
};

// 1. Acessando propriedades:
// Via notação de ponto (mais comum):
console.log(`Acesso via ponto: ${pessoa.nome} tem ${pessoa.idade} anos.`);

// Via notação de colchetes (útil quando a chave está em uma variável):
console.log(`Acesso via colchetes: ${pessoa["nome"]} mora no bairro ${pessoa["endereco"]["bairro"]}.`);

// 2. Modificando e Adicionando propriedades:
pessoa.idade = 34; // Modificando
pessoa["cor_olho"] = "castanho"; // Adicionando nova chave
console.log("\nApós modificações:", pessoa);

// 3. Removendo propriedades:
delete pessoa.endereco;
console.log("\nApós remover 'endereco':", pessoa);

// 4. Métodos úteis do Object:
console.log("\n--- Metadados do Objeto ---");
// Object.keys(): Retorna um array com os nomes das chaves
console.log("Chaves do objeto:", Object.keys(pessoa));

// Object.values(): Retorna um array com os valores
console.log("Valores do objeto:", Object.values(pessoa));

// Object.entries(): Retorna um array de arrays [chave, valor]
console.log("Entradas (chave/valor):", Object.entries(pessoa));

/**
 * Exemplo Prático: Removendo múltiplas propriedades dinamicamente
 */
const configuracao = {
    tema: "dark",
    notificacoes: true,
    cache: "100mb",
    logs: "debug"
};

const camposParaRemover = ["cache", "logs"];

camposParaRemover.forEach(campo => {
    delete configuracao[campo];
});

console.log("\nConfiguração limpa:", configuracao);
