/**
 * Estudo de POO: Herança
 * 
 * A herança permite que uma classe (filha) herde propriedades e métodos
 * de outra classe (pai/superclasse), promovendo o reuso de código.
 */

// Classe Pai (Superclasse)
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    comer() {
        console.log(`${this.nome} está se alimentando.`);
    }

    dormir() {
        console.log(`${this.nome} está dormindo... Zzz`);
    }
}

/**
 * Classe Filha (Subclasse)
 * 'extends' indica que Cachorro herda de Animal.
 */
class Cachorro extends Animal {       
    constructor(nome, raca) {
        // 'super' chama o construtor da classe pai (Animal)
        super(nome);
        this.raca = raca;
    }

    latir() {
        console.log(`${this.nome} (${this.raca}) diz: Au Au!`);
    }

    /**
     * Polimorfismo (Sobrescrita de Método):
     * Podemos redefinir um método da classe pai para que ele se comporte
     * de forma específica na classe filha.
     */
    comer() {
        console.log(`${this.nome} está comendo ração para cães.`);
    }
}

class Gato extends Animal {
    miar() {
        console.log(`${this.nome} diz: Miau!`);
    }
}

// Testando a Herança
console.log("--- Teste de Herança ---");

const meuDog = new Cachorro('Buzzy', 'Beagle');
meuDog.latir();
meuDog.comer();  // Método sobrescrito
meuDog.dormir(); // Método herdado da classe Animal

const meuGato = new Gato('Tom');
meuGato.miar();
meuGato.comer();  // Método original da classe Animal
meuGato.dormir(); // Método herdado

/**
 * Conceitos Chave:
 * - extends: Cria a relação de herança.
 * - super(): Necessário para inicializar a classe pai dentro da filha.
 * - Sobrescrita: Alterar o comportamento de um método herdado.
 */
