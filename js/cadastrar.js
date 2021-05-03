$('input[type=text]').focus(function(){
    resetarCampoInvalido($(this));
})
let form = document.querySelector("#cadastrar");
form.addEventListener("submit", function(event){
    event.preventDefault();        
    let nome = $('input[name=nome]').val();    
    let email = $('input[name=email]').val();     
    let trilha = $('input[name=trilha]').val(); 
    let telefone = $('input[name=telefone]').val(); 
    
    if (verificarNome(nome) == false) {
        aplicarCampoInvalido($('input[name=nome]'));
    }else if(verificarEmail(email) == false){
        aplicarCampoInvalido($('input[name=email]'));
    }else if(verificarTrilha(trilha) == false){
        aplicarCampoInvalido($('input[name=trilha]'));
    }else if(verificarTelefone(telefone) == false){
        aplicarCampoInvalido($('input[name=telefone]'));
    }else{        
        return false;
    }   
})
function aplicarCampoInvalido(el){
    el.css('color','red');
    el.css('border','1px solid red');
    el.val('Campo Inválido!');
    //el.data('invalido', 'true');
}
function resetarCampoInvalido(el){
    el.css('color','black');
    el.css('border','1px solid white');
    el.val('');
}
function verificarNome(nome){
    if (nome == '') {
        return false;
    }
    /*let amount = nome.split(' ').length;
    let spliStr = nome.split(' ');
    if (amount >= 2) {
        for (let i = 0; i < amount; i++) {
            if (spliStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)) {
                
            } else {
                return false;
            }            
        }
    } else {
        return false;
    }*/
}
function verificarEmail(email){
    if (email == '') {
        return false;
    }
    /*if (email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null){
        return false;                
    }*/
}
function verificarTrilha(trilha){
    if (trilha == '') {
        return false;
    }    
}
function verificarTelefone(telefone){
    if (telefone == '') {
        return false;
    }    
}
