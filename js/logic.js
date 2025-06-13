let currentCategory = "scooters";

function displayProducts(category) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products[category].forEach(product => {
    const div = document.createElement("div");
    div.className = "product-item";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = product.id;
    checkbox.id = `product-${product.id}`;
    const label = document.createElement("label");
    label.htmlFor = `product-${product.id}`;
    label.textContent = `${product.brand} ${product.model}`;
    div.appendChild(checkbox);
    div.appendChild(label);
    productList.appendChild(div);
  });
}

function generateComparisonTable(selectedProducts, category) {
  const tableContainer = document.getElementById("comparison-table");
  tableContainer.innerHTML = "";
  if (selectedProducts.length === 0) return;

  const hideSame = document.getElementById("hide-same").checked;

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const headerRow = document.createElement("tr");
  headerRow.appendChild(document.createElement("th"));
  selectedProducts.forEach(product => {
    const th = document.createElement("th");
    th.textContent = `${product.brand} ${product.model}`;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  characteristics[category].forEach(char => {
    const values = selectedProducts.map(product => product[char.key]);
    const allSame = values.every(val => val === values[0]);

    if (hideSame && allSame) {
      return;
    }

    const row = document.createElement("tr");
    const charCell = document.createElement("td");
    charCell.textContent = char.label;
    row.appendChild(charCell);
    selectedProducts.forEach(product => {
      const cell = document.createElement("td");
      cell.textContent = product[char.key];
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  tableContainer.appendChild(table);
}

document.getElementById("category-select").addEventListener("change", function() {
  currentCategory = this.value;
  displayProducts(currentCategory);
  document.getElementById("comparison-table").innerHTML = "";
});

document.getElementById("compare-button").addEventListener("click", function() {
  const selectedIds = Array.from(document.querySelectorAll("#product-list input:checked"))
    .map(cb => cb.value);
  if (selectedIds.length < 2) {
    alert("Будь ласка, оберіть щонайменше два продукти для порівняння.");
    return;
  }
  const selectedProducts = products[currentCategory].filter(product => 
    selectedIds.includes(product.id.toString())
  );
  generateComparisonTable(selectedProducts, (currentCategory));
});

document.getElementById("hide-same").addEventListener("change", function() {
  const selectedIds = Array.from(document.querySelectorAll("#product-list input:checked"))
    .map(cb => cb.value);
  if (selectedIds.length >= 2) {
    const selectedProducts = products[currentCategory].filter(product => 
      selectedIds.includes(product.id.toString())
    );
    generateComparisonTable(selectedProducts, currentCategory);
  }
});

displayProducts(currentCategory);