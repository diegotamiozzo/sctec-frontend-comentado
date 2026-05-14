/**
 * Estudo de POO: Classe Veículo
 * 
 * Demonstração de controle de estado (velocidade) através de métodos.
 */

class Veiculo {
    velocidade = 0
    constructor() {        
    }

    acelerar() {
        this.velocidade += 1
        console.log(`Acelerando... Velocidade: ${this.velocidade}`)
    }

    frear() {
        this.velocidade -= 1
        console.log(`Freando... Velocidade: ${this.velocidade}`)
    }
}

const veiculo1 = new Veiculo()

/**
 * Exemplo de lógica de controle (Simulação)
 * Em um jogo, poderíamos usar eventos de teclado:
 * if (KEY.W) { veiculo1.acelerar() }
 */

console.log("--- Testando Veículo ---")
veiculo1.acelerar()
veiculo1.acelerar()
veiculo1.frear()
