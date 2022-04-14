const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt(
    [
        {
            name: 'nome',
            message: 'Qual seu nome?',
        },
        {
            name: 'idade',
            message: 'Qual sua idade?'
        }
    ]
).then(
    (answes) =>{
        const nome = (answes.nome) 
        const idade = (parseInt(answes.idade))
        console.log(chalk.yellow('Seu nome é ', nome, ' e você tem', idade, 'anos'))
    }
  )
  .catch(err => console.log(err))