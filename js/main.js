// Created multiple math functions. All operations were carried out with number 5. 

function addition(a, b) {
    let add = a + b;
    document.getElementById("Math").innerHTML = add;
}

function subtraction(a, b) {
    let add = a - b;
    document.getElementById("Math").innerHTML = add;
}

function multiplicat(a, b) {
    let add = a * b;
    document.getElementById("Math").innerHTML = add;
}

function division(a, b) {
    let add = a / b;
    document.getElementById("Math").innerHTML = add;
}

function increment(a) {
    a++;
    let res = a;
        document.getElementById("Math").innerHTML = res;
}

function decrement(a, b) {
    a--
    let res = a;
        document.getElementById("Math").innerHTML = res;
}

function random(a, b) {
    let res = (Math.random() * a);
        document.getElementById("Math").innerHTML = res;
}

