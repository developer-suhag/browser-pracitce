const showProductFromLocal = () => {
    const cart = getCart();
    console.log(cart);
    for (const [name, price] of Object.entries(cart)) {
        displayProduct(name, parseInt(price))
    }

};

const getProduct = () => {
    const productName = document.getElementById('product-name');
    const name = productName.value;
    const productPrice = document.getElementById('product-price');
    const price = productPrice.value;

    if (!name || !price) {
        return;
    }

    // display on ui
    displayProduct(name, price)

    // add product to local stroage
    addProductToLocal(name, price)


    productName.value = '';
    productPrice.value = '';
};

const displayProduct = (name, price) => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = `${name} - ${price}`
    ul.appendChild(li)
};

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart)
    } else {
        cartObj = {}
    }
    return cartObj;
};

const addProductToLocal = (name, price) => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = parseFloat(cart[name]) + parseFloat(price);
    } else {
        cart[name] = price;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
};

const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart')
}

showProductFromLocal()