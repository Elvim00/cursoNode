const x = '10'

// chegar se x é um numero 
if(!Number.isInteger(x)){
    throw new Error('O valor de x não é um numero interio!')
}

console.log('continuo o codigo')