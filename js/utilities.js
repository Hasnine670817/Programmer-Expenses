

// for input value
function inputValueId(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}


// for innerText
function innerTextValueId(id) {
    const innerTextValue = document.getElementById(id).innerText;
    const innerTextValueNumber = parseFloat(innerTextValue);
    return innerTextValueNumber;
}