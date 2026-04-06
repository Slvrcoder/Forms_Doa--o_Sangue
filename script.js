let form = document.getElementById('forms');

form.addEventListener('submit', function(e) {

    e.preventDefault();

    let valido = true;

    let nome = document.getElementById('nome').value;

    document.getElementById('erroNome').textContent = '';

    if (nome.length < 10) {
        document.getElementById('erroNome').textContent =
            'O nome deve conter pelo menos 10 caracteres.';
        valido = false;
    }

    if (valido) {
        document.getElementById('resultado').innerHTML = `
        <h3>Dados enviados com sucesso!</h3>
        Nome: ${nome}
        `;
    }

});