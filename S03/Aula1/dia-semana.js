/**
 * Estudo de Estrutura de Seleção: Switch Case
 * 
 * O 'switch' é uma alternativa ao 'if...else if' quando temos múltiplas
 * condições baseadas em um único valor.
 */

/**
 * Converte um número no dia da semana correspondente.
 * @param {number} dia - Número de 1 a 7.
 * @returns {string} - Nome do dia ou mensagem de erro.
 */
function obterDiaSemana(dia = 0) {
    switch (dia) {
        case 1:
            return 'Domingo';
        case 2:
            return 'Segunda-feira';
        case 3: 
            return 'Terça-feira';
        case 4:
            return 'Quarta-feira';
        case 5:
            return 'Quinta-feira';
        case 6:
            return 'Sexta-feira';
        case 7:
            return 'Sábado';
        default:
            // O 'default' é executado se nenhum dos casos acima for atendido.
            return 'Dia inválido (escolha entre 1 e 7)';
    }   
}

console.log("Dia 2:", obterDiaSemana(2));
console.log("Dia 7:", obterDiaSemana(7));
console.log("Dia 9:", obterDiaSemana(9));

/**
 * Nota de Estudo:
 * Quando usamos 'return' dentro de um 'case', não precisamos do comando 'break',
 * pois o 'return' já encerra a execução da função completamente.
 * Se fosse apenas um console.log, o 'break' seria obrigatório para evitar
 * que o código continuasse executando os casos seguintes.
 */
