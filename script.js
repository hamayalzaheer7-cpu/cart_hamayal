
var products = [
    {name: "Handbag", price: 2500, img: "bag.jpg"},
    {name: "Watch", price: 1800, img: "watch.jpg"},
    {name: "Perfume", price: 1200, img: "perfume.jpg"},
    {name: "Shoes", price: 3000, img: "shoes.jpg"},
    {name: "Earrings", price: 900, img: "earrings.jpg"},
    {name: "Wallet", price: 700, img: "wallet.jpg"}
];

var cart = [];

// Show products
function showProducts() {
    var html = "";

    for (var i = 0; i < products.length; i++) {
        html += '<div class="col-6 col-lg-4"><div class="card">';
        html += '<img src="' + products[i].img + '">';
        html += '<div class="card-body">';
        html += '<h5>' + products[i].name + '</h5>';
        html += '<p>Rs. ' + products[i].price + '</p>';
        html += '<button onclick="addCart(' + i + ')">Add to Bag +</button>';
        html += '</div></div></div>';
    }

    document.getElementById("products").innerHTML = html;
}

showProducts();

// Add product
function addCart(i) {
    var found = -1;

    for (var j = 0; j < cart.length; j++) {
        if (cart[j].name == products[i].name) {
            found = j;
        }
    }

    if (found == -1) {
        var item = {
            name: products[i].name,
            price: products[i].price,
            qty: 1
        };

        cart[cart.length] = item;
    } else {
        cart[found].qty = cart[found].qty + 1;
    }

    showCart();
}

// Show cart
function showCart() {
    var html = "";
    var total = 0;

    for (var i = 0; i < cart.length; i++) {
        var name = cart[i].name;
        var price = cart[i].price;
        var qty = cart[i].qty;
        var subtotal = price * qty;

        total = total + subtotal;

        html += '<div class="cart-item">';
        html += name + '<br>';
        html += 'Price: Rs. ' + price + '<br>';
        html += '<button onclick="changeQty(' + i + ',-1)">-</button>';
        html += ' ' + qty + ' ';
        html += '<button onclick="changeQty(' + i + ',1)">+</button><br>';
        html += 'Subtotal: Rs. ' + subtotal;
        html += '</div>';
    }

    if (cart.length == 0) {
        html = "Your bag is empty.";
    }

    document.getElementById("items").innerHTML = html;
    document.getElementById("total").innerHTML = total;
}

// Change quantity
function changeQty(i, amount) {
    cart[i].qty = cart[i].qty + amount;

    if (cart[i].qty == 0) {
        cart.splice(i, 1);
    }

    showCart();
}

showCart();
