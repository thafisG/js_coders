// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, 
// mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontuacaoJogos = 100;

let pontuacaoUsuario = prompt("Diz ai tua pontuação chefe")

if (pontuacaoJogos >= pontuacaoUsuario) {
    console.log("Parabéns, você venceu!")
} else {
    console.log("Tente novamente para ganhar.")
}
