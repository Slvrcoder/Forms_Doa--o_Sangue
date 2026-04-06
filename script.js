let form = document.getElementById('forms');

form.addEventListener('submit', function(e) {

    e.preventDefault();

    let valido = true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let idade = document.getElementById('idade').value;
    let peso = document.getElementById('peso').value;
    let tipoSangue = document.getElementById('tipoSangue').value;
    let telefone = document.getElementById('telefone').value;
    let estado = document.getElementById('estado').value;
    let cidade = document.getElementById('cidade').value;

    document.getElementById('erroNome').textContent = '';
    document.getElementById('erroEmail').textContent = '';
    document.getElementById('erroIdade').textContent = '';
    document.getElementById('erroPeso').textContent = '';
    document.getElementById('erroTipoSangue').textContent = '';
    document.getElementById('erroTelefone').textContent = '';
    document.getElementById('erroEstado').textContent = '';
    document.getElementById('erroCidade').textContent = '';

    if (nome.length < 10) {
        document.getElementById('erroNome').textContent =
            'O nome deve conter pelo menos 10 caracteres.';
        valido = false;
    }

    if (!email.includes('@')) {
        document.getElementById('erroEmail').textContent =
            'Por favor, insira um email válido.';
        valido = false;
    }

    if (idade < 16 || idade > 120) {
        document.getElementById('erroIdade').textContent =
            'Você deve ser maior de 16 anos para doar sangue.';
        valido = false;
    }
    if (peso < 50) {
        document.getElementById('erroPeso').textContent =
            'O peso mínimo para doação é de 50 kg.';
        valido = false;
    }

    if (telefone.length < 10) {
        document.getElementById('erroTelefone').textContent =
            'Por favor, insira um número de telefone válido.';
        valido = false;
    }
    if (estado === '') {
        document.getElementById('erroEstado').textContent =
            'Por favor, selecione um estado.';
        valido = false;
    }
    if (cidade === '') {
        document.getElementById('erroCidade').textContent =
            'Por favor, insira a cidade.';
        valido = false;
    }

    if (valido) {
        document.getElementById('resultado').innerHTML = `
        <h3>Dados enviados com sucesso!</h3>
        Nome: ${nome} <br>
        Email: ${email} <br>
        Idade: ${idade} <br>
        Peso: ${peso} kg <br>
        Tipo Sanguíneo: ${tipoSangue} <br>
        Telefone: ${telefone} <br>
        Cidade: ${cidade} <br>
        Estado: ${estado} <br>
        `;
    }

});