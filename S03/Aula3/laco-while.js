/**
 * Estudo de Laços de Repetição: While (Enquanto)
 * 
 * O laço 'while' executa um bloco de código ENQUANTO uma condição for verdadeira.
 * É ideal quando não sabemos exatamente quantas vezes o loop irá rodar.
 */

// --- Exemplo 1: Contador Simples ---
let contador = 1;

console.log("--- Início do Contador ---");
while (contador <= 5) {
    console.log(`Execução número: ${contador}`);
    
    // IMPORTANTE: Sempre incremente a variável de controle para evitar loop infinito!
    contador++;
}

// --- Exemplo 2: Validação de Entrada (Simulação) ---
/**
 * O while é muito usado para forçar o usuário a fornecer um dado válido.
 */
const prompt = require("prompt-sync")();

let senhaDigitada = "";
const SENHA_CORRETA = "1234";

console.log("\n--- Sistema de Login ---");

// Enquanto a senha digitada for diferente da correta, continue perguntando.
// Nota: Este código só funcionará se você tiver o 'prompt-sync' instalado.
/*
while (senhaDigitada !== SENHA_CORRETA) {
    senhaDigitada = prompt("Digite a senha secreta: ");
    
    if (senhaDigitada !== SENHA_CORRETA) {
        console.log("Senha incorreta! Tente novamente.");
    }
}

console.log("Acesso concedido!");
*/

/**
 * Diferença entre While e For:
 * - Use FOR quando souber o limite (ex: percorrer um array de 10 itens).
 * - Use WHILE quando o limite depender de uma condição externa (ex: esperar o usuário digitar 'sair').
 */
