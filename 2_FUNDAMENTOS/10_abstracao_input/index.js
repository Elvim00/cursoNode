const inquirer = require('inquirer')

inquirer.prompt([
    {
      name: 'p1', 
      message: 'Qual a primeira nota?',
    },
    {
        name: 'p2',
        message: 'Qual a segunda nota?',
    }
])
.then(
  (answes) =>{
      const media = ((parseInt(answes.p1) + parseInt(answes.p2)) / 2)
      console.log('A média é', media)
  }
)
.catch(err => console.log(err))