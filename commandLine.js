const program = require('commander');
const {addTask} = require('./index.js')
const {prompt} = require('inquirer')



const questions=[
{
	type:'input',
	name:'id',
	message:'Please enter id of your task'
},
{
	type:'input',
	name:'title',
	message:'Please enter title of your task'
},
{
	type:'input',
	name:'text',
	message:'What will you do?'
},

]


program.
	command('add')
	.alias('a')
	.description('Add a task')
	.action(()=>{
		prompt(questions).then(answers=>addTask(answers))
	})

program
    .version("10")
    .description("Hello World")


// program
//     .command('addTask <id> <title> <text>  ')
//      .alias('a')
//      .description('Add Student to system')
//      .action((id,title,text)=>{
//         addTask({id,title,text})
//      });




program.parse(process.argv);
