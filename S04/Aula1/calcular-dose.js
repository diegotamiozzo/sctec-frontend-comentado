/**
 * Exercício Prático: Calculadora de Dose de Medicamento
 * 
 * Este script demonstra a integração de entrada de dados via terminal,
 * processamento matemático e saída formatada.
 */

const prompt = require('prompt-sync')();

console.log("--- Calculadora de Dosagem ---");

// Coleta de dados do usuário
const pesoInput = prompt("Digite o peso do paciente em kg:"); 
const doseInput = prompt("Digite a dose prescrita em mg/kg:");
const concentracaoInput = prompt("Digite a concentração do medicamento em mg/ml:");

// Conversão de strings para números decimais (float)
const peso = parseFloat(pesoInput);
const dose = parseFloat(doseInput);
const concentracao = parseFloat(concentracaoInput);

/**
 * Função para calcular o volume necessário
 * Fórmula: (Peso * Dose) / Concentração
 */
function calcularVolume(peso, dose, concentracao) {
  const volume = (peso * dose) / concentracao;
  return volume;
}

// Execução do cálculo
const volume = calcularVolume(peso, dose, concentracao);

// Exibição do resultado formatado com 2 casas decimais
console.log(`
----------------------------------
RESUMO DO CÁLCULO:
Peso: ${peso.toFixed(2)} kg
Dose: ${dose.toFixed(2)} mg/kg
Concentração: ${concentracao.toFixed(2)} mg/ml
----------------------------------
VOLUME A SER ADMINISTRADO: ${volume.toFixed(2)} ml
----------------------------------
`);
