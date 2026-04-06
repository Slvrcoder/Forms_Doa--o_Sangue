let form = document.getElementById('forms');

form.addEventListener('submit', function(e) {

    e.preventDefault();

    let valido = true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    document.getElementById('erroNome').textContent = '';
    document.getElementById('erroEmail').textContent = '';

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

    if (valido) {
        document.getElementById('resultado').innerHTML = `
        <h3>Dados enviados com sucesso!</h3>
        Nome: ${nome} <br>
        Email: ${email} 
        `;
    }

});