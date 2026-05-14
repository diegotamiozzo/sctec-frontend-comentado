/**
 * Estudo de POO: Herança e Polimorfismo
 * 
 * Este exemplo demonstra como classes filhas podem herdar comportamentos
 * da classe pai e sobrescrever métodos para implementar comportamentos específicos.
 * 
 * REGRAS do programa:
 * 1 - Classe Funcionario com nome e salario
 * 2 - Classe Diretor herdando de Funcionario
 * 3 - O Diretor tem um PLR de 10x o seu salário
 * 4 - O Funcionario recebe o próprio salário como PLR
 * 5 - Apenas o Diretor tem um bônus mensal fixo
 */

class Funcionario {
    nome = ''
    salario = 0
    constructor(nome, salario) {
        this.nome = nome
        this.salario = salario
    }

    verRendimentoMes() {
        console.log(`O funcionário ${this.nome} tem a receber R$ ${this.salario.toFixed(2)}`)
    }

    distribuirPLR() {
        console.log(`O funcionário ${this.nome} vai receber R$ ${this.salario.toFixed(2)} de PLR`)
    }
}

/**
 * Classe Diretor herda de Funcionario (Herança)
 */
class Diretor extends Funcionario {   
    bonusMensal = 0

    constructor(nome, salario, bonus) {
        // super() chama o construtor da classe pai (Funcionario)
        super(nome, salario)
        this.bonusMensal = bonus
    }
   
    // Sobrescrita de método (Polimorfismo)
    distribuirPLR() {
        console.log(`O diretor ${this.nome} vai receber R$ ${(this.salario * 10).toFixed(2)} de PLR`)
    }

    verRendimentoMes(mes) {
        console.log(`O diretor ${this.nome} tem a receber R$ ${(this.salario + this.bonusMensal).toFixed(2)}`)
    }
}

// Classe PJ também herda de Funcionario
class PJ extends Funcionario {
    cnpj = ''
    constructor(nome, salario, cnpj) {
        super(nome, salario)
        this.cnpj = cnpj
    }
}

console.log("--- Gestão de Funcionários ---")

const funcionarioA = new Funcionario('João', 9000)
const diretorA = new Diretor('Ricardo', 25000, 5000)
const autonomoPJ = new PJ("Carla", 12000, '100.00.000')

// Testando os métodos
funcionarioA.verRendimentoMes()
diretorA.verRendimentoMes(12)
diretorA.distribuirPLR()
