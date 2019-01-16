function calculate(productType, weight, pricePerKilogram) {
    let weightKg = weight/1000;
    let totalPrice = weightKg*pricePerKilogram;

    console.log(`I need ${totalPrice.toFixed(2)} leva to buy ${weightKg.toFixed(2)} kilograms ${productType}.`);
}

calculate('apple', 1563, 2.35);