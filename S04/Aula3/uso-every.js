/**
 * Estudo de Métodos de Array: every() e some()
 * 
 * O método every() testa se TODOS os elementos do array passam pelo teste
 * implementado pela função fornecida. Retorna um valor booleano.
 */

const numeros = [1, 2, 3, 4, 5];

// --- Exemplo 1: Verificação de Números Positivos ---
/**
 * A condição: Cada número deve ser maior que zero.
 */
const todosPositivos = numeros.every(num => num > 0);

console.log(`Todos os números são positivos? ${todosPositivos ? "Sim" : "Não"}`);

// --- Exemplo 2: Validação de Formulário (Simulação) ---
const camposFormulario = [
    { campo: "nome", preenchido: true },
    { campo: "email", preenchido: true },
    { campo: "senha", preenchido: false }
];

/**
 * O formulário só é válido se TODOS os campos estiverem preenchidos.
 */
const formularioValido = camposFormulario.every(item => item.preenchido);

console.log("\n--- Validação de Formulário ---");
if (formularioValido) {
    console.log("Sucesso: Todos os campos estão preenchidos.");
} else {
    console.log("Erro: Existem campos obrigatórios vazios.");
}

// --- Exemplo 3: Diferença para o método some() ---
/**
 * some(): Retorna true se PELO MENOS UM elemento passar no teste.
 */
const temAlgumNegativo = numeros.some(num => num < 0);
console.log(`\nTem algum número negativo? ${temAlgumNegativo ? "Sim" : "Não"}`);

/**
 * Dica de Estudo:
 * - every() -> Lógica AND (E): Tudo deve ser true.
 * - some()  -> Lógica OR (OU): Pelo menos um deve ser true.
 */
