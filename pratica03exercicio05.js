const campoRaio = document.getElementById("raio");
const botaoCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

botaoCalcular.addEventListener("click", function () {
    const raio = Number(campoRaio.value);

    if (campoRaio.value === "" || raio < 0) {
        resultado.textContent = "Informe um raio válido.";
        return;
    }

    const volume = (4 / 3) * Math.PI * Math.pow(raio, 3);
    resultado.textContent = `Volume da esfera: ${volume.toFixed(2)}`;
});
