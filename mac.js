// cost update function
function updateCost(customization, price) {
    document.getElementById(customization).innerText = price;
}

//total calculation
function totalPrice() {
    const memCost = parseFloat(document.getElementById('mem-cost').innerText);
    const ssdCost = parseFloat(document.getElementById('ssd-cost').innerText);
    const delCost = parseFloat(document.getElementById('deli-cost').innerText);
    const bestPrice = parseFloat(document.getElementById('best-price').innerText);
    const totalPrice = memCost + ssdCost + delCost + bestPrice;
    document.getElementById('tot-price').innerText = totalPrice;
    document.getElementById('final-price').innerText = totalPrice;
}

// event click function
function clickAndSend(customId, customCost, priceCost) {
    document.getElementById(customId).addEventListener('click', function () {
        updateCost(customCost, priceCost);
        totalPrice();
    })
}

// calling func to update memory
clickAndSend('16gb-mem', 'mem-cost', 180);
clickAndSend('8gb-mem', 'mem-cost', 0);
// calling func to update storage
clickAndSend('first-ssd', 'ssd-cost', 0);
clickAndSend('sec-ssd', 'ssd-cost', 100);
clickAndSend('third-ssd', 'ssd-cost', 180);
// calling func to update delivery
clickAndSend('early-del', 'deli-cost', 20);
clickAndSend('prime-del', 'deli-cost', 0);

// promo process
document.getElementById('promo-button').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-code').value;
    if (promoInput == "stevekaku") {
        const currentPrice = parseFloat(document.getElementById('tot-price').innerText);
        const finPrice = currentPrice - (currentPrice * (20 / 100));
        document.getElementById('final-price').innerText = finPrice;
    }
    document.getElementById('promo-code').value = "";
})
