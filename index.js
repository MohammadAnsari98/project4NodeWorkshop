
function addTask(params){
	const fs = require('fs');
	console.log('It worked!!');
	let appendText=params.id+'\n'+params.title+'\n'+params.text+'\n';
fs.appendFileSync('tasks.txt',appendText);
}

function showTask(){
	const fs = require('fs');
	console.log("salamamasm")


}

module.exports={
	addTask,
	showTask
}
