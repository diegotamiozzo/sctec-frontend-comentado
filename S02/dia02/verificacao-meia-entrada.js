/**
 * Estudo de Lógica: Verificação de Meia-Entrada
 * 
 * Este exemplo demonstra o uso do operador lógico OR (||).
 * A condição é verdadeira se o usuário for estudante OU se for idoso.
 */

let estudante = false;
let idoso = true;

/**
 * Refatoração: Em JavaScript, não precisamos comparar explicitamente com 'true'
 * se a variável já for um booleano.
 * 
 * 'if (estudante)' é equivalente a 'if (estudante === true)'
 */
if (estudante || idoso) {
    // Entra aqui se pelo menos uma das variáveis for verdadeira
    console.log("Benefício: Meia-entrada concedida.");
    
    if (estudante && idoso) {
        console.log("Nota: Você se enquadra em ambas as categorias!");
    } else if (estudante) {
        console.log("Motivo: Categoria Estudante.");
    } else {
        console.log("Motivo: Categoria Idoso.");
    }
} else {
    // Entra aqui apenas se AMBAS forem falsas
    console.log("Benefício: Não concedido. Valor integral da entrada.");
}
