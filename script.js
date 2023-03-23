function insert(num) {
    let number = document.querySelector('#viewfinder').innerHTML
    document.querySelector('#viewfinder').innerHTML = number + num
}

function clean() {
    document.querySelector('#viewfinder').innerHTML = ''
}

function calculate() {
    const numbers = document.querySelector('#viewfinder').innerHTML
    const calculate = document.querySelector('#viewfinder').innerHTML = eval(numbers)
       
}