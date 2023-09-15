var resultado1 = document.getElementById('resultado1');
var resultado2 = document.getElementById('resultado2');
var botao = document.getElementById("btnClick");
var boxResult = document.getElementById("boxResultado")

botao.addEventListener("click", function () {
    var select = document.getElementById('selectTemperatura');
    var opcaoSelecionada = select.value;
    var input = document.getElementById("inputValorTemperatura").value;
    var input2 = parseFloat(document.getElementById("inputValorTemperatura").value);

    if (input == "" || opcaoSelecionada == "placeholder-select") {
        alert("Preencha os valores");
    } else {
        boxResult.style.display = "flex";
        switch (opcaoSelecionada) {
            case 'celsius':
                resultado1.innerHTML = "Valor em graus Fahrenheit: " + ((input2 * 1.8) + 32);
                resultado2.innerHTML = "Valor em graus Kelvin: " + (input2 + 273);
                break;
            case 'fahrenheit':
                resultado1.innerHTML = "Valor em graus Celsius: " + ((input2 - 32) / 1.8);
                resultado2.innerHTML = "Valor em graus Kelvin: " + (((input2 - 32) / 1.8) + 273);
                break;
            case 'kelvin':
                resultado1.innerHTML = "Valor em graus Celsius: " + (input2 - 273);
                resultado2.innerHTML = "Valor em graus Fahrenheit: " + ((input2 - 273) * 1.8 + 32);
                break;
        }
    }
});