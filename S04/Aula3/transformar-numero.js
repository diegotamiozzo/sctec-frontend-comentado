/**
 * Estudo de Conversão de Tipos: String para Number
 * 
 * Em JavaScript, dados vindos de formulários ou do terminal chegam como String.
 * Para realizar cálculos, precisamos convertê-los para Number.
 */

const numeroStr = "10"
console.log("Tipo original:", typeof numeroStr) // string

// A função Number() tenta converter o valor para um número
const numeroInteiro = Number(numeroStr)
console.log("Tipo após conversão:", typeof numeroInteiro) // number
console.log("Valor convertido:", numeroInteiro)

/**
 * Validação de Conversão
 * 
 * Se a conversão falhar (ex: converter "abc"), o resultado será NaN (Not a Number).
 * Podemos verificar isso usando Number.isNaN().
 */
if (Number.isNaN(numeroInteiro)) {
    console.log("Valor inválido, coloque apenas números.");
} else {
    console.log("Sucesso: Conversão realizada com êxito.");
}
