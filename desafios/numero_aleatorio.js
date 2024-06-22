let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute = prompt('Escolha um número entre 1 e 100');

while (chute != numeroSecreto) {
  if (chute < numeroSecreto) {
    console.log('O número secreto é maior que ' + chute);
  } else {
    console.log('O número secreto é menor que ' + chute);
  }
  chute = prompt('Tente novamente');
}

console.log('Parabéns, você acertou o número secreto!');
