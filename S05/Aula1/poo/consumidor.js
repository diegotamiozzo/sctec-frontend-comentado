/**
 * Estudo de POO: Classe Cliente
 * 
 * Demonstração de uma classe simples para representar um consumidor no sistema.
 */

class Cliente {
    constructor(nome, endereco) {
        this.nome = nome
        this.endereco = endereco
    }

    // Métodos que representam ações do cliente
    comprar() {
        console.log(`${this.nome} realizou uma compra.`)
    }

    trocar() {
        console.log(`${this.nome} solicitou uma troca.`)
    }

    devolver() {
        console.log(`${this.nome} solicitou uma devolução.`)
    }
}

// Instanciando (criando) um novo objeto a partir da classe Cliente
const cliente1 = new Cliente("Yan", "Av. Central, 100")

console.log("--- Ações do Cliente ---")
cliente1.comprar()
