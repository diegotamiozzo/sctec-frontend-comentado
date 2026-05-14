/**
 * Programação Orientada a Objetos (POO): Definição de Classe
 * 
 * Uma classe funciona como um "molde" para criar objetos.
 * Ela define quais propriedades (dados) e métodos (comportamentos)
 * os objetos criados a partir dela terão.
 */

class Personagem {
    // Propriedades da classe (Atributos)
    nome = ""
    caracteristicaPrincipal = ""

    /**
     * O constructor é um método especial chamado automaticamente
     * quando criamos uma nova instância da classe (usando 'new').
     */
    constructor(nome, caracteristicaPrincipal) {
        this.nome = nome
        this.caracteristicaPrincipal = caracteristicaPrincipal
    }

    // Métodos: Definem o que o objeto pode fazer
    correr() {
        console.log(`${this.nome} está correndo.`)
    }

    bater() {
        console.log(`${this.nome} está batendo em algo.`)
    }

    nadar() {
        console.log(`${this.nome} está nadando.`)
    }

    voar() {
        console.log(`${this.nome} está voando.`)
    }
}

// Exportamos a classe para que possa ser utilizada em outros arquivos
module.exports = Personagem
