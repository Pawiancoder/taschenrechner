
//Taschenrechner
let calculating = false;
let number1 = 0;
let op = "";
let number2 = 0;
let result;

basic.forever(function () {
    if (calculating == false) {
        basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
        basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
        basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
        basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . # . .
        . . . . .
        `)
    }
});


input.onButtonPressed(Button.A, () => {
    calculating = true;
    basic.clearScreen();
})

number1 = 1;
number2 = 4;
op = ":";

const calc = () => {
    if (op == ":") {

    }
}

