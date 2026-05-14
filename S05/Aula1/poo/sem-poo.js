/**
 * Estudo de Paradigmas: Programação sem POO
 * 
 * Este arquivo demonstra como organizamos dados e funções antes de usar
 * o paradigma de Orientação a Objetos, destacando a repetição de código.
 */

const meuNumero = 33

function somar(a, b) {
    return a + b
}

somar(5, 3)

const objetoPessoa = {
    nome: "Yan",
    idade: 33,
    // ...
} 

const meuArray = ["maçã", "laranja", "kiwi"]

/**
 * Problema: Repetição de estrutura em objetos literais.
 * Precisamos repetir sempre o mesmo código na declaração de objetos.
 * Se precisarmos de 100 pessoas, teríamos que repetir os métodos em cada uma.
 */
const pessoas = [
    {
        nome: "Yan",
        idade: 33,
        nascer: () => {},
        votar: () => {},
        presa: () => {},
        morrer: () => {}
    },
    {
        nome: "João",
        idade: 17,
        nascer: () => {},
        votar: () => {},
        presa: () => {},
        morrer: () => {}
    },
    {
        nome: "Maria",
        idade: 47,
        nascer: () => {},
        votar: () => {},
        presa: () => {},
        morrer: () => {}
    }
]

console.log("--- Listagem de Pessoas (Sem POO) ---")
pessoas.forEach(p => console.log(`${p.nome}, ${p.idade} anos.`))
