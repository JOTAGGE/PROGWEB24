async function consultarCEPeClima() {
    const cep = document.getElementById('cepInput').value.replace(/\D/g, '');
    if (cep.length !== 8) {
        alert('CEP inválido');
        return;
    }

    try {
        const endereco = await getEndereco(cep);
        const clima = await getClima(endereco.cidade);

        document.getElementById('cepClimaResult').innerHTML = `
            <h2>Informações do CEP e Clima</h2>
            <p><strong>CEP:</strong> ${endereco.cep}</p>
            <p><strong>Logradouro:</strong> ${endereco.logradouro}</p>
            <p><strong>Bairro:</strong> ${endereco.bairro}</p>
            <p><strong>Cidade:</strong> ${endereco.cidade}</p>
            <p><strong>Estado:</strong> ${endereco.uf}</p>
            <p><strong>Temperatura:</strong> ${clima.temp}°C</p>
            <p><strong>Condição:</strong> ${clima.condicao}</p>
            <p><strong>Umidade:</strong> ${clima.umidade}%</p>
            <p><strong>Pressão:</strong> ${clima.pressao} hPa</p>
        `;
    } catch (error) {
        console.error('Erro ao consultar CEP e Clima:', error);
        alert('Erro ao consultar CEP e Clima. Tente novamente mais tarde.');
    }
}
