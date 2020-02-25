import utilities from '../helpers/utilities.js';
import cartData from '../helpers/data/cartData.js';

// What we want the cart to do is use a function that puts/adds the book in the cart, then push the book to the array (and we have a function that does that - cartData), then we call the cartToDOm function which gets the latest cart array, loops over it and prints the name into the cart ...

const addToCart = (newBook) => {
    cartData.setCart(newBook);
    cartToDom();
};

const cartToDom = () => {
    const myCart = cartData.getCart();
    let domString = '';
    for (let i = 0; i <  myCart.length; i++) {
        domString += `<h2>${myCart[i].name}</h2>`;
    };
    utilities.printToDom('cart-container', domString);
};

export default { addToCart };
