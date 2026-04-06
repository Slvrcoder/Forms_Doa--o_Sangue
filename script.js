let form = document.getElementById('forms');

form.addEventListener('submit', function(e) {

    e.preventDefault();

    let nome = document.getElementById('nome').value;

    let valido = true;

    document.getElementById('errorNome').textContent = '';





    if (nome.length < 10) {

        document.getElementById('errorNome').textContent = 'O nome deve conter pelo menos 10 caracteres.';
        valido = false;