/**
 * Sistema de Cadastro para o SCTec - Estudo de Variáveis e Tipos
 * 
 * Este arquivo demonstra a declaração de variáveis usando 'let' e 'const',
 * além de tipos primitivos como string, number e null.
 */

// 'let' permite declarar variáveis que podem ter seu valor alterado posteriormente (mutáveis).
// Inicializamos com 'null' para indicar que o valor ainda será preenchido.
let nome = null;  // Tipo: null (representa a ausência intencional de um valor)
let idade = null; // Tipo: null
let email = null; // Tipo: null

// 'const' declara uma constante, cujo valor não pode ser reatribuído após a inicialização.
const estado = "SC"; // Tipo: string

/**
 * Fluxo de execução sugerido:
 * 1 - Solicitar o nome do usuário
 * 2 - Solicitar a idade do usuário
 * 3 - Solicitar o e-mail do usuário
 */
console.log("Bem-vindo ao sistema de cadastro do SCTec!");
console.log("Estado de atuação:", estado);

// Exemplo de como as variáveis seriam preenchidas:
nome = "Estudante";
idade = 25;
email = "estudante@sctec.com.br";

console.log(`Usuário ${nome} de ${idade} anos e email ${email} cadastrado com sucesso!`);
