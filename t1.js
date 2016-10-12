'use strict';

var test1 = function() {
    // bad
    let message = 'hola!' + name.toString();
}

var test2 = function() {
    // good v2
    let message = 'hola!' + String(name);
}
