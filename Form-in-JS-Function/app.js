let inputNome = document.getElementById('nome');
let inputOpcao = document.getElementById('opcao');
let campoFisico = document.getElementById('campoFisico');
let campoJuridico = document.getElementById('campoJuridico');

// campos físicos
let inputCPF = document.getElementById('cpf');
let inputRG = document.getElementById('rg');
let inputIdade = document.getElementById('idade');

// campos jurídicos
let inputCNPJ = document.getElementById('cnpj');
let inputIE = document.getElementById('ie');
let inputNomeFantasia = document.getElementById('nomeFantasia');

// botões
let next = document.getElementById('next');
let validar = document.getElementById('validar');
let errosGeral = document.getElementById('errosGeral');

let erros = '';

next.addEventListener('click', function () {
    campoJuridico.classList.add('esconder')
    campoJuridico.classList.remove('exibir')
    campoFisico.classList.add('esconder')
    campoFisico.classList.remove('exibir')
    SelectLimpar();
    SelectValueOpcoes();
});

validar.addEventListener('click', function () {
    erros = '';
    
    protectValidation();
    parametroFisico();
    parametrosJuridico();
    validationErros();
});

function protectValidation(){
    if(inputOpcao.value == 'fisico'){
        campoFisico.classList.add('exibir');
        campoFisico.classList.remove('esconder');
        campoJuridico.classList.add('esconder');
        campoJuridico.classList.remove('exibir');
    }
    if(inputOpcao.value == 'juridico'){
        campoJuridico.classList.add('exibir');
        campoJuridico.classList.remove('esconder');
        campoFisico.classList.add('esconder');
        campoFisico.classList.remove('exibir');
    }
}

function SelectLimpar(){
    errosGeral.classList.add('esconder');
    errosGeral.classList.remove('exibir');
    inputNome.classList.remove('danger')
    inputCPF.classList.remove('danger')
    inputRG.classList.remove('danger')
    inputIdade.classList.remove('danger')
    inputCNPJ.classList.remove('danger')
    inputIE.classList.remove('danger')
    inputNomeFantasia.classList.remove('danger')
}

function SelectValueOpcoes() {
    if (inputOpcao.value == 'fisico') {
        campoFisico.classList.add('exibir')
        campoFisico.classList.remove('esconder')
        campoJuridico.classList.add('esconder')
        campoJuridico.classList.remove('exibir')
    }
    if (inputOpcao.value == 'juridico') {
        campoJuridico.classList.add('exibir')
        campoJuridico.classList.remove('esconder')
        campoFisico.classList.add('esconder')
        campoFisico.classList.remove('exibir')
    }
}

function parametroFisico() {

    if (inputOpcao.value == 'fisico') {
        let nome = inputNome.value;
        if (nome == '') {
            inputNome.classList.add('danger');
            erros += "<br>*Nome Vazio !!";
        } else {
            inputNome.classList.remove('danger');
        }

        let cpf = inputCPF.value.replaceAll('-', '').replaceAll('.', '');
        if (cpf === '' || isNaN(cpf) || cpf.length !== 11) {
            inputCPF.classList.add('danger');
            erros += "<br>*Cpf Invalido !!";
        } else {
            inputCPF.classList.remove('danger');
        }

        let rg = inputRG.value.replaceAll('-', '').replaceAll('.', '');
        if (rg === '' || isNaN(rg)) {
            inputRG.classList.add('danger');
            erros += '<br>*RG Invalido !!';
        } else {
            inputRG.classList.remove('danger');
        }

        let idade = inputIdade.value.replaceAll('-', '').replaceAll('.', '');
        if (idade === '' || isNaN(idade) || idade < 18) {
            inputIdade.classList.add('danger');
            erros += '<br>*Menor de idade !!';
        } else {
            inputIdade.classList.remove('danger');
        }
    }
}

function parametrosJuridico() {
    if (inputOpcao.value == 'juridico') {
        // Validação do nome
        let nome = inputNome.value;
        if (nome == '') {
            inputNome.classList.add('danger');
            erros += '<br>* Nome inválido ou vazio !!';
        } else {
            inputNome.classList.remove('danger');
        }

        // Validação do CNPJ
        let cnpj = inputCNPJ.value.replaceAll('-', '').replaceAll('.', '');
        if (cnpj == '' || isNaN(cnpj) || cnpj.length != 14) {
            inputCNPJ.classList.add('danger');
            erros += '<br>* CNPJ inválido ou vazio !!';
        } else {
            inputCNPJ.classList.remove('danger');
        }

        // Validação da Inscrição Estadual
        let ie = inputIE.value.replaceAll('-', '').replaceAll('.', '');
        if (ie == '' || isNaN(ie)) {
            inputIE.classList.add('danger');
            erros += '<br>* IE inválido ou vazio !!';
        } else {
            inputIE.classList.remove('danger');
        }

        // Validação do nome fantasia
        let nomeFantasia = inputNomeFantasia.value;
        if (nomeFantasia == '') {
            inputNomeFantasia.classList.add('danger');
            erros += '<br>* Nome Fantasia vazio !!';
        } else {
            inputNomeFantasia.classList.remove('danger');
        }
    }
}

function validationErros() {
    // Exibe ou esconde a mensagem de erro
    if (erros !== '') {
        errosGeral.classList.add('exibir');
        errosGeral.classList.remove('esconder');
        errosGeral.innerHTML = 'Erros: ' + erros;
    } else {
        errosGeral.classList.add('esconder');
        errosGeral.classList.remove('exibir');
    }
}
