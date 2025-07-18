const characteristics = {
  scooters: [
    { key: "brand", label: "Бренд", recommendable: false },
    { key: "model", label: "Модель", recommendable: false },
    { key: "wheel_size", label: "Розмір коліс, дюйми", recommendable: true, direction: "higher" },
    { key: "motor_power", label: "Потужність двигуна, Вт", recommendable: true, direction: "higher" },
    { key: "battery_capacity", label: "Ємність батареї, Вт·год", recommendable: true, direction: "higher" },
    { key: "range", label: "Запас ходу, км", recommendable: true, direction: "higher" },
    { key: "top_speed", label: "Максимальна швидкість, км/год", recommendable: true, direction: "higher" },
    { key: "weight", label: "Вага, кг", recommendable: true, direction: "lower" },
    { key: "foldable", label: "Складний", recommendable: true, direction: "higher" }, // 1 - так, 0 - ні
    { key: "suspension", label: "Підвіска", recommendable: true, direction: "higher" }, // 1 - так, 0 - ні
    { key: "brake_type", label: "Тип гальм", recommendable: true, direction: "higher" }, // дискові - 2, барабанні - 1, електронні - 0
    { key: "tire_type", label: "Тип шин", recommendable: true, direction: "higher" }, // пневматичні - 1, суцільні - 0
    { key: "price", label: "Ціна, UAH", recommendable: true, direction: "lower" },
    { key: "warranty", label: "Гарантія, роки", recommendable: true, direction: "higher" },
    { key: "customer_rating", label: "Оцінка користувачів", recommendable: true, direction: "higher" }
  ],
  phones: [
    { key: "brand", label: "Бренд", recommendable: false },
    { key: "model", label: "Модель", recommendable: false },
    { key: "screen_size", label: "Розмір екрану, дюйми", recommendable: true, direction: "higher" },
    { key: "resolution", label: "Роздільна здатність", recommendable: false },
    { key: "processor", label: "Процесор", recommendable: false },
    { key: "ram", label: "Оперативна пам'ять, ГБ", recommendable: true, direction: "higher" },
    { key: "storage", label: "Внутрішня пам'ять, ГБ", recommendable: true, direction: "higher" },
    { key: "main_camera", label: "Основна камера, МП", recommendable: true, direction: "higher" },
    { key: "rear_camera", label: "Задня камера, МП", recommendable: false },
    { key: "front_camera", label: "Фронтальна камера, МП", recommendable: true, direction: "higher" },
    { key: "battery_capacity", label: "Ємність батареї, мА·год", recommendable: true, direction: "higher" },
    { key: "weight", label: "Вага, г", recommendable: true, direction: "lower" },
    { key: "os", label: "Операційна система", recommendable: false },
    { key: "connectivity", label: "Підключення", recommendable: false },
    { key: "price", label: "Ціна, UAH", recommendable: true, direction: "lower" },
    { key: "warranty", label: "Гарантія, роки", recommendable: true, direction: "higher" },
    { key: "customer_rating", label: "Оцінка користувачів", recommendable: true, direction: "higher" }
  ]
};

const products = {
  scooters: [
    {
      id: 1,
      brand: "Xiaomi",
      model: "Mi Electric Scooter 3",
      wheel_size: 8.5,
      motor_power: 300,
      battery_capacity: 370,
      range: 30,
      top_speed: 25,
      weight: 13.2,
      foldable: 1, // так
      suspension: 0, // ні
      brake_type: 2, // дискові
      tire_type: 1, // пневматичні
      price: 18684,
      warranty: 1,
      customer_rating: 4.5
    },
    {
      id: 2,
      brand: "Xiaomi",
      model: "Electric Scooter 4",
      wheel_size: 10,
      motor_power: 600,
      battery_capacity: 370,
      range: 35,
      top_speed: 25,
      weight: 17.2,
      foldable: 1, // так
      suspension: 0, // ні
      brake_type: 2, // дискові
      tire_type: 1, // пневматичні
      price: 24912,
      warranty: 1,
      customer_rating: 4.6
    },
    {
      id: 3,
      brand: "Xiaomi",
      model: "Electric Scooter 4 Pro",
      wheel_size: 10,
      motor_power: 700,
      battery_capacity: 475,
      range: 55,
      top_speed: 25,
      weight: 17,
      foldable: 1, // так
      suspension: 0, // ні
      brake_type: 2, // дискові
      tire_type: 1, // пневматичні
      price: 29064,
      warranty: 1,
      customer_rating: 4.7
    },
    {
      id: 4,
      brand: "Xiaomi",
      model: "Electric Scooter 5 Max",
      wheel_size: 10,
      motor_power: 1000,
      battery_capacity: 477,
      range: 60,
      top_speed: 25,
      weight: 18,
      foldable: 1, // так
      suspension: 1, // так
      brake_type: 2, // дискові
      tire_type: 1, // пневматичні
      price: 33216,
      warranty: 1,
      customer_rating: 4.8
    },
    {
      id: 5,
      brand: "Segway",
      model: "Ninebot KickScooter Max G30P",
      wheel_size: 10,
      motor_power: 350,
      battery_capacity: 551,
      range: 65,
      top_speed: 30,
      weight: 19,
      foldable: 1, // так
      suspension: 0, // ні
      brake_type: 1, // барабанні
      tire_type: 1, // пневматичні
      price: 29064,
      warranty: 1,
      customer_rating: 4.7
    },
    {
      id: 6,
      brand: "Gotrax",
      model: "XR Ultra",
      wheel_size: 8.5,
      motor_power: 300,
      battery_capacity: 255,
      range: 29,
      top_speed: 25,
      weight: 12,
      foldable: 1, // так
      suspension: 0, // ні
      brake_type: 2, // дискові
      tire_type: 1, // пневматичні
      price: 20760,
      warranty: 1,
      customer_rating: 4.4
    },
    {
      id: 7,
      brand: "Hiboy",
      model: "S2 Pro",
      wheel_size: 10,
      motor_power: 350,
      battery_capacity: 260,
      range: 25,
      top_speed: 25,
      weight: 16.5,
      foldable: 1, // так
      suspension: 1, // так
      brake_type: 2, // дискові
      tire_type: 0, // суцільні
      price: 16608,
      warranty: 1,
      customer_rating: 4.5
    },
    {
      id: 8,
      brand: "Kaabo",
      model: "Mantis",
      wheel_size: 10,
      motor_power: 1000,
      battery_capacity: 840,
      range: 60,
      top_speed: 60,
      weight: 27,
      foldable: 1, // так
      suspension: 1, // так
      brake_type: 2, // дискові
      tire_type: 1, // пневматичні
      price: 41520,
      warranty: 1,
      customer_rating: 4.7
    }
  ],
  phones: [
    {
      id: 101,
      brand: "Samsung",
      model: "Galaxy S24 Ultra",
      screen_size: 6.8,
      resolution: "1440x3120",
      processor: "Snapdragon 8 Gen 3",
      ram: 12,
      storage: 256,
      main_camera: 200,
      rear_camera: "200 + 50 + 10 + 12",
      front_camera: 12,
      battery_capacity: 5000,
      weight: 233,
      os: "Android 14",
      connectivity: "5G",
      price: 41458.48,
      warranty: 2,
      customer_rating: 4.8
    },
    {
      id: 102,
      brand: "Apple",
      model: "iPhone 16 Pro",
      screen_size: 6.3,
      resolution: "2856x1290",
      processor: "A18 Pro",
      ram: 8,
      storage: 256,
      main_camera: 48,
      rear_camera: "48 + 48 + 12",
      front_camera: 12,
      battery_capacity: 3582,
      weight: 194,
      os: "iOS 18",
      connectivity: "5G",
      price: 41458.48,
      warranty: 1,
      customer_rating: 4.8
    },
    {
      id: 103,
      brand: "Google",
      model: "Pixel 9 Pro",
      screen_size: 6.3,
      resolution: "2856x1280",
      processor: "Tensor G4",
      ram: 16,
      storage: 256,
      main_camera: 50,
      rear_camera: "50 + 48 + 48",
      front_camera: 42,
      battery_capacity: 4700,
      weight: 213,
      os: "Android 15",
      connectivity: "5G",
      price: 41458.48,
      warranty: 2,
      customer_rating: 4.7
    },
    {
      id: 104,
      brand: "Samsung",
      model: "Galaxy Z Flip6",
      screen_size: 6.7,
      resolution: "2640x1080",
      processor: "Snapdragon 8 Gen 3",
      ram: 12,
      storage: 256,
      main_camera: 50,
      rear_camera: "50 + 12",
      front_camera: 10,
      battery_capacity: 4000,
      weight: 187,
      os: "Android 14",
      connectivity: "5G",
      price: 41458.48,
      warranty: 2,
      customer_rating: 4.6
    },
    {
      id: 105,
      brand: "Sony",
      model: "Xperia 1 VI",
      screen_size: 6.5,
      resolution: "3840x1644",
      processor: "Snapdragon 8 Gen 3",
      ram: 12,
      storage: 256,
      main_camera: 48,
      rear_camera: "48 + 12 + 12",
      front_camera: 12,
      battery_capacity: 5000,
      weight: 187,
      os: "Android 14",
      connectivity: "5G",
      price: 41458.48,
      warranty: 1,
      customer_rating: 4.7
    },
    {
      id: 106,
      brand: "Motorola",
      model: "Razr 50 Ultra",
      screen_size: 6.9,
      resolution: "2640x1080",
      processor: "Snapdragon 8s Gen 3",
      ram: 12,
      storage: 256,
      main_camera: 50,
      rear_camera: "50 + 50",
      front_camera: 32,
      battery_capacity: 4000,
      weight: 188,
      os: "Android 14",
      connectivity: "5G",
      price: 37322.48,
      warranty: 1,
      customer_rating: 4.6
    },
    {
      id: 107,
      brand: "ZTE",
      model: "nubia Red Magic 9S Pro",
      screen_size: 6.8,
      resolution: "2480x1116",
      processor: "Snapdragon 8 Gen 3",
      ram: 16,
      storage: 256,
      main_camera: 50,
      rear_camera: "50 + 50 + 2",
      front_camera: 16,
      battery_capacity: 6500,
      weight: 228,
      os: "Android 14",
      connectivity: "5G",
      price: 33172.48,
      warranty: 1,
      customer_rating: 4.8
    },
    {
      id: 108,
      brand: "Asus",
      model: "Zenfone 11 Ultra",
      screen_size: 6.78,
      resolution: "2400x1080",
      processor: "Snapdragon 8 Gen 3",
      ram: 16,
      storage: 256,
      main_camera: 50,
      rear_camera: "50 + 13 + 32",
      front_camera: 32,
      battery_capacity: 5500,
      weight: 248,
      os: "Android 14",
      connectivity: "5G",
      price: 33172.48,
      warranty: 2,
      customer_rating: 4.7
    },
    {
      id: 109,
      brand: "Google",
      model: "Pixel 9a",
      screen_size: 6.3,
      resolution: "2424x1080",
      processor: "Tensor G4",
      ram: 8,
      storage: 128,
      main_camera: 48,
      rear_camera: "48 + 13",
      front_camera: 13,
      battery_capacity: 5100,
      weight: 189,
      os: "Android 15",
      connectivity: "5G",
      price: 20714.48,
      warranty: 2,
      customer_rating: 4.6
    },
    {
      id: 110,
      brand: "OnePlus",
      model: "13R",
      screen_size: 6.78,
      resolution: "2780x1264",
      processor: "Snapdragon 8 Gen 3",
      ram: 12,
      storage: 256,
      main_camera: 50,
      rear_camera: "50 + 50 + 8",
      front_camera: 16,
      battery_capacity: 6000,
      weight: 203,
      os: "Android 15",
      connectivity: "5G",
      price: 24874.48,
      warranty: 2,
      customer_rating: 4.7
    }
  ]
};