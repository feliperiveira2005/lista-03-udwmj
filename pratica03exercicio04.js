const campoRaio = document.getElementById("raio");
const botaoCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

botaoCalcular.addEventListener("click", function () {
    const raio = Number(campoRaio.value);

    if (campoRaio.value === "" || raio < 0) {
        resultado.textContent = "Informe um raio válido.";
        return;
    }

    const area = Math.PI * Math.pow(raio, 2);
    resultado.textContent = `Área do círculo: ${area.toFixed(2)}`;
});
