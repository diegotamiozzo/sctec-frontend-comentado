/**
 * Estudo de Funções: Retorno de Valores
 * 
 * A palavra-chave 'return' finaliza a execução da função e envia um valor de volta
 * para quem a chamou.
 */

/**
 * Verifica se uma idade corresponde à maioridade.
 * @param {number} idade 
 * @returns {boolean} - Retorna true se for maior ou igual a 18, caso contrário false.
 */
function ehMaiorDeIdade(idade) {
    // A expressão (idade >= 18) já resulta em um valor booleano.
    // Podemos retornar o resultado dessa comparação diretamente.
    return idade >= 18;
}

// Armazenando o resultado em uma variável
let resultado1 = ehMaiorDeIdade(20);
console.log(`Idade 20 é maior de idade? ${resultado1}`); // true

// Usando o retorno diretamente no console.log
console.log(`Idade 15 é maior de idade? ${ehMaiorDeIdade(15)}`); // false

// Exemplo de uso em uma estrutura condicional
let minhaIdade = 17;
if (ehMaiorDeIdade(minhaIdade)) {
    console.log("Acesso liberado.");
} else {
    console.log("Acesso restrito a maiores de 18 anos.");
}
