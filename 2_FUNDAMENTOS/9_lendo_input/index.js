const readline = require('readline').createInterface({
  input: process.input,
  output: process.stdout,
})

readline.question('qual a sua linguagem preferida?', (language) =>{
    console.log('A minha linguagem preferida é', language)
})