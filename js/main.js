$(document).ready(function(){

    $('form').on('submit',function(e){
    e.preventDefault()    
    })

    $('#telefone').mask('(00) 00000-0000')

    $('#CPF').mask('000.000.000-00')

    $('#CEP').mask('00000-000')
})