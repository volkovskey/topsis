const products = {
  scooters: [
    {
      id: 1,
      brand: "Xiaomi",
      model: "Mi Electric Scooter 3",
      wheel_size: "8.5",
      motor_power: "300",
      battery_capacity: "7650",
      range: "30",
      top_speed: "25",
      weight: "13.2",
      foldable: "так",
      suspension: "ні",
      brake_type: "дискові",
      tire_type: "пневматичні",
      price: "18684",
      warranty: "1",
      customer_rating: "4.5"
    },
    {
      id: 2,
      brand: "Xiaomi",
      model: "Electric Scooter 4",
      wheel_size: "10",
      motor_power: "600",
      battery_capacity: "7650",
      range: "35",
      top_speed: "25",
      weight: "17.2",
      foldable: "так",
      suspension: "ні",
      brake_type: "дискові",
      tire_type: "пневматичні",
      price: "24912",
      warranty: "1",
      customer_rating: "4.6"
    },
    {
      id: 3,
      brand: "Xiaomi",
      model: "Electric Scooter 4 Pro",
      wheel_size: "10",
      motor_power: "700",
      battery_capacity: "12400",
      range: "55",
      top_speed: "25",
      weight: "17",
      foldable: "так",
      suspension: "ні",
      brake_type: "дискові",
      tire_type: "пневматичні",
      price: "29064",
      warranty: "1",
      customer_rating: "4.7"
    },
    {
      id: 4,
      brand: "Xiaomi",
      model: "Electric Scooter 5 Max",
      wheel_size: "10",
      motor_power: "1000",
      battery_capacity: "477",
      range: "60",
      top_speed: "25",
      weight: "18",
      foldable: "так",
      suspension: "так",
      brake_type: "дискові",
      tire_type: "пневматичні",
      price: "33216",
      warranty: "1",
      customer_rating: "4.8"
    },
    {
      id: 5,
      brand: "Segway",
      model: "Ninebot KickScooter Max G30P",
      wheel_size: "10",
      motor_power: "350",
      battery_capacity: "551",
      range: "65",
      top_speed: "30",
      weight: "19",
      foldable: "так",
      suspension: "ні",
      brake_type: "барабанні",
      tire_type: "пневматичні",
      price: "29064",
      warranty: "1",
      customer_rating: "4.7"
    },
    {
      id: 6,
      brand: "Gotrax",
      model: "XR Ultra",
      wheel_size: "8.5",
      motor_power: "300",
      battery_capacity: "255",
      range: "29",
      top_speed: "25",
      weight: "12",
      foldable: "так",
      suspension: "ні",
      brake_type: "дискові",
      tire_type: "пневматичні",
      price: "20760",
      warranty: "1",
      customer_rating: "4.4"
    },
    {
      id: 7,
      brand: "Hiboy",
      model: "S2 Pro",
      wheel_size: "10",
      motor_power: "350",
      battery_capacity: "260",
      range: "25",
      top_speed: "25",
      weight: "16.5",
      foldable: "так",
      suspension: "так",
      brake_type: "дискові",
      tire_type: "суцільні",
      price: "16608",
      warranty: "1",
      customer_rating: "4.5"
    },
    {
      id: 8,
      brand: "Kaabo",
      model: "Mantis",
      wheel_size: "10",
      motor_power: "1000",
      battery_capacity: "840",
      range: "60",
      top_speed: "60",
      weight: "27",
      foldable: "так",
      suspension: "так",
      brake_type: "дискові",
      tire_type: "пневматичні",
      price: "41520",
      warranty: "1",
      customer_rating: "4.7"
    }
  ],
  phones: [
    {
      id: 101,
      brand: "Samsung",
      model: "Galaxy S24 Ultra",
      screen_size: "6.8",
      resolution: "1440x3120",
      processor: "Snapdragon 8 Gen 3",
      ram: "12",
      storage: "256",
      main_camera: "200",
      rear_camera: "200 + 50 + 10 + 12",
      front_camera: "12",
      battery_capacity: "5000",
      weight: "233",
      os: "Android 14",
      connectivity: "5G",
      price: "41458.48",
      warranty: "2",
      customer_rating: "4.8"
    },
    {
      id: 102,
      brand: "Apple",
      model: "iPhone 16 Pro",
      screen_size: "6.3",
      resolution: "2856x1290",
      processor: "A18 Pro",
      ram: "8",
      storage: "256",
      main_camera: "48",
      rear_camera: "48 + 48 + 12",
      front_camera: "12",
      battery_capacity: "3582",
      weight: "194",
      os: "iOS 18",
      connectivity: "5G",
      price: "41458.48",
      warranty: "1",
      customer_rating: "4.8"
    },
    {
      id: 103,
      brand: "Google",
      model: "Pixel 9 Pro",
      screen_size: "6.3",
      resolution: "2856x1280",
      processor: "Tensor G4",
      ram: "16",
      storage: "256",
      main_camera: "50",
      rear_camera: "50 + 48 + 48",
      front_camera: "42",
      battery_capacity: "4700",
      weight: "213",
      os: "Android 15",
      connectivity: "5G",
      price: "41458.48",
      warranty: "2",
      customer_rating: "4.7"
    },
    {
      id: 104,
      brand: "Samsung",
      model: "Galaxy Z Flip6",
      screen_size: "6.7",
      resolution: "2640x1080",
      processor: "Snapdragon 8 Gen 3",
      ram: "12",
      storage: "256",
      main_camera: "50",
      rear_camera: "50 + 12",
      front_camera: "10",
      battery_capacity: "4000",
      weight: "187",
      os: "Android 14",
      connectivity: "5G",
      price: "41458.48",
      warranty: "2",
      customer_rating: "4.6"
    },
    {
      id: 105,
      brand: "Sony",
      model: "Xperia 1 VI",
      screen_size: "6.5",
      resolution: "3840x1644",
      processor: "Snapdragon 8 Gen 3",
      ram: "12",
      storage: "256",
      main_camera: "48",
      rear_camera: "48 + 12 + 12",
      front_camera: "12",
      battery_capacity: "5000",
      weight: "187",
      os: "Android 14",
      connectivity: "5G",
      price: "41458.48",
      warranty: "1",
      customer_rating: "4.7"
    },
    {
      id: 106,
      brand: "Motorola",
      model: "Razr 50 Ultra",
      screen_size: "6.9",
      resolution: "2640x1080",
      processor: "Snapdragon 8s Gen 3",
      ram: "12",
      storage: "256",
      main_camera: "50",
      rear_camera: "50 + 50",
      front_camera: "32",
      battery_capacity: "4000",
      weight: "188",
      os: "Android 14",
      connectivity: "5G",
      price: "37322.48",
      warranty: "1",
      customer_rating: "4.6"
    },
    {
      id: 107,
      brand: "ZTE",
      model: "nubia Red Magic 9S Pro",
      screen_size: "6.8",
      resolution: "2480x1116",
      processor: "Snapdragon 8 Gen 3",
      ram: "16",
      storage: "256",
      main_camera: "50",
      rear_camera: "50 + 50 + 2",
      front_camera: "16",
      battery_capacity: "6500",
      weight: "228",
      os: "Android 14",
      connectivity: "5G",
      price: "33172.48",
      warranty: "1",
      customer_rating: "4.8"
    },
    {
      id: 108,
      brand: "Asus",
      model: "Zenfone 11 Ultra",
      screen_size: "6.78",
      resolution: "2400x1080",
      processor: "Snapdragon 8 Gen 3",
      ram: "16",
      storage: "256",
      main_camera: "50",
      rear_camera: "50 + 13 + 32",
      front_camera: "32",
      battery_capacity: "5500",
      weight: "248",
      os: "Android 14",
      connectivity: "5G",
      price: "33172.48",
      warranty: "2",
      customer_rating: "4.7"
    },
    {
      id: 109,
      brand: "Google",
      model: "Pixel 9a",
      screen_size: "6.3",
      resolution: "2424x1080",
      processor: "Tensor G4",
      ram: "8",
      storage: "128",
      main_camera: "48",
      rear_camera: "48 + 13",
      front_camera: "13",
      battery_capacity: "5100",
      weight: "189",
      os: "Android 15",
      connectivity: "5G",
      price: "20714.48",
      warranty: "2",
      customer_rating: "4.6"
    },
    {
      id: 110,
      brand: "OnePlus",
      model: "13R",
      screen_size: "6.78",
      resolution: "2780x1264",
      processor: "Snapdragon 8 Gen 3",
      ram: "12",
      storage: "256",
      main_camera: "50",
      rear_camera: "50 + 50 + 8",
      front_camera: "16",
      battery_capacity: "6000",
      weight: "203",
      os: "Android 15",
      connectivity: "5G",
      price: "24874.48",
      warranty: "2",
      customer_rating: "4.7"
    }
  ]
};

const characteristics = {
  scooters: [
    { key: "brand", label: "Бренд" },
    { key: "model", label: "Модель" },
    { key: "wheel_size", label: "Розмір коліс, дюйми" },
    { key: "motor_power", label: "Потужність двигуна, Вт" },
    { key: "battery_capacity", label: "Ємність батареї, Вт·год" },
    { key: "range", label: "Запас ходу, км" },
    { key: "top_speed", label: "Максимальна швидкість, км/год" },
    { key: "weight", label: "Вага, кг" },
    { key: "foldable", label: "Складний" },
    { key: "suspension", label: "Підвіска" },
    { key: "brake_type", label: "Тип гальм" },
    { key: "tire_type", label: "Тип шин" },
    { key: "price", label: "Ціна, UAH" },
    { key: "warranty", label: "Гарантія, роки" },
    { key: "customer_rating", label: "Оцінка користувачів" }
  ],
  phones: [
    { key: "brand", label: "Бренд" },
    { key: "model", label: "Модель" },
    { key: "screen_size", label: "Розмір екрану, дюйми" },
    { key: "resolution", label: "Роздільна здатність" },
    { key: "processor", label: "Процесор" },
    { key: "ram", label: "Оперативна пам'ять, ГБ" },
    { key: "storage", label: "Внутрішня пам'ять, ГБ" },
    { key: "main_camera", label: "Основна камера, МП" },
    { key: "rear_camera", label: "Задня камера, МП" },
    { key: "front_camera", label: "Фронтальна камера, МП" },
    { key: "battery_capacity", label: "Ємність батареї, мА·год" },
    { key: "weight", label: "Вага, г" },
    { key: "os", label: "Операційна система" },
    { key: "connectivity", label: "Підключення" },
    { key: "price", label: "Ціна, UAH" },
    { key: "warranty", label: "Гарантія, роки" },
    { key: "customer_rating", label: "Оцінка користувачів" }
  ]
};

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
  generateComparisonTable(selectedProducts, currentCategory);
});

displayProducts(currentCategory);