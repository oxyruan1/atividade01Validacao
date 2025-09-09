function verificarDados() {
    const nome = document.getElementById('nome-user').value;
    const cpf = document.getElementById('cpf-user').value;
    const regexNome = /^[a-zA-z\s]+$/;
    const regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;


    if (!regexNome.test(nome)) {
        alert('Coloque seu nome corretamente!');
        return false;
    }

    if (!regexCpf.test(cpf)) {
        alert('CPF inválido! Por-favor, digite seu CPF da forma correta.');
    }
    return true;
}