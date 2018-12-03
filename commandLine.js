const program = require('commander');
const {addStudent} = require('./index.js')

program
    .version("10")
    .description("Hello World")


program
    .command('addStudent <id> <title> <text>  ')
     .alias('a')
     .description('Add Student to system')
     .action((id,title,text)=>{
        addStudent({id,title,text})
     });




program.parse(process.argv);
