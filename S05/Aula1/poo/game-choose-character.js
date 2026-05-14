/**
 * Estudo de POO: Seleção de Personagens (Fábrica Simples)
 * 
 * Este script demonstra como usar uma classe para instanciar objetos
 * dinamicamente e armazená-los em uma lista.
 */

class Personagem {    
    constructor(nome, caracteristicaPrincipal) {
        this.nome = nome;
        this.caracteristicaPrincipal = caracteristicaPrincipal;
    }

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

// Lista de personagens disponíveis para escolha
const personagens = [
    {
        nome: "Paladino",
        caracteristicaPrincipal: "força"
    }
]

// Lista onde guardaremos os personagens que o jogador criar/selecionar
const personagensCriados = []

/**
 * Função para selecionar e instanciar um personagem
 */
function selecionarPersonagem(personagem) {
    return new Personagem(personagem.nome, personagem.caracteristicaPrincipal)
}

// Simulação de seleção
const p = selecionarPersonagem(personagens[0])
personagensCriados.push(p)

// Testando o comportamento do personagem criado
console.log("--- Personagem em Ação ---")
personagensCriados[0].bater()
