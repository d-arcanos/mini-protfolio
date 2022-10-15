// Passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML

const abas = document.querySelectorAll(".aba");

// Passo 2 - dar um jeito de identificar o clique no elemento da aba 
abas.forEach(aba => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba)

        mostrarInforcaoesDaAba(aba)

    });
});

function selecionarAba(aba){
// Passo 3 - quando o usuário clicar, desmarcar a aba seleconada 
    const abaSelecionada = document.querySelector(".aba.selecionado");

    abaSelecionada.classList.remove("selecionado");
// Passo 4 - marar a aba clicada como selecionada
    aba.classList.add("selecionado");
}

function mostrarInforcaoesDaAba(aba){
    // Passo 5 - esconder o conteúdo anterior

    const informacaoSelecionada = document.querySelector(".informacao.selecionado");

    informacaoSelecionada.classList.remove("selecionado");

// Passo 6 - mostrar o conteúdo da aba selecionada

    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);

    informacaoASerMostrada.classList.add("selecionado");
}




