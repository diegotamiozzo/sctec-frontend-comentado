/**
 * Estudo de Switch Case: Controle de Fluxo e Agrupamento de Casos
 */

// --- Exemplo 1: Controle de Semáforo ---
const corSemaforo = "vermelho";

console.log("--- Semáforo ---");
switch (corSemaforo) {
    case "vermelho":
        console.log("Ação: PARE!");
        break; // O break impede que o código execute o próximo case
    case "amarelo":
        console.log("Ação: ATENÇÃO!");
        break;
    case "verde":
        console.log("Ação: SIGA!");
        break;
    default:
        console.log("Erro: Cor de semáforo desconhecida.");
}

// --- Exemplo 2: Agrupamento de Casos (Fall-through) ---
/**
 * Podemos agrupar vários casos que devem executar a mesma lógica.
 */
const frutaDesejada = "banana";

console.log("\n--- Estoque de Frutas ---");
switch (frutaDesejada) {
    case "maçã":
    case "uva":        
    case "banana":
        // Se for maçã, uva OU banana, cairá aqui.
        console.log(`A fruta '${frutaDesejada}' está disponível em nosso estoque.`);
        break;
    case "manga":
        console.log("A manga está em falta no momento.");
        break;
    default:
        console.log("Desculpe, não trabalhamos com essa fruta.");
}

/**
 * Nota Importante:
 * O uso de 'return' dentro de um switch só é válido se o switch estiver
 * dentro de uma função. Caso contrário, use 'break'.
 */
