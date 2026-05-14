/**
 * Estudo de Arrays (Listas) em JavaScript
 * 
 * Arrays são estruturas de dados que permitem armazenar múltiplos valores
 * em uma única variável, acessíveis através de índices (começando em 0).
 */

const nomes = ["Maria", "João", "Ana", "Carlos", "João"];

console.log("Lista inicial:", nomes);

// 1. Propriedade length: Retorna o tamanho (quantidade de elementos) do array.
console.log("Quantidade de elementos:", nomes.length);

// 2. Acessando elementos por índice:
console.log("Primeiro nome:", nomes[0]); // Maria
console.log("Último nome:", nomes[nomes.length - 1]); // João

// 3. Método push(): Adiciona um elemento ao FINAL do array.
nomes.push("Vitor");
console.log("Após push('Vitor'):", nomes);

// 4. Método pop(): Remove o ÚLTIMO elemento do array.
let removido = nomes.pop();
console.log(`Elemento removido pelo pop: ${removido}`);
console.log("Após pop():", nomes);

// 5. Método filter(): Cria um novo array com elementos que passam em um teste.
// Exemplo: Contar quantas vezes o nome "João" aparece na lista.
const joaoLista = nomes.filter(nome => nome === "João");
console.log("Lista apenas com 'João':", joaoLista);
console.log("Total de Joões encontrados:", joaoLista.length);

/**
 * Outros métodos úteis para estudo:
 * - shift(): Remove o primeiro elemento.
 * - unshift(): Adiciona ao início.
 * - indexOf(): Encontra o índice de um elemento.
 * - includes(): Verifica se um elemento existe no array.
 */
