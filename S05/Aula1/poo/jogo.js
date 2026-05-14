/**
 * Estudo de POO: Integração de Classes
 * 
 * Este arquivo demonstra como importar uma classe definida em outro arquivo
 * e utilizá-la para criar instâncias.
 */

const Personagem = require('./personagem')

console.log("--- Inicializando Jogo ---")

// Criando uma nova instância da classe Personagem
const personagem1 = new Personagem("Guerreiro", "força")

// Executando um método da instância
personagem1.bater()
