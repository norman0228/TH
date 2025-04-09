function calculate() {
    const price = parseFloat(document.getElementById('price').value) || 0; // 商品售價
    const cost = parseFloat(document.getElementById('cost').value) || 0; // 商品成本
    const rate = parseFloat(document.getElementById('rate').value) || 1.005; // 匯率
    const weight = parseFloat(document.getElementById('weight').value) || 0; // 商品重量
    const shipping = parseFloat(document.getElementById('shipping').value) || 140; // 運費

    const taxRate = 0.05; // 稅率5%
    const corpTaxRate = 0.012; // 營所稅1.2%

    try {
        const costTWD = (cost / rate) * (1 + taxRate); // 商品成本轉台幣並加稅
        const shippingCost = (weight / 1000) * shipping * (1 + taxRate); // 運費計算並加稅
        const totalCost = costTWD + shippingCost;

        const platformFee = price * 0.10 * (1 + taxRate); // 平台抽佣10%加稅
        const paymentFee = price * 0.02 * (1 + taxRate); // 刷卡手續費2%加稅
        const corpTax = price * corpTaxRate; // 營所稅

        const netProfit = price - (platformFee + paymentFee + corpTax) - totalCost; // 淨利潤
        const profitRate = (netProfit / price) * 100; // 獲利率

        document.getElementById('results').innerHTML = `
            <h3>計算結果</h3>
            <p>獲利率：${profitRate.toFixed(2)}%</p>
            <p>淨利潤：$${netProfit.toFixed(2)}</p>
            <p>總成本：$${totalCost.toFixed(2)}</p>
            <p>平台費用：$${platformFee.toFixed(2)}</p>
            <p>支付手續費：$${paymentFee.toFixed(2)}</p>
            <p>營所稅：$${corpTax.toFixed(2)}</p>`;
            
     } catch (error) {
         document.getElementById('results').innerHTML =
             `<p style='color:red;'>錯誤：${error.message}</p>`;
     }
}
