'use strict';

var test1 = function() {
    // bad
    const a, b, c, d;

    // bad
    let message = 'hola!' + name.toString();
}

var test2 = function() {
    // good
    const a;
    const b;
    const c;
    const d;

    // good
    let message = 'hola!' + String(name);
}
