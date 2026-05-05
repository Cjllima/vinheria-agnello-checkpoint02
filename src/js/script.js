let contador = 0;
let contaVinhosEstoqueBaixo = 0;
let safraAntiga = 9999;
let nomeAntigo = ""; 

function validarCampo (mensagem) {
    let valor;

    while (true) {
        valor = prompt(mensagem);

        if (valor === null || !valor.trim()) {
            alert("Campo Obrigatório");
        } else {
            return valor;
        };
    };
};

function validarAno (ano) {
    let valor;

    while (true) {
        valor = Number(prompt(ano));

        if (!Number.isInteger(valor) || valor < 1000 || valor > 2026) {
            alert("Ano invalido");
        } else {
            return valor;
        };
    };
};

function validarQuantidade (numero) {
    let valor;

    while (true) {
        valor = Number(prompt(numero));

        if (!Number.isInteger(valor) || valor <= 0) {
            alert("Quantidade invalida");
        } else {
            return valor;
        };
    };
};

function verificarEstoque (quantidade) {
    return quantidade < 5;
};

function classificarVinho (safra) {
    let anoAtual = 2026;
    let idade = anoAtual - safra;

    if (idade <= 3) {
        return "Jovem";
    } else if (idade <= 7) {
        return "Amadurecido";
    } else {
        return "Antigo";
    };
};

while (true) {
    let validacao = prompt("Gostaria de cadastrar um vinho? \n1.Sim\n2.Sair");
    validacao = validacao ? validacao.toLowerCase() : "";

    if (validacao === "sim" || validacao === "1") {
        let nomeVinho = validarCampo("Digite o nome do Vinho");
        let tipo = validarCampo("Digite o tipo do vinho");
        let safra = validarAno("Digite o ano do vinho");
        let quantidade = validarQuantidade("Digite a quantidade do vinho");
        let classificacao = classificarVinho(safra);
        let estoqueBaixo  = validarQuantidade(quantidade);

        if (vereficarEstoque(quantidade)) {
            alert("Estoque baixo");
            contaVinhosEstoqueBaixo += 1;
        };

        if (safra < safraAntiga) {
            safraAntiga = safra;
            nomeAntigo = nomeVinho;
        };
    
        alert("Cadastro realizado! acesse as informações no console");
        contador += 1

    console.log(`
    ====== DADOS DOS VINHOS ======

    Nome do vinho: ${nomeVinho}
    Tipo do vinho: ${tipo}
    Safra: ${safra}
    Quantidade em estoque: ${quantidade}
    ${estoqueBaixo ? "Estoque desse vinho esta baixo" : ""}
    Classificação: ${classificacao}

    ==============================
    `);

    } else {
        alert("Cadastro finalizado! acesse as informações no console");

        console.log(`
        ====== RESUMO FINAL ======

        Cadastros feitos: ${contador}
        Vinhos com estoque baixo: ${contaVinhosEstoqueBaixo}
        Vinho com a safra mais antiga é: ${nomeAntigo} com ${safraAntiga}

        ==============================
        `);
        
        break
    };
};