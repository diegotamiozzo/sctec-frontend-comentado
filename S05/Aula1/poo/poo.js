/**
 * Estudo de Programação Orientada a Objetos (POO): Classes
 * 
 * Classes são "moldes" para criar objetos. Elas encapsulam dados (propriedades)
 * e comportamentos (métodos) em uma única estrutura.
 */

class Personagem {  
    // Propriedades da classe (campos)
    nome = "";
    caracteristicaPrincipal = ""; 

    /**
     * O constructor é um método especial chamado automaticamente 
     * quando criamos uma nova instância da classe com 'new'.
     */
    constructor(nome, caracteristicaPrincipal = "força") {
        // 'this' refere-se à instância específica que está sendo criada.
        this.nome = nome;
        this.caracteristicaPrincipal = caracteristicaPrincipal;
    }

    // Métodos: Definem o que o objeto pode fazer
    correr() {
        console.log(`${this.nome} está correndo velozmente!`);
    }

    atacar() {
        console.log(`${this.nome} atacou usando sua ${this.caracteristicaPrincipal}.`);
    }

    exibirStatus() {
        console.log(`--- Status: ${this.nome} ---`);
        console.log(`Característica: ${this.caracteristicaPrincipal}`);
        console.log("---------------------------");
    }
}

// Instanciando objetos (criando personagens a partir do molde)
const heroi1 = new Personagem("Guerreiro Alfa", "Super Força");
const heroi2 = new Personagem("Mago Beta", "Magia de Fogo");

console.log("--- Início do Jogo ---");
heroi1.exibirStatus();
heroi2.exibirStatus();

heroi1.correr();
heroi2.atacar();

/**
 * Por que usar Classes em vez de objetos literais?
 * 1. Padronização: Todos os personagens terão as mesmas propriedades e métodos.
 * 2. Reutilização: Você escreve a lógica uma vez e cria milhares de instâncias.
 * 3. Manutenção: Se precisar mudar o método 'correr', muda em um só lugar (na classe).
 */
