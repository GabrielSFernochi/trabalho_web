function verResposta()
{
    const gabarito = "b";
            const selecionada = document.querySelector('input[name="p1"]:checked');
            const resultado = document.getElementById("resultado1");

            if (!selecionada) {
                resultado.textContent = "Nenhuma alternativa selecionada!";
            } else if (selecionada.id === "p1" + gabarito) {
                resultado.textContent = "Correta!";
            } else {
                resultado.textContent = "Errada!";
            }
}

function verResposta2()
{
    const gabarito = "b";
            const selecionada = document.querySelector('input[name="p2"]:checked');
            const resultado = document.getElementById("resultado2");

            if (!selecionada) {
                resultado.textContent = "Nenhuma alternativa selecionada!";
            } else if (selecionada.id === "p2" + gabarito) {
                resultado.textContent = "Correta!";
            } else {
                resultado.textContent = "Errada!";
            }
}

function verResposta3()
{
    const gabarito = "a";
            const selecionada = document.querySelector('input[name="p3"]:checked');
            const resultado = document.getElementById("resultado3");

            if (!selecionada) {
                resultado.textContent = "Nenhuma alternativa selecionada!";
            } else if (selecionada.id === "p3" + gabarito) {
                resultado.textContent = "Correta!";
            } else {
                resultado.textContent = "Errada!";
            }
}

function verResposta4()
{
    const gabarito = "e";
            const selecionada = document.querySelector('input[name="p4"]:checked');
            const resultado = document.getElementById("resultado4");

            if (!selecionada) {
                resultado.textContent = "Nenhuma alternativa selecionada!";
            } else if (selecionada.id === "p4" + gabarito) {
                resultado.textContent = "Correta!";
            } else {
                resultado.textContent = "Errada!";
            }
}

function verResposta5()
{
    const gabarito = "c";
            const selecionada = document.querySelector('input[name="p5"]:checked');
            const resultado = document.getElementById("resultado5");

            if (!selecionada) {
                resultado.textContent = "Nenhuma alternativa selecionada!";
            } else if (selecionada.id === "p5" + gabarito) {
                resultado.textContent = "Correta!";
            } else {
                resultado.textContent = "Errada!";
            }
}

function verResposta6()
{
    const gabarito = "a";
            const selecionada = document.querySelector('input[name="p6"]:checked');
            const resultado = document.getElementById("resultado6");

            if (!selecionada) {
                resultado.textContent = "Nenhuma alternativa selecionada!";
            } else if (selecionada.id === "p6" + gabarito) {
                resultado.textContent = "Correta!!! Você ganhou 100 pontos!!!";
            } else {
                resultado.textContent = "Errada! Vá estudar!";
            }
}

function verPontuacao() {
    let pontos = 0;

    const resposta = document.querySelector('input[name="p1"]:checked');
    if (resposta && resposta.id === "p1b") {
        pontos += 1;
    }

    const resposta2 = document.querySelector('input[name="p2"]:checked');
    if (resposta2 && resposta2.id === "p2b") {
        pontos += 1;
    }

    const resposta3 = document.querySelector('input[name="p3"]:checked');
    if (resposta3 && resposta3.id === "p3a") {
        pontos += 1;
    }

    const resposta4 = document.querySelector('input[name="p4"]:checked');
    if (resposta4 && resposta4.id === "p4e") {
        pontos += 1;
    }

    const resposta5 = document.querySelector('input[name="p5"]:checked');
    if (resposta5 && resposta5.id === "p5c") {
        pontos += 1;
    }

    const resposta6 = document.querySelector('input[name="p6"]:checked');
    if (resposta6 && resposta6.id === "p6a") {
        pontos += 100;
    }


    const pontuacaoFixa = document.getElementById("pontuacaoFixa");
    pontuacaoFixa.textContent = `Pontuação: ${pontos} / 5`;
}
