(function(message) {
    console.log(message, 'Hello from IIFE');
})('first');

(function(message) {
    console.log(message, 'Hello from second IIFE');
})('second')