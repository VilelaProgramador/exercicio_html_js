const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formValido = false;
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroAgenciaBeneficiario = document.getElementById('agencia-deposito');
    const numeroContaBeneficiario = document.getElementById('conta-deposito');
    const valorDeposito = document.getElementById('valor-deposito');
    const descricao = document.getElementById('descricao');
    const mensagemSucesso = `Valor de ${valorDeposito.value} depositado para o cliente ${nomeBeneficiario.value} - Agência: ${numeroAgenciaBeneficiario.value} / Conta: ${numeroContaBeneficiario.value}`;

    formValido = validaNome(nomeBeneficiario.value);
    if (formValido) {
        alert(mensagemSucesso);

        nomeBeneficiario.value = '';
        numeroAgenciaBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
        descricao.value = '';
    } else {
        alert('Digite seu nome completo!');
    }

    console.log(form);
});