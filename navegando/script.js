const fs = require('fs');

// Função para ler dados de um arquivo JSON

function lerDados() {
    const dadosBrutos = fs.readFileSync('dados.json');
    const dados = JSON.parse(dadosBrutos);

    return dados;
}

// Lê os dados do arquivo

const dados = lerDados();

// Navegação entre as propriedades

// 1. Acessar o nome da empresa

const nomeEmpresa = dados.empresa.nome;
console.log("Nome da Empresa: " + nomeEmpresa);

// 2. Acessar o nome da cidade de localização

const nomeCidade = dados.empresa.localizacao.cidade;
console.log("Cidade: " + nomeCidade);

// 3. Listar os nomes dos funcionários

console.log("Funcionários:");
dados.empresa.funcionarios.forEach(funcionario => {
    console.log(funcionario.nome);
});

// 4. Acessar as habilidades do João Silva

const habilidadesJoao = dados.empresa.funcionarios.find(func => func.id === 1).habilidades;
console.log('Habilidades do João' + habilidadesJoao);

// 5. Obter o status do Projeto A

