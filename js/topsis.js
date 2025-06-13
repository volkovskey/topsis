function topsis(products, weights, characteristics) {
  // Нормалізація даних
  const normalized = products.map(product => {
    const normalizedProduct = {};
    characteristics.forEach(char => {
      if (char.recommendable && typeof product[char.key] === "number") {
        const values = products.map(p => p[char.key]);
        const min = Math.min(...values);
        const max = Math.max(...values);
        if (max === min) {
          normalizedProduct[char.key] = 1; // Уникаємо ділення на 0
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

  // Визначення ідеального та антиідеального розв'язку
  const ideal = {};
  const antiIdeal = {};
  weights.forEach(weight => {
    const values = normalized.map(p => p[weight.key]);
    ideal[weight.key] = Math.max(...values);
    antiIdeal[weight.key] = Math.min(...values);
  });

  // Обчислення відстаней до ідеального та антиідеального розв'язку
  const scores = normalized.map(product => {
    let distanceToIdeal = 0;
    let distanceToAntiIdeal = 0;
    weights.forEach(weight => {
      const diffIdeal = product[weight.key] - ideal[weight.key];
      const diffAntiIdeal = product[weight.key] - antiIdeal[weight.key];
      distanceToIdeal += Math.pow(diffIdeal, 2) * weight.priority;
      distanceToAntiIdeal += Math.pow(diffAntiIdeal, 2) * weight.priority;
    });
    distanceToIdeal = Math.sqrt(distanceToIdeal);
    distanceToAntiIdeal = Math.sqrt(distanceToAntiIdeal);
    return distanceToAntiIdeal / (distanceToIdeal + distanceToAntiIdeal);
  });

  // Визначення найкращого продукту
  const bestIndex = scores.indexOf(Math.max(...scores));
  return products[bestIndex];
}