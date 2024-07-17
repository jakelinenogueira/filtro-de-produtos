const products = [
    {name: 'Abajur', category: 'Quarto', price: 150},
    {name: 'Alicate', category: 'Ferramentas', price: 70},
    {name: 'Alarme Residencial', category: 'Segurança', price: 600},
    {name: 'Aparador', category: 'Sala de Estar', price: 1100},
    {name: 'Aparador de Pelos', category: 'Banheiro', price: 100},
    {name: 'Aquecedor a Gás', category: 'Banheiro', price: 1500},
    {name: 'Aquecedor Elétrico', category: 'Climatização', price: 300},
    {name: 'Aquecedor Solar', category: 'Climatização', price: 3500},
    {name: 'Ar Condicionado', category: 'Climatização', price: 3000},
    {name: 'Armário de Cozinha', category: 'Cozinha', price: 900},
    {name: 'Aspirador de Pó', category: 'Limpeza', price: 350},
    {name: 'Aspirador de Pó Vertical', category: 'Limpeza', price: 400},
    {name: 'Aspirador Robô', category: 'Limpeza', price: 1500},
    {name: 'Balcão para Cozinha', category: 'Cozinha', price: 600},
    {name: 'Banqueta Alta', category: 'Sala de Jantar', price: 350},
    {name: 'Barbeador Elétrico', category: 'Banheiro', price: 200},
    {name: 'Barraca', category: 'Esportes', price: 600},
    {name: 'Batedeira', category: 'Cozinha', price: 300},
    {name: 'Bicicleta', category: 'Esportes', price: 1000},
    {name: 'Bomba de Ar', category: 'Ferramentas', price: 100},
    {name: 'Cafeteira Elétrica', category: 'Cozinha', price: 250},
    {name: 'Cafeteira Expresso', category: 'Cozinha', price: 800},
    {name: 'Cafeteira Italiana', category: 'Cozinha', price: 100},
    {name: 'Cadeira de Escritório', category: 'Escritório', price: 600},
    {name: 'Cadeira de Jantar', category: 'Sala de Jantar', price: 300},
    {name: 'Cadeira de Praia', category: 'Área Externa', price: 150},
    {name: 'Cadeira Dobrável', category: 'Área Externa', price: 150},
    {name: 'Cadeira Gamer', category: 'Escritório', price: 1200},
    {name: 'Cadeira para Auto', category: 'Quarto', price: 200},
    {name: 'Cabide', category: 'Quarto', price: 50},
    {name: 'Cabideiro', category: 'Quarto', price: 100},
    {name: 'Calculadora', category: 'Escritório', price: 50},
    {name: 'Cama Box Casal', category: 'Quarto', price: 1200},
    {name: 'Cama Infantil', category: 'Quarto', price: 1000},
    {name: 'Câmera de Segurança', category: 'Segurança', price: 400},
    {name: 'Câmera Digital', category: 'Eletrônicos', price: 2000},
    {name: 'Canivete Suíço', category: 'Esportes', price: 100},
    {name: 'Capa de Chuva', category: 'Esportes', price: 50},
    {name: 'Capa para Sofá', category: 'Sala de Estar', price: 200},
    {name: 'Carrinho de Bebê', category: 'Quarto', price: 800},
    {name: 'Carrinho de Compras', category: 'Cozinha', price: 200},
    {name: 'Chaleira Elétrica', category: 'Cozinha', price: 150},
    {name: 'Chave de Fenda', category: 'Ferramentas', price: 50},
    {name: 'Churrasqueira a Carvão', category: 'Cozinha', price: 700},
    {name: 'Churrasqueira Elétrica', category: 'Cozinha', price: 450},
    {name: 'Climatizador de Ar', category: 'Climatização', price: 500},
    {name: 'Colchão de Molas', category: 'Quarto', price: 1500},
    {name: 'Colchão Inflável', category: 'Esportes', price: 200},
    {name: 'Cofre Eletrônico', category: 'Segurança', price: 500},
    {name: 'Copo Térmico', category: 'Cozinha', price: 100},
    {name: 'Conjunto de Panelas Antiaderentes', category: 'Cozinha', price: 450},
    {name: 'Cooktop', category: 'Cozinha', price: 700},
    {name: 'Cortador de Grama', category: 'Jardim', price: 1200},
    {name: 'Cortina Blackout', category: 'Quarto', price: 200},
    {name: 'Cozinha Compacta', category: 'Cozinha', price: 2200},
    {name: 'Desodorante', category: 'Banheiro', price: 30},
    {name: 'Desumidificador', category: 'Climatização', price: 700},
    {name: 'Escada', category: 'Ferramentas', price: 300},
    {name: 'Escorredor de Louças', category: 'Cozinha', price: 100},
    {name: 'Escrivaninha', category: 'Escritório', price: 700},
    {name: 'Escova Alisadora', category: 'Banheiro', price: 200},
    {name: 'Escova de Dentes', category: 'Banheiro', price: 15},
    {name: 'Escova Rotativa', category: 'Banheiro', price: 150},
    {name: 'Esmerilhadeira', category: 'Ferramentas', price: 400},
    {name: 'Espelho de Parede', category: 'Banheiro', price: 300},
    {name: 'Espremedor de Frutas', category: 'Cozinha', price: 100},
    {name: 'Estante de Livros', category: 'Sala de Estar', price: 600},
    {name: 'Estante Modular', category: 'Sala de Estar', price: 1000},
    {name: 'Esteira', category: 'Esportes', price: 3000},
    {name: 'Faca de Chef', category: 'Cozinha', price: 250},
    {name: 'Faca Elétrica', category: 'Cozinha', price: 150},
    {name: 'Ferro de Passar', category: 'Lavanderia', price: 150},
    {name: 'Fechadura Digital', category: 'Segurança', price: 300},
    {name: 'Ferro de Passar', category: 'Lavanderia', price: 150},
    {name: 'Fogão 4 Bocas', category: 'Cozinha', price: 800},
    {name: 'Forno Elétrico', category: 'Cozinha', price: 600},
    {name: 'Fone de Ouvido', category: 'Eletrônicos', price: 200},
    {name: 'Frigobar', category: 'Cozinha', price: 800},
    {name: 'Fritadeira Airfryer', category: 'Cozinha', price: 600},
    {name: 'Fritadeira Elétrica', category: 'Cozinha', price: 400},
    {name: 'Furadeira', category: 'Ferramentas', price: 400},
    {name: 'Gaveteiro', category: 'Escritório', price: 300},
    {name: 'Geladeira Duplex', category: 'Cozinha', price: 3500},
    {name: 'Grill Elétrico', category: 'Cozinha', price: 250},
    {name: 'Guarda-Roupa 3 Portas', category: 'Quarto', price: 1800},
    {name: 'Guarda-Roupa Infantil', category: 'Quarto', price: 1000},
    {name: 'Halteres', category: 'Esportes', price: 200},
    {name: 'Home Theater', category: 'Eletrônicos', price: 2000},
    {name: 'Impressora', category: 'Escritório', price: 800},
    {name: 'Impressora 3D', category: 'Escritório', price: 2500},
    {name: 'Janela de Alumínio', category: 'Construção', price: 600},
    {name: 'Jogo de Cama', category: 'Quarto', price: 200},
    {name: 'Jogo de Soquetes', category: 'Ferramentas', price: 300},
    {name: 'Jogo de Talheres', category: 'Cozinha', price: 200},
    {name: 'Lavadora de Alta Pressão', category: 'Limpeza', price: 600},
    {name: 'Lava-Louças', category: 'Cozinha', price: 2500},
    {name: 'Lava e Seca', category: 'Lavanderia', price: 3000},
    {name: 'Lâmpada LED', category: 'Iluminação', price: 30},
    {name: 'Luminária de Mesa', category: 'Escritório', price: 150},
    {name: 'Máquina de Costura', category: 'Escritório', price: 800},
    {name: 'Máquina de Lavar', category: 'Lavanderia', price: 2000},
    {name: 'Máquina de Secar', category: 'Lavanderia', price: 2500},
    {name: 'Micro-ondas', category: 'Cozinha', price: 500},
    {name: 'Mochila', category: 'Esportes', price: 300},
    {name: 'Mop Spray', category: 'Limpeza', price: 200},
    {name: 'Notebook', category: 'Eletrônicos', price: 3500},
    {name: 'Organizador de Sapatos', category: 'Quarto', price: 200},
    {name: 'Panela de Pressão', category: 'Cozinha', price: 150},
    {name: 'Parafusadeira', category: 'Ferramentas', price: 300},
    {name: 'Piscina Inflável', category: 'Jardim', price: 500},
    {name: 'Pneu de Bicicleta', category: 'Esportes', price: 100},
    {name: 'Poltrona', category: 'Sala de Estar', price: 800},
    {name: 'Poltrona de Amamentação', category: 'Quarto', price: 700},
    {name: 'Porta de Madeira', category: 'Construção', price: 400},
    {name: 'Purificador de Água', category: 'Cozinha', price: 700},
    {name: 'Rádio Portátil', category: 'Eletrônicos', price: 100},
    {name: 'Refrigerador', category: 'Cozinha', price: 3000},
    {name: 'Rolo de Pintura', category: 'Ferramentas', price: 50},
    {name: 'Secador de Cabelos', category: 'Banheiro', price: 150},
    {name: 'Sofá 3 Lugares', category: 'Sala de Estar', price: 2000},
    {name: 'Tablet', category: 'Eletrônicos', price: 2500},
    {name: 'Tapete de Sala', category: 'Sala de Estar', price: 800},
    {name: 'Torneira Elétrica', category: 'Banheiro', price: 150},
    {name: 'TV LED 50"', category: 'Eletrônicos', price: 3000},
    {name: 'Varal de Chão', category: 'Lavanderia', price: 100},
    {name: 'Ventilador de Mesa', category: 'Climatização', price: 200},
    {name: 'Videogame', category: 'Eletrônicos', price: 3000},
    {name: 'Violão', category: 'Esportes', price: 500},
    {name: 'Volante para Videogame', category: 'Eletrônicos', price: 500}
];

function displayProducts(filteredProducts) {
    const productTableBody = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    const resultsSpan = document.getElementById('results');
    productTableBody.innerHTML = '';


    if(filteredProducts.length <= 1) {
        resultsSpan.textContent = `${filteredProducts.length} resultado`;
    } else {
        resultsSpan.textContent = `${filteredProducts.length} resultados`;
    }

    if (filteredProducts.length === 0) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 3; 
        cell.textContent = "Não há produtos correspondentes";
        cell.style.textAlign = 'center'; 
        row.appendChild(cell);
        productTableBody.appendChild(row);
    } else {
        filteredProducts.forEach(product => {
            const row = document.createElement('tr');
    
            const nameCell = document.createElement('td');
            nameCell.textContent = product.name;
            row.appendChild(nameCell);
    
            const categoryCell = document.createElement('td');
            categoryCell.textContent = product.category;
            row.appendChild(categoryCell);
    
            const priceCell = document.createElement('td');
            priceCell.textContent = `R$ ${product.price}`;
            row.appendChild(priceCell);
    
            productTableBody.appendChild(row);
        });
    }
}

function filterProducts(criteria) {
    const filteredProducts = products.filter(product => {
        const lowerCaseCriteria = criteria.toLowerCase();
        const isNameMatch = product.name.toLowerCase().includes(lowerCaseCriteria);
        const isCategoryMatch = product.category.toLowerCase().includes(lowerCaseCriteria);
        const isPriceMatch = product.price <= parseFloat(criteria);
        return isNameMatch || isCategoryMatch || isPriceMatch;
    });
    displayProducts(filteredProducts);
}

document.getElementById('filterButton').addEventListener('click', () => {
    const filterInput = document.getElementById('filterInput').value;
    filterProducts(filterInput);
});

displayProducts(products);