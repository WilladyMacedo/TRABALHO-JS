
function calcular() {
  const n = parseInt(document.getElementById("n").value);
  const k = parseInt(document.getElementById("k").value);

  if (isNaN(n) || isNaN(k)) {
    alert("Digite valores válidos para n e k");
    return;
  }

  const resultado = combinacao(n, k);

  document.getElementById("resultado").innerHTML = `O número de combinações de ${n} elementos tomados ${k} a ${k} é: ${resultado}`;
}

function combinacao(n, k) {
  if (k > n) {
    return 0;
  }
  if (k === 0 || k === n) {
    return 1;
  }
  return combinacao(n - 1, k - 1) + combinacao(n - 1, k);
}

function fatorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * fatorial(n - 1);
}

const button = document.getElementById("botao");
button.addEventListener("click", calcular);
