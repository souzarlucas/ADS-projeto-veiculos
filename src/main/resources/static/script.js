// Função para buscar e listar os veículos (Método GET)
async function carregarVeiculos() {
    const resposta = await fetch('/api/veiculos');
    const veiculos = await resposta.json();
    const corpoTabela = document.getElementById('tabela-corpo');
    corpoTabela.innerHTML = '';

    veiculos.forEach(v => {
        corpoTabela.innerHTML += `
            <tr>
                <td>${v.id}</td>
                <td>${v.marca}</td>
                <td>${v.modelo}</td>
                <td>${v.ano}</td>
                <td>R$ ${v.preco}</td>
                <td>${v.status}</td>
                <td><button class="btn-delete" onclick="deletarVeiculo(${v.id})">Vendido</button></td>
            </tr>
        `;
    });
}

// Função para cadastrar um veículo (Método POST)
async function cadastrarVeiculo() {
    const veiculo = {
        marca: document.getElementById('marca').value,
        modelo: document.getElementById('modelo').value,
        ano: document.getElementById('ano').value,
        preco: document.getElementById('preco').value,
        status: document.getElementById('status').value
    };

    await fetch('/api/veiculos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(veiculo)
    });

    alert("Veículo cadastrado com sucesso!");
    
    // Limpa os campos após cadastrar
    document.getElementById('marca').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('ano').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('status').value = '';

    carregarVeiculos(); // Atualiza a tabela
}

// Função para deletar um veículo (Método DELETE)
async function deletarVeiculo(id) {
    if(confirm("Confirmar que este veículo foi vendido/removido?")) {
        await fetch(`/api/veiculos/${id}`, { method: 'DELETE' });
        carregarVeiculos(); // Atualiza a tabela
    }
}

// Carrega a lista automaticamente ao abrir a página
window.onload = carregarVeiculos;