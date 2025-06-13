function topsis(products, weights, characteristics) {
  // 1. Нормалізація даних
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

  // 2. Обчислюємо вагову матрицю (зважені нормалізовані значення)
  const weightedNormalized = normalized.map(product => {
    const weightedProduct = {};
    weights.forEach(weight => {
      weightedProduct[weight.key] = product[weight.key] * weight.priority;
    });
    return weightedProduct;
  });

  // 3. Шукаємо найгіршу та найкращу альтернативу (ідеальну та антиідеальну)
  const ideal = {};
  const antiIdeal = {};
  weights.forEach(weight => {
    const values = weightedNormalized.map(p => p[weight.key]);
    ideal[weight.key] = Math.max(...values);
    antiIdeal[weight.key] = Math.min(...values);
  });

  // 4. Розраховуємо відстані до найкращої альтернативи (ідеалу)
  // 5. Розраховуємо відстані до найгіршої альтернативи (антиідеалу)
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

  // 6. Обчислюємо подібність до найкращого продукту
  const scores = distances.map(d => d.ideal / (d.ideal + d.antiIdeal));

  // 7. Ранжуємо та отримуємо найкращий продукт
  const bestIndex = scores.indexOf(Math.min(...scores));
  return products[bestIndex];
}