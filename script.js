function insert(num) {
    let number = document.querySelector('#result').innerHTML 
    if(num === '+' || num === '-' || num === '*' || num === '/'  || num === '**' ) {
        if(number === '') {
            return
    }}
        document.querySelector('#result').innerHTML = number + num
}

function clean() {
    document.querySelector('#result').innerHTML = ''
    document.querySelector('#content').innerHTML = ''
}

function calculate() {

    const numbers = document.querySelector('#result').innerHTML
    const teste = document.querySelector('#content').innerHTML = numbers
    const calculate = document.querySelector('#result').innerHTML = eval(numbers)
       
}