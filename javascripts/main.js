// Import statements always go at the top!!! Be sure to specify the file type of js at the end of each file name!!!

import store from './components/store.js';

const init = () => {
    store.makeStore();
};

init();


// This is the entry ppint - the init function always lives here and gets called on load. 
// This includes a function called out of store.js
// Utilities will always include the printToDOm funciton (and usually just this for our projects) - cna also include currency formatting
// Data includes all the objects - objects will never go in the main.js file any more - any data /arrays/objects go in the data folder!
