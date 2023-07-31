let listSubs = [];

makeMySub = () => {
    let thisSub = getSubDetails();
    
    let toppings = convertArrayToString(getToppingsArr());
    let sauces = convertArrayToString(getSaucesArr());
    
    let price = determinePrice();

    listSubs.push(thisSub);

    let totalPrice = 0;
    for (let i = 0; i < listSubs.length; i++) {
        totalPrice += listSubs[i].price;        
    }

    document.getElementById("listOfSubs").innerHTML += `
        <div class="card h-100" style="width: 48%;">
            <div class="card-body">
                <h4 class="card-title"><strong>${thisSub.name}</strong></h4>
                <p class="card-text">
                    <strong>Bread Type:</strong> ${thisSub.breadType}
                    <br><strong>Toppings:</strong> ${toppings.join(", ")}
                    <br><strong>Sauce(s):</strong> ${sauces.join(", ")}
                    <h5 style="bottom:0; position:absolute;"><strong>Price:</strong> R ${price.toFixed(2)}</h5>
                </p>
            </div>
        </div>
    `
    document.getElementById("runningTotal").innerHTML = `
        <strong>Total cost:</strong> R ${totalPrice.toFixed(2)}
    `
    
    clearForm();
}

validateSub = () => {
    if ((getToppingsArr().length >= 5) && (getSaucesArr().length >= 1)) {
        document.getElementById("addButton").innerHTML = `
            <a class="btn btn-primary btn-lg bg-superSubOrange" role="button" style="margin-top: 40px;" onclick="makeMySub(); validateSub()">Add Sub to Your Order</a>
        `
    }
    else {
        document.getElementById("addButton").innerHTML = `
            <a class="btn btn-primary btn-lg bg-superSubOrange disabled" role="button" style="margin-top: 40px;" onclick="makeMySub(); validateSub()">Add Sub to Your Order</a>
        `
    }
}
getSubDetails = () => {
    let subName = document.getElementById("subName").value;
    if (subName == "") {
        subName = "Generic Name";
    }

    let subBread = document.getElementById("breadChoice").value;
    let currPrice = determinePrice();
    let toppingsArr = getToppingsArr();
    let saucesArr = getSaucesArr();

    let thisSub = {
        name: subName,
        breadType: subBread,
        toppings: toppingsArr,
        sauces: saucesArr,
        price: currPrice
    }

    document.getElementById("runningPrice").innerHTML = `
        <strong>Price:</strong> R ${thisSub.price.toFixed(2)}</h4>
    `

    return thisSub;
}

convertArrayToString = (inArray) => {
    let stringArray = [];
    for (let i = 0; i < inArray.length; i++) {
        stringArray[i] = inArray[i].value;
    }

    return stringArray;
}

getToppingsArr = () => {
    // Get an array of all possible toppings //
    let allToppingsArr = [];

    allToppingsArr.push(document.getElementById("Ham")); 
    allToppingsArr.push(document.getElementById("Salami")); 
    allToppingsArr.push(document.getElementById("Smoked Turkey")); 
    allToppingsArr.push(document.getElementById("Fried Chicken")); 
    allToppingsArr.push(document.getElementById("Roast Beef")); 
    allToppingsArr.push(document.getElementById("Bacon")); 
    allToppingsArr.push(document.getElementById("Pepperoni")); 
    allToppingsArr.push(document.getElementById("Prosciutto")); 
    allToppingsArr.push(document.getElementById("Tuna")); 
    allToppingsArr.push(document.getElementById("Grilled Chicken")); 
    allToppingsArr.push(document.getElementById("Pastrami")); 
    allToppingsArr.push(document.getElementById("Sliced Pork")); 
    allToppingsArr.push(document.getElementById("Meatballs")); 
    allToppingsArr.push(document.getElementById("Cheddar Cheese")); 
    allToppingsArr.push(document.getElementById("Swiss Cheese")); 
    allToppingsArr.push(document.getElementById("Provolone Cheese")); 
    allToppingsArr.push(document.getElementById("Pepper Jack Cheese")); 
    allToppingsArr.push(document.getElementById("Feta Cheese")); 
    allToppingsArr.push(document.getElementById("Tomato")); 
    allToppingsArr.push(document.getElementById("Gherkins")); 
    allToppingsArr.push(document.getElementById("Peppers")); 
    allToppingsArr.push(document.getElementById("Jalapeño Peppers")); 
    allToppingsArr.push(document.getElementById("Red Onion")); 
    allToppingsArr.push(document.getElementById("Sweet Onion")); 
    allToppingsArr.push(document.getElementById("Shredded Lettuce")); 
    allToppingsArr.push(document.getElementById("Cucumber Slices")); 
    allToppingsArr.push(document.getElementById("Avocado Slices")); 
    allToppingsArr.push(document.getElementById("Olives")); 
    allToppingsArr.push(document.getElementById("Mushrooms")); 
    allToppingsArr.push(document.getElementById("Sun-Dried Tomatoes")); 
    allToppingsArr.push(document.getElementById("Pineapple Chunks")); 
    allToppingsArr.push(document.getElementById("Guacamole")); 
    allToppingsArr.push(document.getElementById("Onion Rings"));

    // Get an array of the toppings that are added //
    let toppingsArr = [];
    for (let i = 0; i < allToppingsArr.length; i++) {
        if (allToppingsArr[i].checked) {
            toppingsArr.push(allToppingsArr[i]);
        }
    }

    return toppingsArr;
}
getSaucesArr = () => {
    // Get an array of all possible sauces //
    let allSaucesArr = [];

    allSaucesArr.push(document.getElementById("Tangy Mayonnaise")); 
    allSaucesArr.push(document.getElementById("Mustard")); 
    allSaucesArr.push(document.getElementById("Honey Mustard")); 
    allSaucesArr.push(document.getElementById("Sweet Chilli")); 
    allSaucesArr.push(document.getElementById("BBQ Sauce")); 
    allSaucesArr.push(document.getElementById("Hot Sauce")); 
    allSaucesArr.push(document.getElementById("Ranch Dressing")); 
    allSaucesArr.push(document.getElementById("Secret Sub Sauce")); 

    // Get an array of the sauces that are added //
    let saucesArr = [];
    for (let i = 0; i < allSaucesArr.length; i++) {
        if (allSaucesArr[i].checked) {
            saucesArr.push(allSaucesArr[i]);
        }
    }

    return saucesArr;
}

getBreadPrice = () =>{
    let breadType = document.getElementById("breadChoice").value;

    if (breadType === "Base Roll") {
        breadPrice = 8;
    } else if (breadType === "Sesame Seed Roll") {
        breadPrice = 10;
    } else if (breadType === "Rye Bread") {
        breadPrice = 12;
    } else if (breadType === "Wholewheat Bread") {
        breadPrice = 10;
    } else if (breadType === "Sourdough Bread") {
        breadPrice = 12;
    } else if (breadType === "Garlic Bread") {
        breadPrice = 14;
    } else if (breadType === "Baguette") {
        breadPrice = 14;
    }

    return breadPrice;
}
determinePrice = () =>{
    let toppingsArr = getToppingsArr();
    let saucesArr = getSaucesArr();
    let ingredientsArr = [];

    for (let i = 0; i < toppingsArr.length; i++) {
        if (toppingsArr[i].checked) {
            ingredientsArr.push(toppingsArr[i]);
        }
    }
    for (let i = 0; i < saucesArr.length; i++) {
        if (saucesArr[i].checked) {
            ingredientsArr.push(saucesArr[i]);
        }
    }

    let price = 0;
    price += getBreadPrice();
    for (let i = 0; i < ingredientsArr.length; i++) {
        price += +ingredientsArr[i].dataset.cost;
    }

    return price;
}

clearForm = () => {
    document.getElementById("customisationForm").innerHTML = `
    <form onchange="getSubDetails(); validateSub()">
        <h1>Build a Sub</h1>

        <div class="form-group">
        <label for="subName"><strong>Give your sub a name!</strong></label>
        <input type="text" class="form-control" id="subName" placeholder="">
        </div>

        <div class="form-group">
        <label for="breadChoice"><strong>Choose your bread type</strong></label>
        <select class="form-control" id="breadChoice">
            <option>White Bread</option>
            <option>Sesame Seed Roll</option>
            <option>Rye Bread</option>
            <option>Brown Bread</option>
            <option>Sourdough Bread</option>
            <option>Seeded Bread</option>
            <option>Baguette</option>
            <option>Ciabatta</option>
        </select>
        </div>

        <label for="toppingsList"><strong>Select your sub's toppings</strong> (minimum 5)</label>
        <div class="toppingsForm">
        <div class="row">
            <div class="col-4">
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Ham" id="Ham" data-cost="10">
                <label class="form-check-label" for="Ham">
                Ham
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Salami" id="Salami" data-cost="12">
                <label class="form-check-label" for="Salami">
                Salami
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Peri Peri Chicken Livers" id="Peri Peri Chicken Livers" data-cost="15">
                <label class="form-check-label" for="Peri Peri Chicken Livers">
                Peri Peri Chicken Livers
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Chicken strips" id="Chicken strips" data-cost="18">
                <label class="form-check-label" for="Chicken strips">
                Chicken strips
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Roast Beef" id="Roast Beef" data-cost="20">
                <label class="form-check-label" for="Roast Beef">
                Roast Beef
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Bacon" id="Bacon" data-cost="15">
                <label class="form-check-label" for="Bacon">
                Bacon
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Macon" id="Macon" data-cost="12">
                <label class="form-check-label" for="Macon">
                Macon
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Smoked Salmon" id="Smoked Salmon" data-cost="18">
                <label class="form-check-label" for="Smoked Salmon">
                Smoked Salmon
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Tuna" id="Tuna" data-cost="20">
                <label class="form-check-label" for="Tuna">
                Tuna
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Chicken" id="Chicken" data-cost="18">
                <label class="form-check-label" for="Chicken">
                Chicken
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Biltong" id="Biltong" data-cost="22">
                <label class="form-check-label" for="Biltong">
                Biltong
                </label>
            </div>
            </div>

            <div class="col-4">
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Steak" id="Steak" data-cost="20">
                <label class="form-check-label" for="Steak">
                Steak
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Meatballs" id="Meatballs" data-cost="16">
                <label class="form-check-label" for="Meatballs">
                Meatballs
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Cheddar Cheese" id="Cheddar Cheese" data-cost="8">
                <label class="form-check-label" for="Cheddar Cheese">
                Cheddar Cheese
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Gouda Cheese" id="Gouda Cheese" data-cost="10">
                <label class="form-check-label" for="Gouda Cheese">
                Gouda Cheese
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Mozzarella" id="Mozzarella" data-cost="10">
                <label class="form-check-label" for="Mozzarella">
                Mozzarella
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Cream Cheese" id="Cream Cheese" data-cost="12">
                <label class="form-check-label" for="Cream Cheese">
                Cream Cheese
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Feta Cheese" id="Feta Cheese" data-cost="12">
                <label class="form-check-label" for="Feta Cheese">
                Feta Cheese
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Tomato" id="Tomato" data-cost="5">
                <label class="form-check-label" for="Tomato">
                Tomato
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Gherkins" id="Gherkins" data-cost="4">
                <label class="form-check-label" for="Gherkins">
                Gherkins
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Halloumi" id="Halloumi" data-cost="6">
                <label class="form-check-label" for="Halloumi">
                Halloumi
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Caramelised Onions" id="Caramelised Onions" data-cost="6">
                <label class="form-check-label" for="Caramelised Onions">
                Caramelised Onions
                </label>
            </div>
            </div>

            <div class="col-4">
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Red Onion" id="Red Onion" data-cost="5">
                <label class="form-check-label" for="Red Onion">
                Red Onion
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Peppadew Peppers" id="Peppadew Peppers" data-cost="5">
                <label class="form-check-label" for="Peppadew Peppers">
                Peppadew Peppers
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Shredded Lettuce" id="Shredded Lettuce" data-cost="4">
                <label class="form-check-label" for="Shredded Lettuce">
                Shredded Lettuce
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Cucumber Slices" id="Cucumber Slices" data-cost="6">
                <label class="form-check-label" for="Cucumber Slices">
                Cucumber Slices
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Avocado Slices" id="Avocado Slices" data-cost="12">
                <label class="form-check-label" for="Avocado Slices">
                Avocado Slices
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Green Olives" id="Green Olives" data-cost="6">
                <label class="form-check-label" for="Green Olives">
                Green Olives
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Sliced Cabbage" id="Sliced Cabbage" data-cost="6">
                <label class="form-check-label" for="Sliced Cabbage">
                Sliced Cabbage
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Basil" id="Basil" data-cost="10">
                <label class="form-check-label" for="Basil">
                Basil
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Spinach" id="Spinach" data-cost="8">
                <label class="form-check-label" for="Spinach">
                Spinach
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Fried Egg" id="Fried Egg" data-cost="12">
                <label class="form-check-label" for="Fried Egg">
                Fried Egg
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="toppings" type="checkbox" value="Sliced Banana" id="Sliced Banana" data-cost="8">
                <label class="form-check-label" for="Sliced Banana">
                Sliced Banana
                </label>
            </div>
            </div>
        </div>
        </div>
        
        <br>

        <label for="sauceList"><strong>Select your sub's sauce(s)</strong> (minimum 1)</label>
        <div class="sauceForm" id="sauceList">
        <div class="row">
            <div class="col-6">
            <div class="form-check">
                <input class="form-check-input" name="sauces" type="checkbox" value="Mayonnaise" id="Mayonnaise" data-cost="5">
                <label class="form-check-label" for="Mayonnaise">
                Mayonnaise
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="sauces" type="checkbox" value="Mustard" id="Mustard" data-cost="4">
                <label class="form-check-label" for="Mustard">
                Mustard
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="sauces" type="checkbox" value="Honey Mustard" id="Honey Mustard" data-cost="6">
                <label class="form-check-label" for="Honey Mustard">
                Honey Mustard
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="sauces" type="checkbox" value="Sweet Chilli" id="Sweet Chilli" data-cost="6">
                <label class="form-check-label" for="Sweet Chilli">
                Sweet Chilli
                </label>
            </div>
            </div>
            <div class="col-6">
            <div class="form-check">
                <input class="form-check-input" name="sauces" type="checkbox" value="BBQ Sauce" id="BBQ Sauce" data-cost="4">
                <label class="form-check-label" for="BBQ Sauce">
                BBQ Sauce
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="sauces" type="checkbox" value="Salsa" id="Salsa" data-cost="5">
                <label class="form-check-label" for="Salsa">
                Salsa
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="sauces" type="checkbox" value="Ranch " id="Ranch " data-cost="5">
                <label class="form-check-label" for="Ranch ">
                Ranch 
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" name="sauces" type="checkbox" value="Thousand Island Sauce" id="Thousand Island Sauce" data-cost="8">
                <label class="form-check-label" for="Thousand Island Sauce">
                Thousand Island Sauce
                </label>
            </div>
            </div>
        </div>
        </div>

        <h4 style="margin-top: 40px;" id="runningPrice"><strong>Price: </strong>R 8.00</h4>

        <p class="lead" id="addButton">
        <a class="btn btn-primary btn-lg bg-superSubOrange disabled" role="button" style="margin-top: 40px;" onclick="makeMySub()">Add Sub to Your Order</a>
        </p>

    </form>
    `
}

goToCheckout = () =>{
    let listSubsString = [];
    //Convert listSubs to string//
    for (let i = 0; i < listSubs.length; i++) {
        let currSub = {
            name : listSubs[i].name,
            breadType : listSubs[i].breadType,
            toppings : convertArrayToString(listSubs[i].toppings), 
            sauces : convertArrayToString(listSubs[i].sauces),
            price : listSubs[i].price
        }
        listSubsString.push(currSub);
    }

    let data = JSON.stringify(listSubsString);
    localStorage.setItem('subs', data);
    window.location.href = '../pages/checkout.html';
}