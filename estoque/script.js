// script.js
document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const productName = document.getElementById('product-name').value;
    const productQuantity = document.getElementById('product-quantity').value;
    
    if (productName && productQuantity) {
        addProductToTable(productName, productQuantity);
        document.getElementById('add-product-form').reset();
    }
});

function addProductToTable(name, quantity) {
    const tableBody = document.querySelector('#stock-table tbody');
    const newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${quantity}</td>
        <td>
            <button onclick="editProduct(this)">Editar</button>
            <button onclick="deleteProduct(this)">Excluir</button>
        </td>
    `;
    
    tableBody.appendChild(newRow);
}

function editProduct(button) {
    const row = button.closest('tr');
    const cells = row.querySelectorAll('td');
    
    const newName = prompt("Editar nome do produto:", cells[0].textContent);
    const newQuantity = prompt("Editar quantidade:", cells[1].textContent);
    
    if (newName !== null && newQuantity !== null) {
        cells[0].textContent = newName;
        cells[1].textContent = newQuantity;
    }
}

function deleteProduct(button) {
    const row = button.closest('tr');
    row.remove();
}