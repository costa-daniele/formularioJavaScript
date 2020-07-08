function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

function recebeEventoForm(evento) {
    evento.preventDefault();
    const nome = form.querySelector('#nome');
    const sobrenome = form.querySelector('#sobrenome');
    const cidade = form.querySelector('#cidade');
    const estado = form.querySelector('#estado');

    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        cidade: cidade.value,
        estado: estado.value

    });

    console.log(pessoas);

    resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${cidade.value} ${estado.value} </p>`
}
form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();