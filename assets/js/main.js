$(document).ready(function(){
    $('.date').html(data());
});

$('.citys').change(function city(){
   cidade = $(this).val();
   
    
    // FUNDO
        // 1 - Ensolarado
        // 2 - Tempestade
        // 3 - Noite
        // 4 - Chuva
        // 5 - Noite Estrelada
        // 6 - Céu limpo
    // site(cidade, temperatura, precipitação, vento, uv, fundo_numero)
    switch (cidade){
        case 'torres':
            site('Torres - RS', 'Céu Limpo', '22', '100', '3', 'baixo', 6);
            break;

        case 'criciuma':
            site('Cricíuma - SC', 'Noite', '25', '15', '2', 'baixo', 3);
            break;
        
        case 'capao canoa':
            site('Capão da Canoa - RS', 'Noite estrelada','12', '10', '10', 'medio', 5);
            break;
        case 'passo torres':
            site('Passo de Torres - RS', 'Ensolarado','21', '12', '4', 'medio', 1);
            break;
    }
});

function fundo(n){
    position = "left";
    switch(n){
        case 1:
            url = "sunny";
            position = "left";
            break;
        case 2:
            url = "storm";
            position = "right";
            break;
        case 3: 
            url = "night";
            break;
        case 4: 
            url = "chuva";
            position = "right";
            break;
        case 5:
            url = "lightsky";
            position = "right";
            break;
        case 6:
            url = "clearsky";
            position = "right";
            break;
    }

    return code = "url('assets/img/background-"+ url +".jpg') no-repeat " + position;
}

function site(city, descricao, temp, precipty, wind, uv, background){
    $('.city').html(city);
    $('.situacao').html(descricao);
    $('.temp h1').html(temp + ' ºC');
    $('.precipty').html(precipty + ' %');
    $('.wind').html(wind + ' km/h');
    $('.uv').html('UV ' + uv);

    $('#main').css({
        'background': fundo(background),
        'background-size': 'cover'
    });

    $('.informations').show();
    $('.next-days').show();
}


function data(){
    var arrayDia = new Array(7);
    arrayDia[0] = "Domingo";
    arrayDia[1] = "Segunda-Feira";
    arrayDia[2] = "Terça-Feira";
    arrayDia[3] = "Quarta-Feira";
    arrayDia[4] = "Quinta-Feira";
    arrayDia[5] = "Sexta-Feira";
    arrayDia[6] = "Sábado";
    
    var arrayMes = new Array(12);
    arrayMes[0] = "Janeiro";
    arrayMes[1] = "Fevereiro";
    arrayMes[2] = "Março";
    arrayMes[3] = "Abril";
    arrayMes[4] = "Maio";
    arrayMes[5] = "Junho";
    arrayMes[6] = "Julho";
    arrayMes[7] = "Agosto";
    arrayMes[8] = "Setembro";
    arrayMes[9] = "Outubro";
    arrayMes[10] = "Novembro";
    arrayMes[11] = "Dezembro";

    dataAtual = new Date();
    semana = dataAtual.getDay();
    dia = dataAtual.getDate();
    mes = dataAtual.getMonth();

    data_final = arrayDia[semana] + ", " + dia + " de " + arrayMes[mes];

    return data_final;
}