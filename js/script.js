var form = document.querySelector("form");
var peso = document.querySelector("#peso");
var altura = document.querySelector("#altura");
var res = document.querySelector(".res");
var btn = document.querySelector("#btnCalcular");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    var pesoValue = parseFloat(peso.value);
    var alturaValue = parseFloat(altura.value) ;

    if (!pesoValue || !alturaValue) {
        res.innerHTML = "ERRO: Preencha todos os campos corretamente!";
        return;
    }

    var IMC = (pesoValue / (alturaValue ** 2)).toFixed(2);
    var classificacao = "";

    if (IMC < 17) {
        classificacao = "Muito abaixo do peso";
    } else if (IMC >= 17 && IMC <= 18.49) {
        classificacao = "Abaixo do peso";
    } else if (IMC >= 18.5 && IMC <= 24.99) {
        classificacao = "Peso normal";
    } else if (IMC >= 25 && IMC <= 29.99) {
        classificacao = "Acima do peso";
    } else if (IMC >= 30 && IMC <= 34.99) {
        classificacao = "Obesidade 1";
    } else if (IMC >= 35 && IMC <= 39.99) {
        classificacao = "Obesidade 2 (severa)";
    } else {
        classificacao = "Obesidade 3 (mórbida)";
    }

    res.innerHTML = `
        <div class="status">
            <p>Peso</p>
            <p>Altura</p>
            <p>IMC</p>
            <p>Resultado</p>
        </div>
        <div class="parametro">
            <p>${pesoValue}</p>
            <p>${alturaValue.toFixed(2)}</p>
            <p>${IMC}</p>
            <p>${classificacao}</p>
        </div>
    `;

    peso.value = "";
    altura.value = "";
    btn.textContent = "Refazer";
});
