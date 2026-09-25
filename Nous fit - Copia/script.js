// =======================================
// NOUS FIT
// Arquivo JavaScript Principal
// =======================================


// Mostra uma mensagem quando o site termina de carregar
console.log("Nous Fit carregada com sucesso!");


// Procura o primeiro botão da página
const botao = document.querySelector("button");


// Verifica se o botão existe
if (botao) {

    // Adiciona um evento de clique
    botao.addEventListener("click", function () {

        // Mostra um alerta
        alert("Bem-vindo à Nous Fit!");

    });

}


// =======================================
// Data e hora
// =======================================

// Cria um objeto com a data atual
const dataAtual = new Date();

// Mostra no console
console.log(dataAtual);


// =======================================
// Nome da empresa
// =======================================

const empresa = "Nous Fit";

console.log("Empresa:", empresa);


// =======================================
// Função de boas-vindas
// =======================================

function boasVindas(nome){

    alert("Olá, " + nome + "! Seja bem-vindo à Nous Fit.");

}

// Teste da função
// boasVindas("Kauã");


// =======================================
// Exemplo de cálculo de IMC
// =======================================

function calcularIMC(peso, altura){

    return peso / (altura * altura);

}

let imc = calcularIMC(75,1.73);

console.log("IMC:", imc.toFixed(2));


// =======================================
// Objetos
// =======================================

const usuario = {

    nome:"Kauã",

    idade:18,

    objetivo:"Hipertrofia"

};

console.log(usuario);


// =======================================
// Lista de exercícios
// =======================================

const exercicios = [

    "Supino",

    "Agachamento",

    "Terra",

    "Remada"

];

console.log(exercicios);


// Percorre toda a lista
for(let i=0; i<exercicios.length; i++){

    console.log(exercicios[i]);

}


// =======================================
// Mensagem Final
// =======================================

console.log("Sistema iniciado com sucesso.");