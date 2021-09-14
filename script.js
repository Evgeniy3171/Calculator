let buttonPlus = document.getElementById('buttonPlus'),
    buttonMinus = document.getElementById('buttonMinus'),
    buttonMultplay = document.getElementById('buttonMultplay'),
    buttonDevide = document.getElementById('buttonDevide'),
    inputFirst = document.getElementById('input-1'),
    inputSecond = document.getElementById('input-2'),
    buttonClear = document.getElementById('cleaner'),
    result;

function onButtonPlusClick() {
    result = +inputFirst.value + +inputSecond.value;
    console.log('result: ', result);
}

function onButtonMinusClick() {
    result = +inputFirst.value - +inputSecond.value;
    console.log('result: ', result);        
}

function onButtonMultplayClick() {
    result = +inputFirst.value * +inputSecond.value;
    console.log('result: ', result);        
}

function onButtonDevideClick() {
    result = +inputFirst.value / +inputSecond.value;
    console.log('result: ', result);        
}

function onCleanerClick() {
    inputFirst.value = "";
    inputSecond.value = "";
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultplay.addEventListener('click', onButtonMultplayClick);
buttonDevide.addEventListener('click', onButtonDevideClick);
buttonClear.addEventListener('click', onCleanerClick);