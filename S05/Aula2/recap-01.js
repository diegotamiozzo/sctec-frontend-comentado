/**
 * Recapitulação de POO: Classes, Atributos e Métodos
 * 
 * Este arquivo revisa a criação de classes para modelar produtos de um sistema.
 */

class Produto {
    nome = ''
    codigoBarras = ''
    preco = 0

    constructor(nome, codigoBarras, preco) {
        this.nome = nome
        this.codigoBarras = codigoBarras
        this.preco = preco
    }

    /**
     * Método para atualizar o preço do produto
     */
    mudarPreco(novoPreco) {
        this.preco = novoPreco
    }

    vender() {
        /* Exemplo: Chamar uma API enviando o código de barras e a quantidade vendida */
        console.log(`O produto ${this.nome} (${this.codigoBarras}) foi vendido por R$ ${this.preco.toFixed(2)}.`)
    }

    trocar() {
        // Lógica de troca a ser implementada
    }
}

console.log("--- Gerenciamento de Produtos ---");

/** Construindo instâncias de produtos */
const produtoA = new Produto("Biscoito Trakinas", "100900", 4.35)
const produtoB = new Produto("Biscoito Maizena", "100901", 2.99)

// Operações com os objetos
produtoB.mudarPreco(3.99)
produtoA.vender()
produtoB.vender()

/**
 * Comparação: Objeto Literal vs Classe
 * 
 * Antes das classes, usávamos funções e objetos literais:
 * 
 * function cadastrarProduto(nome, codigoBarras) {
 *     // lógica de cadastro
 * }
 */
