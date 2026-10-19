
var products = [
    {name: "Handbag", price: 2500, img: "bag.jpg"},
    {name: "Watch", price: 1800, img: "watch.jpg"},
    {name: "Perfume", price: 1200, img: "perfume.jpg"},
    {name: "Shoes", price: 3000, img: "shoes.jpg"},
    {name: "Earrings", price: 900, img: "earrings.jpg"},
    {name: "Wallet", price: 700, img: "wallet.jpg"}
];

var cart = [];

// Display all products
function showProducts(list) {
    var html = "";

    for (var i = 0; i < list.length; i++) {
        html += `
        <div class="col-6 col-lg-4">
            <div class="card h-100">
                <img src="${list[i].img}" alt="${list[i].name}">
                <div class="card-body">
                    <h5>${list[i].name}</h5>
                    <p>Rs. ${list[i].price}</p>
                    <button onclick="addCart('${list[i].name}')">
                        Add to Bag +
                    </button>
                </div>
            </div>
        </div>`;
    }

    document.getElementById("products").innerHTML = html;
}

// Show products when page opens
showProducts(products);

// Add product to cart
function addCart(name) {
    var found = false;

    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name == name) {
            cart[i].qty++;
            found = true;
        }
    }

    if (found == false) {
        for (var i = 0; i < products.length; i++) {
            if (products[i].name == name) {
                cart.push({
                    name: products[i].name,
                    price: products[i].price,
                    qty: 1
                });
            }
        }
    }

    showCart();
}

// Update cart and total
function showCart() {
    var html = "";
    var count = 0;
    var total = 0;

    for (var i = 0; i < cart.length; i++) {
        var p = cart[i];

        count = count + p.qty;
        total = total + p.price * p.qty;

        html += `
        <div class="cart-item">
            ${p.name} - Rs. ${p.price}<br>

            <button onclick="changeQty(${i}, -1)">−</button>

            ${p.qty}

            <button onclick="changeQty(${i}, 1)">+</button>

            Subtotal: Rs. ${p.price * p.qty}
        </div>`;
    }

    if (html == "") {
        html = "Your bag is empty.";
    }

    document.getElementById("items").innerHTML = html;
    document.getElementById("count").textContent = count;
    document.getElementById("total").textContent = total;
}

// Increase or decrease quantity
function changeQty(i, amount) {
    cart[i].qty = cart[i].qty + amount;

    if (cart[i].qty == 0) {
        cart.splice(i, 1);
    }

    showCart();
}
