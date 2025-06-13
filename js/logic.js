let currentCategory = "scooters";
let priorityHistory = JSON.parse(localStorage.getItem("priorityHistory")) || [];

// Мапінг числових значень на текстові
const valueMappings = {
  scooters: {
    foldable: { 1: "так", 0: "ні" },
    suspension: { 1: "так", 0: "ні" },
    brake_type: { 2: "дискові", 1: "барабанні", 0: "електронні" },
    tire_type: { 1: "пневматичні", 0: "суцільні" }
  },
  phones: {}
};

// Відображення продуктів
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
    checkbox.addEventListener("change", () => togglePrioritySection());
    const label = document.createElement("label");
    label.htmlFor = `product-${product.id}`;
    label.textContent = `${product.brand} ${product.model}`;
    div.appendChild(checkbox);
    div.appendChild(label);
    productList.appendChild(div);
  });
  togglePrioritySection();
}

// Показ/приховування секції пріоритетів
function togglePrioritySection() {
  const selectedIds = Array.from(document.querySelectorAll("#product-list input:checked")).map(cb => cb.value);
  const prioritySection = document.getElementById("priority-select");
  if (selectedIds.length >= 2) {
    prioritySection.classList.remove("hidden");
    displayPriorityCheckboxes(currentCategory);
    const selectedProducts = products[currentCategory].filter(product => selectedIds.includes(product.id.toString()));
    if (priorityHistory.length > 0) {
      recommendDefault(selectedProducts, currentCategory);
    }
  } else {
    prioritySection.classList.add("hidden");
    document.getElementById("topsis-results").innerHTML = "";
    document.getElementById("weights-info").innerHTML = "";
  }
}

// Відображення чекбоксів для вибору характеристик
function displayPriorityCheckboxes(category) {
  const checkboxesContainer = document.getElementById("priority-checkboxes");
  checkboxesContainer.innerHTML = "";
  characteristics[category].forEach(char => {
    if (char.recommendable) {
      const div = document.createElement("div");
      div.className = "priority-checkbox";
      div.innerHTML = `
        <input type="checkbox" id="checkbox-${char.key}" data-key="${char.key}">
        <label for="checkbox-${char.key}">${char.label}</label>
      `;
      checkboxesContainer.appendChild(div);
    }
  });
  document.querySelectorAll("#priority-checkboxes input").forEach(input => {
    input.addEventListener("change", () => updatePriorityList(category));
  });
  updatePriorityList(category);
}

// Оновлення списку пріоритетів
function updatePriorityList(category) {
  const priorityList = document.getElementById("priority-list");
  priorityList.innerHTML = "";
  const selectedCheckboxes = Array.from(document.querySelectorAll("#priority-checkboxes input:checked"));
  selectedCheckboxes.forEach(cb => {
    const char = characteristics[category].find(c => c.key === cb.dataset.key);
    const li = document.createElement("li");
    li.className = "priority-item";
    li.dataset.key = char.key;
    li.innerHTML = `<label>${char.label}</label>`;
    priorityList.appendChild(li);
  });

  $(priorityList).sortable({
    update: () => recommendUser(category)
  });

  recommendUser(category);
}

// Генерація таблиці порівняння з підсвіткою
function generateComparisonTable(selectedProducts, category, recommendedId = null, isDefault = false) {
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
    if (recommendedId && product.id.toString() === recommendedId) {
      th.classList.add(isDefault ? "recommended-default" : "recommended-user");
    }
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  characteristics[category].forEach(char => {
    const values = selectedProducts.map(product => {
      const rawValue = product[char.key];
      return valueMappings[category][char.key] ? valueMappings[category][char.key][rawValue] || rawValue : rawValue;
    });
    const allSame = values.every(val => val === values[0]);

    if (hideSame && allSame) return;

    const row = document.createElement("tr");
    const charCell = document.createElement("td");
    charCell.textContent = char.label;
    row.appendChild(charCell);
    selectedProducts.forEach((product, index) => {
      const cell = document.createElement("td");
      cell.textContent = values[index];
      if (recommendedId && product.id.toString() === recommendedId) {
        cell.classList.add(isDefault ? "recommended-default" : "recommended-user");
      }
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });

  const buyRow = document.createElement("tr");
  buyRow.appendChild(document.createElement("td"));
  selectedProducts.forEach(product => {
    const cell = document.createElement("td");
    const button = document.createElement("button");
    button.className = "buy-button";
    button.textContent = "Купити";
    button.addEventListener("click", () => savePriorities(product.id));
    cell.appendChild(button);
    if (recommendedId && product.id.toString() === recommendedId) {
      cell.classList.add(isDefault ? "recommended-default" : "recommended-user");
    }
    buyRow.appendChild(cell);
  });
  tbody.appendChild(buyRow);

  table.appendChild(thead);
  table.appendChild(tbody);
  tableContainer.appendChild(table);
}

// Рекомендація за замовчуванням
function recommendDefault(selectedProducts, category) {
  if (priorityHistory.length === 0) return;

  const avgWeights = characteristics[category]
    .filter(char => char.recommendable)
    .map(char => {
      const sum = priorityHistory.reduce((acc, history) => {
        const priority = history.find(p => p.key === char.key);
        return acc + (priority ? priority.priority : 1);
      }, 0);
      return { key: char.key, priority: sum / priorityHistory.length };
    });

  const recommended = topsis(selectedProducts, avgWeights, characteristics[category]);
  generateComparisonTable(selectedProducts, category, recommended.id.toString(), true);
  displayWeightsInfo(category, [], avgWeights);
  displayTopsisResults(selectedProducts, avgWeights, category, recommended);
}

// Рекомендація користувача
function recommendUser(category) {
  const selectedIds = Array.from(document.querySelectorAll("#product-list input:checked")).map(cb => cb.value);
  const selectedProducts = products[category].filter(product => selectedIds.includes(product.id.toString()));

  const priorityItems = Array.from(document.querySelectorAll("#priority-list .priority-item"));
  const totalCharacteristics = characteristics[category].filter(char => char.recommendable).length;
  const selectedPriorities = priorityItems.map((item, index) => ({
    key: item.dataset.key,
    priority: totalCharacteristics - index
  }));

  const priorities = characteristics[category]
    .filter(char => char.recommendable)
    .map(char => {
      const selected = selectedPriorities.find(p => p.key === char.key);
      return selected || { key: char.key, priority: 1 };
    });

  const recommended = topsis(selectedProducts, priorities, characteristics[category]);
  generateComparisonTable(selectedProducts, category, recommended.id.toString(), false);

  const avgWeights = priorityHistory.length > 0 ? characteristics[category]
    .filter(char => char.recommendable)
    .map(char => {
      const sum = priorityHistory.reduce((acc, history) => {
        const priority = history.find(p => p.key === char.key);
        return acc + (priority ? priority.priority : 1);
      }, 0);
      return { key: char.key, priority: sum / priorityHistory.length };
    }) : [];

  displayWeightsInfo(category, priorities, avgWeights);
  displayTopsisResults(selectedProducts, priorities, category, recommended);
}

// Збереження пріоритетів при натисканні "Купити"
function savePriorities(productId) {
  const priorityItems = Array.from(document.querySelectorAll("#priority-list .priority-item"));
  const totalCharacteristics = characteristics[currentCategory].filter(char => char.recommendable).length;
  const selectedPriorities = priorityItems.map((item, index) => ({
    key: item.dataset.key,
    priority: totalCharacteristics - index
  }));

  const priorities = characteristics[currentCategory]
    .filter(char => char.recommendable)
    .map(char => {
      const selected = selectedPriorities.find(p => p.key === char.key);
      return selected || { key: char.key, priority: 1 };
    });

  priorityHistory.push(priorities);
  localStorage.setItem("priorityHistory", JSON.stringify(priorityHistory));
  alert("Пріоритети збережено!");
}

// Виведення інформації про ваги
function displayWeightsInfo(category, userWeights, avgWeights) {
  const weightsInfo = document.getElementById("weights-info");
  weightsInfo.innerHTML = `
    <h3>Інформація про ваги (Збережено ${priorityHistory.length} виборів)</h3>
    <table>
      <tr><th>Характеристика</th><th>Вага користувача</th><th>Середня вага</th></tr>
      ${characteristics[category].filter(char => char.recommendable).map(char => `
        <tr>
          <td>${char.label}</td>
          <td>${userWeights.find(w => w.key === char.key)?.priority || 1}</td>
          <td>${avgWeights.find(w => w.key === char.key)?.priority.toFixed(2) || "-"}</td>
        </tr>
      `).join('')}
    </table>
  `;
}

// Виведення результатів TOPSIS
function displayTopsisResults(products, weights, category, recommended) {
  const resultsContainer = document.getElementById("topsis-results");

  // Нормалізація
  const normalized = products.map(product => {
    const normalizedProduct = {};
    characteristics[category].forEach(char => {
      if (char.recommendable && typeof product[char.key] === "number") {
        const values = products.map(p => p[char.key]);
        const min = Math.min(...values);
        const max = Math.max(...values);
        if (max === min) {
          normalizedProduct[char.key] = 1;
        } else if (char.direction === "higher") {
          normalizedProduct[char.key] = (product[char.key] - min) / (max - min);
        } else {
          normalizedProduct[char.key] = (max - product[char.key]) / (max - min);
        }
      } else {
        normalizedProduct[char.key] = product[char.key];
      }
    });
    return normalizedProduct;
  });

  // Вагова матриця (зважені нормалізовані значення)
  const weightedNormalized = normalized.map(product => {
    const weightedProduct = {};
    weights.forEach(weight => {
      weightedProduct[weight.key] = product[weight.key] * weight.priority;
    });
    return weightedProduct;
  });

  // Ідеальна та антиідеальна альтернативи
  const ideal = {};
  const antiIdeal = {};
  weights.forEach(weight => {
    const values = weightedNormalized.map(p => p[weight.key]);
    ideal[weight.key] = Math.max(...values);
    antiIdeal[weight.key] = Math.min(...values);
  });

  // Відстані до ідеалу та антиідеалу
  const distances = weightedNormalized.map(product => {
    let distanceToIdeal = 0;
    let distanceToAntiIdeal = 0;
    weights.forEach(weight => {
      const diffIdeal = product[weight.key] - ideal[weight.key];
      const diffAntiIdeal = product[weight.key] - antiIdeal[weight.key];
      distanceToIdeal += Math.pow(diffIdeal, 2);
      distanceToAntiIdeal += Math.pow(diffAntiIdeal, 2);
    });
    return {
      ideal: Math.sqrt(distanceToIdeal),
      antiIdeal: Math.sqrt(distanceToAntiIdeal)
    };
  });

  // Оцінки
  const scores = distances.map(d => d.antiIdeal / (d.ideal + d.antiIdeal));

  // Формування таблиці
  let tableRows = [
    `<tr><th>Характеристика</th>${products.map(p => `<th>${p.brand} ${p.model}</th>`).join('')}</tr>`
  ];

  // Нормалізовані значення
  characteristics[category].filter(char => char.recommendable).forEach(char => {
    tableRows.push(`
      <tr>
        <td>${char.label} (норм.)</td>
        ${normalized.map(n => `<td>${n[char.key].toFixed(3)}</td>`).join('')}
      </tr>
    `);
  });

  // Зважені нормалізовані значення
  characteristics[category].filter(char => char.recommendable).forEach(char => {
    tableRows.push(`
      <tr>
        <td>${char.label} (зваж.)</td>
        ${weightedNormalized.map(n => `<td>${n[char.key].toFixed(3)}</td>`).join('')}
      </tr>
    `);
  });

  // // Ідеальні та антиідеальні значення
  // tableRows.push(`
  //   <tr><td>Ідеал</td>${weights.map(w => `<td>${ideal[w.key].toFixed(3)}</td>`).join('')}</tr>
  //   <tr><td>Антиідеал</td>${weights.map(w => `<td>${antiIdeal[w.key].toFixed(3)}</td>`).join('')}</tr>
  // `);

  // Відстані та оцінки
  tableRows.push(`
    <tr><td>Відстань до ідеалу</td>${distances.map(d => `<td>${d.ideal.toFixed(3)}</td>`).join('')}</tr>
    <tr><td>Відстань до антиідеалу</td>${distances.map(d => `<td>${d.antiIdeal.toFixed(3)}</td>`).join('')}</tr>
    <tr><td>Оцінка</td>${scores.map(s => `<td>${s.toFixed(3)}</td>`).join('')}</tr>
  `);

  const tableHTML = `
    <h3>Результати розрахунків TOPSIS</h3>
    <table>
      ${tableRows.join('')}
    </table>
  `;

  resultsContainer.innerHTML = tableHTML;
}

// Обробники подій
document.getElementById("category-select").addEventListener("change", function() {
  currentCategory = this.value;
  displayProducts(currentCategory);
  document.getElementById("comparison-table").innerHTML = "";
  document.getElementById("topsis-results").innerHTML = "";
  document.getElementById("weights-info").innerHTML = "";
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
  generateComparisonTable(selectedProducts, currentCategory);
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

document.getElementById("clear-storage").addEventListener("click", function() {
  localStorage.removeItem("priorityHistory");
  priorityHistory = [];
  alert("Збережені дані очищено!");
  const selectedIds = Array.from(document.querySelectorAll("#product-list input:checked")).map(cb => cb.value);
  if (selectedIds.length >= 2) {
    const selectedProducts = products[currentCategory].filter(product => selectedIds.includes(product.id.toString()));
    generateComparisonTable(selectedProducts, currentCategory);
    document.getElementById("weights-info").innerHTML = "";
    document.getElementById("topsis-results").innerHTML = "";
  }
});

displayProducts(currentCategory);