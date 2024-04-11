function solicitarData() {
  let dataAtual = new Date();
  let dataDigitada = prompt("Insira uma data no formato dd/mm/aaaa:");

  let padraoData = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!padraoData.test(dataDigitada)) {
      alert("Formato de data inválido. Por favor, insira no formato dd/mm/aaaa.");
      solicitarData(); 
      return;
  }


  let partesData = dataDigitada.split("/");
  let dataObjeto = new Date(partesData[2], partesData[1] - 1, partesData[0]);

  let diferencaEmMilisegundos = dataObjeto - dataAtual;
  let diferencaEmDias = Math.floor(diferencaEmMilisegundos / (1000 * 60 * 60 * 24));
  let diferencaEmMeses = Math.floor(diferencaEmDias / 30.44); // 
  let diferencaEmAnos = Math.floor(diferencaEmMeses / 12);

  document.getElementById("resultado").innerHTML = `Faltam aproximadamente ${diferencaEmDias} dias, ${diferencaEmMeses} meses e ${diferencaEmAnos} anos para a data ${dataDigitada}.`;
}

function mudarAparencia() {
let agora = new Date();
let hora = agora.getHours();

if (hora >= 6 && hora < 12) {
    document.bgColor = "white";
    document.body.style.color = "black";
} else if (hora >= 12 && hora < 18) {
    document.bgColor = "pink";
    document.body.style.color = "black";
} else if (hora >= 18 && hora < 24) {
    document.bgColor = "dark";
    document.body.style.color = "white";
} else {
    document.bgColor = "blue";
    document.body.style.color = "white";
}
}
mudarAparencia();

function solicitarData() {
let dataAtual = new Date();
let dataDigitada = prompt("Insira uma data no formato dd/mm/aaaa:");

let padraoData = /^\d{2}\/\d{2}\/\d{4}$/;
if (!padraoData.test(dataDigitada)) {
    alert("Formato de data inválido. Por favor, insira no formato dd/mm/aaaa.");
    solicitarData(); // Solicita novamente a data
    return;
}

let partesData = dataDigitada.split("/");
let dataObjeto = new Date(partesData[2], partesData[1] - 1, partesData[0]);


let diferencaEmMilisegundos = dataObjeto - dataAtual;
let diferencaEmDias = Math.floor(diferencaEmMilisegundos / (1000 * 60 * 60 * 24));
let diferencaEmMeses = Math.floor(diferencaEmDias / 30.44); // 
let diferencaEmAnos = Math.floor(diferencaEmMeses / 12);

document.getElementById("resultado").innerHTML = `Faltam aproximadamente ${diferencaEmDias} dias, ${diferencaEmMeses} meses e ${diferencaEmAnos} anos para a data ${dataDigitada}.`;
}

function mudarAparencia() {
let agora = new Date();
let hora = agora.getHours();

if (hora >= 6 && hora < 12) {
  document.bgColor = "white";
  document.body.style.color = "black";
} else if (hora >= 12 && hora < 18) {
  document.bgColor = "pink";
  document.body.style.color = "black";
} else if (hora >= 18 && hora < 24) {
  document.bgColor = "dark";
  document.body.style.color = "white";
} else {
  document.bgColor = "blue";
  document.body.style.color = "white";
}
}
mudarAparencia();