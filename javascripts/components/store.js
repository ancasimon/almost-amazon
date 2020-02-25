// Because we are importing printToDom from another File, that file name (utilities in our case) needs to now go in front of the printToDom function name. 

import utilities from '../helpers/utilities.js';
import bookData from '../helpers/data/bookData.js';
import cart from '../components/cart.js';

const addToCartEvent = () => {
    cart.cartToDom();    
    };


const makeStore = () => {
    const book = bookData.getBook();
    let domString = '';
    domString += `<h2>${book.name}</h2>`;
    domString += `<button id="add-to-cart-button" type="button" class="btn btn-secondary">Add to Cart</button>`;
    utilities.printToDom('store-container', domString);
    document.getElementById('add-to-cart-button').addEventListener('click', addToCartEvent);
};


// Export functions go at the bottom! You can export only 1 thing!! but that 1 thing can be an object fo many things! You can use key-value pair - whatever you pick as the key doens't matter, but usually developers pick the same name as the value. There's a rule that if the key and value are the same, then you don't have to type both - you can type the value once.

export default { makeStore };