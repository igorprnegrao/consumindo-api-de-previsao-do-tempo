let keys = '88b0a84b8522ecfd06649daf4f466b7b';

function colocarDadosTela(dados) {
    console.log(dados)
    document.querySelector('.cidade').innerHTML = 'Tempo em  ' + dados.name
    document.querySelector('.temp').innerHTML = dados.main.temp.toFixed(0) + '° C'
    document.querySelector('.texto-previsao').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = 'Umidade ' + dados.main.humidity + ' %'

    
}

async function buscarCidade(cidade){
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${keys}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    
    colocarDadosTela(dados)

}

function cliqueiNoBotao() {
    const cidade = document.querySelector('.input-cidade').value;
    
    buscarCidade(cidade)
}
