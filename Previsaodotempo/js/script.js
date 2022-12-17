async function getTempo() {
  const uri =
    'https://api.hgbrasil.com/weather?key=fbb82c28&format=json-cors&city_name=Arapiraca,AL'
  const encodedURI = encodeURI(uri)

  const resposta = await fetch(encodedURI)
  const json = await resposta.json()

  document.getElementById('temperatura').innerHTML = json.results.temp
  document.getElementById('cidade').innerHTML = json.results.city
  document.getElementById('hora').innerHTML = json.results.time
  document.getElementById('data').innerHTML = json.results.date

  //----------------------------------------------------------------------------------------------------
  let conteudoDivPrevisoes = ''
  json.results.forecast.forEach((previsao, i) => {
    if (i < 7) {
      conteudoDivPrevisoes += `
            
            <div class="card2">
                <p>${previsao.weekday}</p>
                <p>Rain Probability: ${previsao.rain_probability}%</p>
                <p>Condition: ${previsao.condition}</p>
                <p>Máx: ${previsao.max}<span>&#8451;</span></p>
                <p>Min: ${previsao.min}<span>&#8451;</span></p>
                <p>Wind Speedy: ${previsao.wind_speedy}</p>
            </div>
              
        `
    }
  })

  document.getElementById('previsoes').innerHTML = conteudoDivPrevisoes
}

getTempo()
