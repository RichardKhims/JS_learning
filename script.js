//@ts-check

let a = prompt("Введите 1-е число");
let b = prompt("Введите 2-е число");

let num_a = Number(a);
let num_b = Number(b);

function calc_plus(a, b) {
    return a + b;
}

function calc_minus(a, b) {
    return a - b;
}

function calc_multuply(a, b) {
    return a * b;
}

function calc_devide(a, b) {
    return a / b;
}

alert("Сумма: " + calc_plus(num_a, num_b) + "\n"
    + "Разность: " + calc_minus(num_a, num_b) + "\n"
    + "Произведение: " + calc_multuply(num_a, num_b) + "\n"
    + "Частное: " + calc_devide(num_a, num_b));