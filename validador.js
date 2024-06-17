function validarFormulario() {
    const nome = document.getElementsByName('nome')[0].value;
    const cpf = document.getElementsByName('cpf')[0].value;
    const endereco = document.getElementsByName('endereco')[0].value;
    const nascimento = document.getElementsByName('nascimento')[0].value;

    if (nome === '') {
        alert('Por favor, preencha o campo Nome.');
        return false;
    }

    if (cpf === '') {
        alert('Por favor, preencha o campo CPF.');
        return false;
    }

    if (!validarCPF(cpf)) {
        alert('CPF inválido.');
        return false;
    }

    if (endereco === '') {
        alert('Por favor, preencha o campo Endereço.');
        return false;
    }

    if (nascimento === '') {
        alert('Por favor, preencha o campo Data de Nascimento.');
        return false;
    }

    alert('Formulário enviado com sucesso!');
    return true;
}

// Função para validar o CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf === '') return false;
    if (cpf.length !== 11 || 
        cpf === "00000000000" || 
        cpf === "11111111111" || 
        cpf === "22222222222" || 
        cpf === "33333333333" || 
        cpf === "44444444444" || 
        cpf === "55555555555" || 
        cpf === "66666666666" || 
        cpf === "77777777777" || 
        cpf === "88888888888" || 
        cpf === "99999999999")
        return false;

    let add = 0;
    for (let i = 0; i < 9; i++) {
        add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(9))) return false;

    add = 0;
    for (let i = 0; i < 10; i++) {
        add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(10))) return false;

    return true;
}