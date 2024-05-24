const viaCEPUrl = 'https://viacep.com.br/ws';

async function getEndereco(cep) {
    const response = await fetch(`${viaCEPUrl}/${cep}/json`);
    const data = await response.json();
    if (data.erro) {
        throw new Error('CEP não encontrado');
    }
    return {
        cep: data.cep,
        logradouro: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        uf: data.uf
    };
}

const openWeatherMapUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'b7b31372ba75dd7eebcfd55cf1c5d157'; // Substitua pela sua chave de API do OpenWeatherMap

async function getClima(cidade) {
    const response = await fetch(`${openWeatherMapUrl}?q=${cidade}&appid=${apiKey}&lang=pt&units=metric`);
    const data = await response.json();
    if (data.cod !== 200) {
        throw new Error(data.message);
    }
    return {
        temp: data.main.temp,
        condicao: data.weather[0].description,
        umidade: data.main.humidity,
        pressao: data.main.pressure
    };
}
