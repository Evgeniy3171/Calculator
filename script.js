let buttonPlus = document.getElementById('buttonPlus'),
    buttonMinus = document.getElementById('buttonMinus'),
    buttonMultplay = document.getElementById('buttonMultplay'),
    buttonDevide = document.getElementById('buttonDevide'),
    inputFirst = document.getElementById('input-1'),
    inputSecond = document.getElementById('input-2'),
    buttonClear = document.getElementById('cleaner'),
    result;

function makeOperation(operand) {   //в зависимости от переданного операнда происходит соответствующее вычисление
    if (operand === '+') {
        result = +inputFirst.value + +inputSecond.value;
    } else if (operand === '-') {
        result = +inputFirst.value - +inputSecond.value;
    } else if (operand === '*') {
        result = +inputFirst.value * +inputSecond.value;
    } else {
        result = +inputFirst.value / +inputSecond.value;
    }
    console.log('result: ', result);
}
/* первый вариант */
/* function onButtonPlusClick() {
    // result = +inputFirst.value + +inputSecond.value;
    // console.log('result: ', result);
    makeOperation('+');
}

function onButtonMinusClick() {
    // result = +inputFirst.value - +inputSecond.value;
    // console.log('result: ', result);
    makeOperation('-');        
}

function onButtonMultplayClick() {
    // result = +inputFirst.value * +inputSecond.value;
    // console.log('result: ', result); 
    makeOperation('*');       
}

function onButtonDevideClick() {
    // result = +inputFirst.value / +inputSecond.value;
    // console.log('result: ', result);
    makeOperation('/');        
} */

function onCleanerClick() {
    inputFirst.value = "";
    inputSecond.value = "";
}

function onOperationButtonClick(eventObject) {
    const clickedElement = eventObject.currentTarget,
          operation = clickedElement.innerHTML;
    makeOperation(operation);
}

/* buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultplay.addEventListener('click', onButtonMultplayClick);
buttonDevide.addEventListener('click', onButtonDevideClick);
buttonClear.addEventListener('click', onCleanerClick);
 */

buttonPlus.addEventListener('click', onOperationButtonClick);
buttonMinus.addEventListener('click', onOperationButtonClick);
buttonMultplay.addEventListener('click', onOperationButtonClick);
buttonDevide.addEventListener('click', onOperationButtonClick);
buttonClear.addEventListener('click', onCleanerClick);