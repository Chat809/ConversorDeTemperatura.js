const resultado1 = document.getElementById('resultado1') as HTMLInputElement;
const resultado2 = document.getElementById('resultado2') as HTMLInputElement;
const botao = document.getElementById("btnClick")!;
const boxResult = document.getElementById("boxResultado")!;

botao.addEventListener("click", () => {
    const select = document.getElementById('selectTemperatura') as HTMLSelectElement;
    const opcaoSelecionada = select.value;
    const inputValorTemperatura = parseFloat((document.getElementById("inputValorTemperatura") as HTMLInputElement).value);

    if (!opcaoSelecionada || opcaoSelecionada === "placeholder-select" || isNaN(inputValorTemperatura)) {
        alert("Preencha os valores");
    } else {
        boxResult.style.display = "flex";
        let result1: number, result2: number;

        switch (opcaoSelecionada) {
            case 'celsius':
                result1 = inputValorTemperatura * 1.8 + 32;
                result2 = inputValorTemperatura + 273;
                break;
            case 'fahrenheit':
                result1 = (inputValorTemperatura - 32) / 1.8;
                result2 = (inputValorTemperatura - 32) / 1.8 + 273;
                break;
            case 'kelvin':
                result1 = inputValorTemperatura - 273;
                result2 = (inputValorTemperatura - 273) * 1.8 + 32;
                break;
            default:
                result1 = 0;
                result2 = 0;
                break;
        }

        resultado1.value = `${result1}`;
        resultado2.value = `${result2}`;
    }
});