const palavras = ["banana", "maçã", "laranja", "uva", "morango"];
let palavraSecreta = "";
let letrasUsadas = [];
let acertos = 0;
let erros = 0;

function jogar(letra) {
    letrasUsadas.push(letra);

    let palavraComMascara = "";
    for (let i = 0; i < palavraSecreta.length; i++) {
        if (letrasUsadas.includes(palavraSecreta[i])) {
            palavraComMascara += palavraSecreta[i];
        } else {
            palavraComMascara += "_";
        }
    }

    document.getElementById('palavra-secreta').textContent = palavraComMascara;
    document.getElementById('letras-usadas').textContent = `Letras usadas: ${letrasUsadas.join(', ')}`;
}