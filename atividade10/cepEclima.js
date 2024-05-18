async function consultarCEP() {
    const cep = document.getElementById('cepInput').value;
    try {
        const endereco = await buscarEndereco(cep);
        exibirEndereco(endereco);
        const clima = await buscarClima(endereco);
        exibirClima(clima);
    } catch (error) {
        console.error(error);
        alert('Erro ao consultar o CEP ou o clima. Por favor, tente novamente.');
    }
}

async function buscarEndereco(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!response.ok) {
        throw new Error('CEP não encontrado');
    }
    const data = await response.json();
    return `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
}

async function buscarClima(endereco) {
    const apiKey = 'b7b31372ba75dd7eebcfd55cf1c5d157';
    const cidade = endereco.split(',')[2].trim();
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`);
    if (!response.ok) {
        throw new Error('Clima não encontrado');
    }
    const data = await response.json();
    return `Clima: ${data.weather[0].description}, Temperatura: ${data.main.temp}°C`;
}

function exibirEndereco(endereco) {
    document.getElementById('endereco').textContent = endereco;
}

function exibirClima(clima) {
    document.getElementById('clima').textContent = clima;
}
