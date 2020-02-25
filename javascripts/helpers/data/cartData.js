const cart = [];

// The book name and data is coming from somewhere else so the setCart just needs to pull that data - that's why the setCart function takes the book parameter:

const setCart = (book) => {
    cart.push(book);
};

const getCart = () => {
    return cart;
};

export default { setCart, getCart };