var buttonPlus = document.getElementById('buttonPlus')
var buttonMinus = document.getElementById('buttonMinus')
var buttonMul = document.getElementById('buttonMul')
var buttonDiv = document.getElementById('buttonDiv')

var input1 = document.getElementById('number1')
var input2 = document.getElementById('number2')

function getNumber1() {
    return Number(input1.value)
}

function getNumber2() {
    return Number(input2.value)
}

// function calculate(operationCode) {
//     var res
//     if (operationCode === '+') {
//         res = getNumber1() + getNumber2()
//     }
//     if (operationCode === '-') {
//         res = getNumber1() - getNumber2()
//     }
//     if (operationCode === '*') {
//         res = getNumber1() * getNumber2()
//     }
//     if (operationCode === '/') {
//         res = getNumber1() / getNumber2()
//     }
//     window.alert(res)
// }

function calculate(operationCode) {
    var res
    switch (operationCode) {
        case '+':
            res = getNumber1() + getNumber2()
            break
        case '-':
            res = getNumber1() - getNumber2()
            break
        case '*':
            res = getNumber1() * getNumber2()
            break
        case '/':
            res = getNumber1() / getNumber2()
            break
    }
    window.alert(res)
}

function onButtonPlusClick() {
    calculate( '+')
}
function onButtonMinusClick() {
    calculate('-')
}
function onButtonMulClick() {
    calculate('*')
}
function onButtonDivClick() {
    calculate('/')
}

buttonPlus.addEventListener('click', onButtonPlusClick)
buttonMinus.addEventListener('click', onButtonMinusClick)
buttonMul.addEventListener('click', onButtonMulClick)
buttonDiv.addEventListener('click', onButtonDivClick)