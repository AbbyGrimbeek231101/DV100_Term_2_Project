let totalPrice = 0;
let finalPrice = 0;
let validCode = false;

showOrder = () => {
    //
    let data = JSON.parse(localStorage.getItem('subs'));
    let items = document.getElementById("tableSubs");
    let totalArea = document.getElementById("totalArea");
    let finalArea = document.getElementById("finalArea");
    
    for (let i = 0; i < data.length; i++) {
        let currName = data[i].name;
        let currBread = data[i].breadType;
        let currToppings = data[i].toppings.join(", ");
        let currSauces = data[i].sauces.join(", ");
        let currPrice = data[i].price;
        totalPrice += currPrice;

        items.innerHTML += `
            <tr>
                <td>${currName}</td>
                <td><strong>Bread Type:</strong> ${currBread}
                <br><strong>Toppings:</strong> ${currToppings}
                <br><strong>Sauce(s):</strong> ${currSauces}</td>
                <td>R ${currPrice.toFixed(2)}</td>
            </tr>
        `
    }
    totalArea.innerHTML = `
        R ${totalPrice}.00
    `
    finalPrice = totalPrice;
    finalArea.innerHTML = `
        R ${finalPrice}.00
    `
}

validateCoupon = () => {
    let validCodes = ["OFF10", "DISCOUNTDETECTIVE25", "SWEETSAVINGS50"];
    let discountAmounts = [10, 25, 50];
    let numCoupons = 3;
    let couponCode = document.getElementById("couponCode").value;

    let index = 0;
    for (let i = 0; i < numCoupons; i++) {
        if (validCode == false) {
            if (couponCode == validCodes[i]) {
                validCode = true;
                index = i;
            }
        }
    }

    let savings = 0;
    finalPrice = totalPrice;
    
    if (validCode === true) {
        savings = totalPrice * (discountAmounts[index] / 100);
        finalPrice -= savings;
        
        document.getElementById("finalSection").innerHTML = `
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Total Price</th>
                  <th scope="col">Discount Applied</th>
                  <th scope="col">Discount Amount</th>
                  <th scope="col">Final Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td id="totalArea">R ${totalPrice.toFixed(2)}</td>
                  <td>Yes</td>
                  <td>- ${discountAmounts[index]} % (- R ${savings.toFixed(2)})</td>
                  <td id="finalArea">R ${finalPrice.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
        `
        document.getElementById("discountSection").innerHTML = `
            <div class="col-8">
                <input type="text" class="form-control" id="couponCode">
            </div>
            <div class="col-4">
                <p class="lead">
                <a class="btn btn-primary btn-lg bg-superSubOrange disabled" role="button" style="margin-top: -5px;" onclick="validateCoupon()">Apply</a>
                </p>
            </div>
        `
    }
    else {
        alert("That coupon code is not valid");
    }
}

resetHome = () => {
    localStorage.removeItem('subs');
    window.location.href = "../index.html";
}