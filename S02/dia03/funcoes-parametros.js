/**
 * Recapitulação: Funções e Parâmetros em JavaScript
 * 
 * Este arquivo consolida os conceitos aprendidos sobre funções:
 * - Declaração de funções
 * - Parâmetros obrigatórios e opcionais (default parameters)
 * - Retorno de valores (return)
 * - Template Strings
 */

// 1. Função com Retorno Numérico
function somar(n1, n2) {
    return n1 + n2;
}
console.log("Soma (5+4):", somar(5, 4));

// 2. Função com Parâmetro Opcional e Template String
function saudar(nome = 'Visitante') {
    console.log(`Olá, ${nome}!`);
}
saudar(); // Usa o padrão
saudar("Yan"); // Usa o argumento fornecido

// 3. Função com Múltiplos Parâmetros e Lógica de Exibição
function exibirPerfil(nome, idade, cidade = "Não informada") {
    console.log("--- DADOS DO PERFIL ---");
    console.log(`Nome: ${nome}`);
    console.log(`Idade: ${idade} anos`);
    console.log(`Cidade: ${cidade}`);
    console.log("-----------------------");
}
exibirPerfil("Yan", 25, "Florianópolis");

// 4. Função com Retorno Booleano (Lógica de Comparação)
function verificarMaioridade(idade) {
    return idade >= 18;
}
let idadeTeste = 15;
console.log(`A idade ${idadeTeste} é maior de idade?`, verificarMaioridade(idadeTeste));

/**
 * Dica: Funções pequenas e com responsabilidade única (como 'somar' ou 'verificarMaioridade')
 * são mais fáceis de testar e reutilizar em projetos maiores.
 */
