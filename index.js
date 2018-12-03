
function addTask(params){
	const fs = require('fs');
	console.log('It worked!!');
	let appendText='\n'+params.id+'\n'+params.title+'\n'+params.text+'\n';
fs.appendFileSync('tasks.txt',appendText);
}

function showTask(){
	const fs = require('fs');
	var contents = fs.readFileSync('tasks.txt', 'utf8');
	console.log(contents);

}

module.exports={
	addTask,
	showTask
}
