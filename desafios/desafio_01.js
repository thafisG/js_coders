// Desafios
// Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
// Declare uma variável chamada nome e atribua a ela o valor "Lua".
// Crie uma variável chamada idade e atribua a ela o valor 25.
// Defina uma variável numeroDeVendas e atribua a ela o valor 50.
// Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
// Exiba um alerta com o texto "Erro! Preencha todos os campos"
// Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
//Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
// Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
// Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

alerta('Boas Vindas ao nosso site!')
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = "Erro! Preencha todos os campos"

nome =  prompt('Qual seu nome?');
idade =  prompt('Qual sua idade?');

if (!nome || !idade) {
    console.log(mensagemDeErro);
} else {
    // Converte a idade para um número inteiro
    idade = parseInt(idade, 10);

    // Verifica se a idade é um número válido
    if (idade >= 18) {
        console.log("Pode tirar a habilitação!");
    } else {
        console.log("Você ainda não pode tirar a habilitação.");
    }
}
