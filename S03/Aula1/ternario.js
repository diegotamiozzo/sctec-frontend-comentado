/**
 * Estudo do Operador Ternário
 * 
 * O operador ternário é uma forma compacta de escrever um 'if...else'.
 * Sintaxe: (condição) ? (valor_se_verdadeiro) : (valor_se_falso)
 */

const idadeUsuario = 20;

// Exemplo 1: Atribuição de valor baseada em condição
const statusIdade = (idadeUsuario >= 18) ? 'Maior de idade' : 'Menor de idade';
console.log(`O usuário é: ${statusIdade}`);

// Exemplo 2: Uso dentro de uma Arrow Function
/**
 * Esta função recebe a idade e executa um console.log diferente
 * dependendo da condição.
 */
const verificarAcesso = (idade) => 
    (idade >= 18) 
        ? console.log('Acesso Permitido: Usuário é maior de idade.') 
        : console.log('Acesso Negado: Usuário é menor de idade.');

console.log("--- Teste de Acesso ---");
verificarAcesso(20);
verificarAcesso(15);

/**
 * Quando usar o Ternário?
 * - Para atribuições simples de variáveis.
 * - Para retornos rápidos em funções.
 * - Evite ternários aninhados (um dentro do outro), pois tornam o código difícil de ler.
 */
