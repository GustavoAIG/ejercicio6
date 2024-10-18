const carro = [];
const descuento1 = 3000;
const descuento2 = 0.10;
const tasaIGV = 0.18;

function añadirProducto(nombre, precio) {
    carro.push({ nombre, precio });
    calcularTotal();
}

function eliminarProducto(index) {
    carro.splice(index, 1);
    calcularTotal();
}

function calcularTotal() {
    const tbody = document.querySelector('#carro tbody');
    tbody.innerHTML = '';

    let subtotal1 = 0;

    carro.forEach((producto, index) => {
        subtotal1 += producto.precio; // Sumar el precio de cada producto
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td><button onclick="eliminarProducto(${index})">Eliminar Producto</button></td>
        `;
        tbody.appendChild(fila);
    });

    let descuento = 0;
    if (subtotal1 > descuento1) {
        descuento = subtotal1 * descuento2; // Calcular descuento si aplica
    }

    const subtotal2 = subtotal1 - descuento; 
    const igvCalculado = subtotal2 * tasaIGV; // Calcular IGV
    const total = subtotal2 + igvCalculado; // Calcular total

    document.getElementById('subtotal1').innerText = `Subtotal 1: $${subtotal1.toFixed(2)}`;
    document.getElementById('descuento').innerText = `Descuento: $${descuento.toFixed(2)}`;
    document.getElementById('subtotal2').innerText = `Subtotal 2: $${subtotal2.toFixed(2)}`;
    document.getElementById('igv').innerText = `IGV (18%): $${igvCalculado.toFixed(2)}`;
    document.getElementById('total').innerText = `Total a Pagar: $${total.toFixed(2)}`;
}
