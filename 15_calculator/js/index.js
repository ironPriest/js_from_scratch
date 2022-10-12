var buttonPlus = document.getElementById('buttonPlus')
var buttonMinus = document.getElementById('buttonMinus')
var buttonMul = document.getElementById('buttonMul')
var buttonDiv = document.getElementById('buttonDiv')



function onButtonPlusClick() {
    console.log('onButtonPlusClick')

    var input1 = document.getElementById('number1')
    var input2 = document.getElementById('number2')

    var number1 = Number(input1.value)
    var number2 = Number(input2.value)

    var sum = number1 + number2

    window.alert(sum)
}
function onButtonMinusClick() {
    console.log('onButtonMinusClick')

    var input1 = document.getElementById('number1')
    var input2 = document.getElementById('number2')

    var number1 = Number(input1.value)
    var number2 = Number(input2.value)

    var sum = number1 - number2

    window.alert(sum)
}
function onButtonMulClick() {
    console.log('onButtonMulClick')

    var input1 = document.getElementById('number1')
    var input2 = document.getElementById('number2')

    var number1 = Number(input1.value)
    var number2 = Number(input2.value)

    var sum = number1 * number2

    window.alert(sum)
}
function onButtonDivClick() {
    console.log('onButtonDivClick')

    var input1 = document.getElementById('number1')
    var input2 = document.getElementById('number2')

    var number1 = Number(input1.value)
    var number2 = Number(input2.value)

    var sum = number1 / number2

    window.alert(sum)
}

buttonPlus.addEventListener('click', onButtonPlusClick)
buttonMinus.addEventListener('click', onButtonMinusClick)
buttonMul.addEventListener('click', onButtonMulClick)
buttonDiv.addEventListener('click', onButtonDivClick)