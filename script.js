function retornaCep(dados){

    console.log(dados)
    if(document.getElementById('cidade2').value != ''){
        document.getElementById('rua3').value = document.getElementById('rua2').value
        document.getElementById('cidade3').value = document.getElementById('cidade2').value
        document.getElementById('uf3').value = document.getElementById('uf2').value
        document.getElementById('ibge3').value = document.getElementById('ibge2').value
        document.getElementById('cep3').value = document.getElementById('cep2').value
    }

    if(document.getElementById('cidade').value != ''){
        document.getElementById('rua2').value = document.getElementById('rua').value
        document.getElementById('cidade2').value = document.getElementById('cidade').value
        document.getElementById('uf2').value = document.getElementById('uf').value
        document.getElementById('ibge2').value = document.getElementById('ibge').value
        document.getElementById('cep2').value = document.getElementById('cep').value
    }

    document.getElementById('rua').value = dados.logradouro
    document.getElementById('cidade').value = dados.localidade
    document.getElementById('uf').value = dados.uf
    document.getElementById('ibge').value = dados.ibge
    document.getElementById('cep').value = dados.cep


    

}
 
function buscaCep(parans){
    const name = document.querySelector('#name')
    const cep = name.value
    if(cep != ''){
        let validaCep = /^[0-9]{8}$/;
        if(validaCep.test(cep)){

            let script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/' + cep + '/json?callback=retornaCep';
            document.body.appendChild(script)
        }
    }
    var cepInput = document.getElementById('name');
    var errorMessage = document.getElementById('errorMessage');

    if (cepInput.value.trim() === '') {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
}

$(function() {
    $('#submit').click(function(){
        if(contador == 0){
            $('#box1').slideDown()
        }
        if(contador == 1){
            $('#box2').slideDown()
        }
        if(contador == 2){
            $('#box3').slideDown()
        }
    })
})

var contador = 0

$(function() {

    $('#submit').click(function(){
        contador = contador + 1
    })
    console.log(contador)
})

$(function() {
    $('#limpar').click(function(){
        contador = 0
        $('#box1').slideUp()
        $('#box2').slideUp()
        $('#box3').slideUp()
    })
})


