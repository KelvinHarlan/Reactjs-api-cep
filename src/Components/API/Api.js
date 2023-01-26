function consumirApi() {
    let cep = document.querySelector('#cep');
    let rua = document.querySelector('#rua');
    let bairro = document.querySelector('#bairro');
    let cidade = document.querySelector('#cidade');
    let estado = document.querySelector('#estado');

    let url = `https://viacep.com.br/ws/${cep.value}/json/`;

    let data = fetch(url).then(Response => {
        return Response.json()
    }).then(data => {
        if (data.logradouro !== undefined) {
            cep.style.backgroundColor = 'gray'
            rua.value = data.logradouro;
            bairro.value = data.bairro;
            cidade.value = data.localidade;
            estado.value = data.uf;
        }
        else {
            cep.style.backgroundColor = 'red';
            rua.value = '';
            bairro.value = '';
            cidade.value = '';
            estado.value = '';

        }


    })

}

export default consumirApi