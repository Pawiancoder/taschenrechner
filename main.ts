
//Taschenrechner
let calculating = false;
let number1 = 0;
let op = "";
let number2 = 0;
let result;
let chooseOp = false;
const operator = ["+","-","x",":"];

basic.forever(function () {
    
    if (chooseOp == true) {
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
    numbers1();
})

number1 = 1;
number2 = 4;
op = ":";

const calc = () => {
    if (op == ":") {

    }
}

const numbers1 = () => {
    calculating = true;
    basic.clearScreen();
    basic.showString("1");
    
    
    input.onButtonPressed(Button.A, () => {
        number1 = number1 + 1;
        basic.showNumber(number1);
    })

    input.onButtonPressed(Button.B, () => {
        number1 = number1 -1;
        basic.showNumber(number1);
    })

    input.onButtonPressed(Button.AB, () => {
        number1 = number1;
        basic.showIcon(IconNames.Yes);

    input.onButtonPressed(Button.A, () => {
        numbers2();
    })

    })
};

const numbers2 = () => {
    //Code um nummer 2 zu erstllen
    basic.showNumber(0);
    number2 = 0;
    input.onButtonPressed(Button.A, () => {
        number2 = number2 + 1;
        basic.showNumber(number2);
    })
    input.onButtonPressed(Button.B, () => {
        number2 = number2 - 1;
        basic.showNumber(number2);
    })
    input.onButtonPressed(Button.AB, () => {
        number2 = number2;
        basic.showIcon(IconNames.Yes);
    })
}

const zeichen = () => {
    chooseOp = true;
}
