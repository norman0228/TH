function calculate() {
    const price = parseFloat(document.getElementById('price').value) || 0;
    const cost = parseFloat(document.getElementById('cost').value) || 0;
    const rate = parseFloat(document.getElementById('rate').value) || 0;
    const weight = parseFloat(document.getElementById('weight').value) || 0;
    const shipping = parseFloat(document.getElementById('shipping').value) || 0;

    const taxRate = 0.05; // 稅率5%
    const corpTaxRate = 0.012; // 營所稅1.2%

    // 成本計算
    const costTWD = (cost / rate) * (1 + taxRate);
    const shippingCost = (weight / 1000) * shipping * (1 + taxRate);
    
     // 總成本
     const totalCost = costTWD + shippingCost;

