const campoCapital = document.getElementById("capital");
const campoTaxa = document.getElementById("taxa");
const campoTempo = document.getElementById("tempo");
const botaoCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

botaoCalcular.addEventListener("click", function () {
    const capital = Number(campoCapital.value);
    const taxaPercentual = Number(campoTaxa.value);
    const tempo = Number(campoTempo.value);

    if (
        campoCapital.value === "" ||
        campoTaxa.value === "" ||
        campoTempo.value === "" ||
        capital < 0 ||
        tempo < 0
    ) {
        resultado.textContent = "Preencha todos os campos com valores válidos.";
        return;
    }

    const taxa = taxaPercentual / 100;
    const montante = capital * Math.pow(1 + taxa, tempo);

    resultado.textContent = `Montante final: R$ ${montante.toFixed(2)}`;
});
