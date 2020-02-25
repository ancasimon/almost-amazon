import utilities from '../helpers/utilities.js';

const cartToDom = () => {
    let domString = '';
    domString += 'This is the cart';
    utilities.printToDom('cart-container', domString);
};

export default { cartToDom };
