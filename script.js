// Array para armazenar os itens
let items = [];

// Função para adicionar um item
function addItem() {
    const name = document.getElementById("item-name").value;
    const quantity = parseInt(document.getElementById("item-quantity").value);
    const price = parseFloat(document.getElementById("item-price").value);
    const category = document.getElementById("item-category").value;

    const total = quantity * price;
    items.push({ name, quantity, price, total, category });

    updateTable();
    calculateTotal();
}

function updateTable() {
    const tbody = document.querySelector('#table-content tbody');
    tbody.innerHTML = '';

    items.forEach((item, index) => {

        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="column-name">${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>${item.total.toFixed(2)}</td>
            <td>${item.category}</td>
            <td><button onclick="removeItem(${index})" style="font-size: 1.3rem;"> <i class="fa-solid fa-xmark"></i> </button></td>
        `;

        tbody.appendChild(row);
    });
}

function removeItem(index) {
    items.splice(index, 1);
    updateTable();
    calculateTotal();
}

function calculateTotal() {
    let total = items.reduce((sum, item) => sum + item.total, 0);

    document.getElementById('total-amount').textContent = `Total: R$ ${total.toFixed(2)}`;
}

function applyDiscount() {
    const discount = parseFloat(document.getElementById('discount').value);
    let total = items.reduce((sum, item) => sum + item.total, 0);

    const discountedTotal = total * (discount / 100);
    total -= discountedTotal;

    document.getElementById('total-amount').textContent = `Total: R$ ${total.toFixed(2)}`;

} 

// Adiciona função para o botão "Entre em Contato"
const btnNav = document.querySelector('.btn-nav').addEventListener('click', () => {
    window.location.href = 'https://wa.me/5511963101372?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento?';

})
