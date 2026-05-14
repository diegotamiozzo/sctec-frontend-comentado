/**
 * Estudo de Métodos de String: toLocaleLowerCase() e toLocaleUpperCase()
 * 
 * Estes métodos são utilizados para converter strings para letras minúsculas
 * ou maiúsculas, respeitando as configurações regionais (locale).
 */

const nome1 = "Yan"
const nome2 = "yan"
const nome3 = "YAN"

console.log("--- Conversão para Minúsculas (Lower Case) ---");
// toLocaleLowerCase() converte todos os caracteres para minúsculo
console.log(nome1.toLocaleLowerCase())
console.log(nome2.toLocaleLowerCase())
console.log(nome3.toLocaleLowerCase())

console.log("\n--- Conversão para Maiúsculas (Upper Case) ---");
// toLocaleUpperCase() converte todos os caracteres para maiúsculo
console.log(nome1.toLocaleUpperCase())
console.log(nome2.toLocaleUpperCase())
console.log(nome3.toLocaleUpperCase())
