function setEndereco(enderecoText) {
    const enderecoContainer = document.getElementById('endereco');
    enderecoContainer.textContent = enderecoText;
}

function fetchEndereco() {
    const cep = document.getElementById('cepInput').value;
    const cepLimpo = cep.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cepLimpo.length !== 8) {
        setEndereco('Por favor, digite um CEP válido com 8 dígitos.');
        return;
    }

    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                setEndereco('CEP não encontrado.');
            } else {
                setEndereco(`Rua ${data.logradouro} - ${data.localidade}, ${data.uf}`);
            }
        })
        .catch(error => {
            console.error('Falha ao buscar o endereço:', error);
            setEndereco('Erro ao carregar endereço.');
        });
}

// Opcional: Pode-se adicionar um event listener para permitir a busca pressionando Enter
document.getElementById('cepInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        fetchEndereco();
    }
});


function setClima(climaText) {
    const climaContainer = document.getElementById('clima');
    climaContainer.textContent = climaText;
}

function fetchClima() {
    const cidade = document.getElementById('cidadeInput').value;
    const apiKey = 'b7b31372ba75dd7eebcfd55cf1c5d157'; // 

    if (!cidade) {
        setClima('Por favor, digite o nome de uma cidade.');
        return;
    }

    // Quando a requisição fetch é concluída, ela retorna uma resposta (response). 
    //O método .then() é usado para lidar com essa resposta. 
    //A função response.json() é chamada para converter o corpo da resposta de formato JSON para um objeto JavaScript. 
    //Isso também retorna uma promessa que é resolvida com o objeto JavaScript resultante.
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                setClima('Cidade não encontrada.');
            } else {
                setClima(`Clima em ${data.name}, ${data.sys.country}: 
                ${data.weather[0].description}. Temperatura: ${data.main.temp}°C. Umidade: 
                ${data.main.humidity}%.`);
            }
        })
        .catch(error => {
            console.error('Falha ao buscar informações do clima:', error);
            setClima('Erro ao carregar informações do clima.');
        });
}

document.getElementById('buscarClimaBtn').addEventListener('click', fetchClima);

// Opcional: Adiciona um event listener para permitir a busca pressionando Enter
document.getElementById('cidadeInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        fetchClima();
    }
});