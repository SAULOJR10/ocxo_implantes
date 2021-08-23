function abrir_modal(x){
    if(x == 'Lentes'){
        $('#titulo_apresentar').empty();
        $('#titulo_apresentar').append('Lentes de contato');
        $('#img_modal').empty();
        $('#img_modal').append('<img src="img/card_fa_1.png">');
    }
    if(x == 'Próteses'){
        $('#titulo_apresentar').empty();
        $('#titulo_apresentar').append('Próteses dentárias');
        $('#img_modal').empty();
        $('#img_modal').append('<img src="img/card_fa_2.png">');
    }
    if(x == 'Implantes'){
        $('#titulo_apresentar').empty();
        $('#titulo_apresentar').append('Implantes dentários');
        $('#img_modal').empty();
        $('#img_modal').append('<img src="img/card_fa_3.png">');
    }
    if(x == 'Carga'){
        $('#titulo_apresentar').empty();
        $('#titulo_apresentar').append('Carga Imediata');
        $('#img_modal').empty();
        $('#img_modal').append('<img src="img/card_fa_4.png">');
    }
    if(x == 'Ortodontia'){
        $('#titulo_apresentar').empty();
        $('#titulo_apresentar').append('Ortodontia');
        $('#img_modal').empty();
        $('#img_modal').append('<img src="img/card_fa_5.png">');
    }
    $('.bd-example-modal-lg').modal('show');
}

function exit_modal(){
    $('.bd-example-modal-lg').modal('hide');
}