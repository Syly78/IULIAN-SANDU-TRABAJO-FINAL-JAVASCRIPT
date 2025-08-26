// JavaScript para calcular el presupuesto dinámicamente
const form = document.getElementById('budget-form');
const productSelect = document.getElementById('product');
const extras = Array.from(form.querySelectorAll('input[name="extra"]'));
const deadlineInput = document.getElementById('deadline');
const totalOutput = document.getElementById('total');

const calculateTotal = () => {
    let total = 0;

    // Sumar precio del producto
    const selectedProduct = productSelect.options[productSelect.selectedIndex];
    total += parseFloat(selectedProduct.dataset.price);

    // Sumar precio de extras seleccionados
    extras.forEach(extra => {
        if (extra.checked) {
            total += parseFloat(extra.dataset.price);
        }
    });

    // Aplicar descuento según el plazo
    const deadline = parseInt(deadlineInput.value);
    if (deadline) {
        total -= total * (deadline / 100); // Ejemplo: 1% descuento por cada día
    }

    totalOutput.textContent = `${total.toFixed(2)}€`;
};

// Añadir eventos de cambio
productSelect.addEventListener('change', calculateTotal);
extras.forEach(extra => extra.addEventListener('change', calculateTotal));
deadlineInput.addEventListener('input', calculateTotal);

