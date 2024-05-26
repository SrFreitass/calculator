function insert(num) {
    let number = document.querySelector('#result').innerHTML 
    if(num === '+' || num === '*' || num === '/'  || num === '**' ) {
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
    const operation = document.querySelector('#content').innerHTML = numbers
    const result = eval(numbers)
    const visor = document.querySelector("#result")	

    if(isNaN(result)) {	
	visor.innerHTML = "BANIDO DA CALCULADORA"
	return
    }

   visor.innerHTML = result

  
       
}
