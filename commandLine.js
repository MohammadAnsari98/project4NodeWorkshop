const program = require('commander');
const {addStudent} = require('./index.js')

program
    .version("10")
    .description("Hello World")


program
    .command('addStudent <id> <firstname> <lastname> <phonenumber>  ')
     .alias('a')
     .description('Add Student to system')
     .action((id,firstname,lastname,phonenumber)=>{
        addStudent({id,firstname,lastname,phonenumber})
     });




program.parse(process.argv);
