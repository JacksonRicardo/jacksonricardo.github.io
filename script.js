// Dados fictícios de clientes
const dadosClientes = [
    {
        nomeEmpresa: "Empresa 1",
        nomeFantasia: "Fantasia 1",
        cnpj: "1234567890",
        grupo: "Grupo A",
        inicioContrato: "01/01/2023",
        fimContrato: "31/12/2023",
        dominio: "dominio1.com",
        usuario: "usuario1",
        regimeTributario: "A"
    },
    // ... (mais dados fictícios de clientes)
];

// Repetir dados fictícios de clientes 2 vezes
dadosClientes.push(...dadosClientes);
dadosClientes.push(...dadosClientes);

// Dados fictícios de funcionários
const dadosFuncionarios = [
    {
        cpf: "123.456.789-01",
        nome: "Funcionário 1",
        email: "funcionario1@example.com",
        cargo: "Cargo A",
        empresaResponsavel: "Empresa A"
    },
    // ... (mais dados fictícios de funcionários)
];

// Repetir dados fictícios de funcionários 2 vezes
dadosFuncionarios.push(...dadosFuncionarios);
dadosFuncionarios.push(...dadosFuncionarios);

// Dados fictícios de grupos
const dadosGrupos = [
    {
        dataHora: "01/01/2023 09:00",
        grupoEconomico: "Econômico 1",
        usuario: "usuario1"
    },
    // ... (mais dados fictícios de grupos)
];

// Repetir dados fictícios de grupos 2 vezes
dadosGrupos.push(...dadosGrupos);
dadosGrupos.push(...dadosGrupos);

// Função para preencher uma tabela com dados fictícios e implementar a paginação
function preencherTabela(dados, tabelaId) {
    const tabela = document.getElementById(tabelaId);
    tabela.innerHTML = '';

    // Número de itens por página
    const itensPorPagina = 10;
    const paginasTotais = Math.ceil(dados.length / itensPorPagina);

    let paginaAtual = 1;

    // Exibe apenas os itens da página atual
    const inicio = (paginaAtual - 1) * itensPorPagina;
    const fim = paginaAtual * itensPorPagina;

    for (let i = inicio; i < fim && i < dados.length; i++) {
        const dado = dados[i];

        // Crie linhas da tabela e preencha com os dados fictícios
        const row = tabela.insertRow();
        // Preencha as células da tabela com dados fictícios
        // Exemplo: row.insertCell().innerHTML = dado.nomeEmpresa;
    }

    // Implementação da paginação
    const pagination = document.getElementById(`pagination${tabelaId}`);
    pagination.innerHTML = '';

    for (let i = 1; i <= paginasTotais; i++) {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = i;

        link.addEventListener('click', function () {
            paginaAtual = i;
            preencherTabela(dados, tabelaId);
        });

        pagination.appendChild(link);
    }
}

// Inicialização da visualização de clientes, funcionários e grupos
preencherTabela(dadosClientes, 'tabelaClientes');
preencherTabela(dadosFuncionarios, 'tabelaFuncionarios');
preencherTabela(dadosGrupos, 'tabelaGrupos');
