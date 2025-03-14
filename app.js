//  comeco de buttons
let next = document.getElementById('next');
let validar = document.getElementById('validar');
// fim de buttons

// comandos gerais
let inputNome = document.getElementById('nome');
let divFisico = document.getElementById('div-fisico');
let divJuridico = document.getElementById('div-juridico');
let msgGeral = document.getElementById('msgGeral');
let msgJuridico = document.getElementById('msgJuridico');
let opcao = document.getElementById('opcao');
// fim de comando gerias

// campo variaveis de campos fisicos
let inputCpf = document.getElementById('cpf');
let inputRG = document.getElementById('rg');
let inputIdade = document.getElementById('idade');
// fim de variaveis de campo fisico

// comeco de variaveis de campos juridicos
let inputCnpj = document.getElementById('cnpj');
let inputIe = document.getElementById('ie');
let inputNomeFantasia = document.getElementById('nomeFantasia');
// fim de variaveis de campos juridicos

next.addEventListener('click', function () {

    // remover os erros ao clicar Select "fisico"
    divFisico.classList.add('esconder');
    divJuridico.classList.add('esconder');
    divFisico.classList.remove('exibir');
    divJuridico.classList.remove('exibir');
    msgGeral.classList.remove('exibir');
    msgGeral.classList.add('esconder');

    //campos inputs
    inputNome.classList.remove('erro-input');
    inputCpf.classList.remove('erro-input');
    inputRG.classList.remove('erro-input');
    inputIdade.classList.remove('erro-input');
    //   fim de erros select

    // remover os erros ao clicar Select "juridico"
    divFisico.classList.add('esconder');
    divJuridico.classList.add('esconder');
    divFisico.classList.remove('exibir');
    divJuridico.classList.remove('exibir');
    msgJuridico.classList.remove('exibir');
    msgJuridico.classList.add('esconder');
     
    //   campos inputs
    inputNome.classList.remove('erro-input');
    inputCnpj.classList.remove('erro-input');
    inputIe.classList.remove('erro-input');
    inputNomeFantasia.classList.remove('erro-input');
    //   fim de erros select

    if (opcao.value === 'fisico') {
        divFisico.classList.remove('esconder');
        divFisico.classList.add('exibir');

    }

    if (opcao.value === 'juridico') {
        divFisico.classList.remove('exibir');
        divFisico.classList.add('esconder');
        divJuridico.classList.add('exibir');
        divJuridico.classList.remove('esconder');
    }
})

validar.addEventListener('click', function () {
    // definir como um campo de nome composto
    let indiceEspcao = inputNome.value.trim().indexOf(' ');
    // coletando o valor pra n dar conflito na acao do click validar entre 'fisico' e 'juridico'
    let valorOpcao = opcao.value;
    // armazenar erros
    let msgErroGeral = '';
    let msgErroJuridico = '';

    // comeco do form fisico
    if (valorOpcao === 'fisico') {
        

        if (inputNome.value == '' || indiceEspcao == -1 || inputNome.value.length < 3) {
            inputNome.classList.add('erro-input');
            msgErroGeral += '<br>* Nome invalido, necessario Nome composto !!';
        } else {
            inputNome.classList.remove('erro-input');
        }

        let cpf = inputCpf.value.replaceAll('.', '').replaceAll('-', '');

        if (cpf == '' || cpf.length != 11 || isNaN(cpf)) {
            inputCpf.classList.add('erro-input');
            msgErroGeral += '<br>* CPF invalido !!';
            console.log(cpf);
        } else {
            inputCpf.classList.remove('erro-input');
            console.log(cpf);
        }

        let rg = inputRG.value.replaceAll('.', '').replaceAll('-', '');
        if (rg == '' || rg.length < 7 || isNaN(cpf)) {
            inputRG.classList.add('erro-input');
            msgErroGeral += '<br>* RG invalido !!';
        } else {
            inputRG.classList.remove('erro-input');
        }

        if (inputIdade.value == '' || inputIdade.value < 18 || isNaN(cpf)) {
            inputIdade.classList.add('erro-input');
            msgErroGeral += '<br>* Menor que 18 !!';
        } else {
            inputIdade.classList.remove('erro-input');
        }

        if (msgErroGeral !== '') {
            msgGeral.classList.remove('esconder');
            msgGeral.classList.add('exibir');
            msgGeral.innerHTML = 'Erros: ' + msgErroGeral;
        } 
        else {
            msgGeral.classList.remove('exibir');
            msgGeral.classList.add('esconder');
        }
    } 

    // comeco do form juridico

    if (valorOpcao === 'juridico') {    

        if (inputNome.value == '' || indiceEspcao == -1 || inputNome.value.length < 3) {
            inputNome.classList.add('erro-input');
            msgErroJuridico += '<br>* Nome invalido, necessario Nome composto !!';
        } else {
            inputNome.classList.remove('erro-input');
        }

        let cnpj = inputCnpj.value.replaceAll('.', '').replaceAll('-', '');
        if (cnpj == '' || cnpj.length !== 14 || isNaN(cpf)) {
            inputCnpj.classList.add('erro-input');
            msgErroJuridico += '<br>* CNPJ invalido !!';
        } else {
            inputCnpj.classList.remove('erro-input');
        }

        let ie = inputIe.value.replaceAll('.', '').replaceAll('-', '');
        if (ie == '' || ie.length !== 14 || isNaN(cpf)) {
            inputIe.classList.add('erro-input');
            msgErroJuridico += '<br>* IE invalido !!';
        } else {
            inputIe.classList.remove('erro-input');
        }

        if(inputNomeFantasia.value === ''){
            inputNomeFantasia.classList.add('erro-input');
            msgErroJuridico += '<br>* Campo Obrigatorio !!';
        } else{
            inputNomeFantasia.classList.remove('erro-input');
        }
      
        if (msgErroJuridico !== '') {
            msgJuridico.classList.remove('esconder');
            msgJuridico.classList.add('exibir');
            msgJuridico.innerHTML = 'Erros: ' + msgErroJuridico;
        } 
        else {
            msgJuridico.classList.remove('exibir');
            msgJuridico.classList.add('esconder');
        }

    }
})
